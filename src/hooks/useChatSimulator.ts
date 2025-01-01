import { useRef, useState } from 'react'
import { Message, Scenario } from '../types'

export const useChatSimulator = (defaultScenario: Scenario) => {
	const [selectedScenario, setSelectedScenario] =
		useState<Scenario>(defaultScenario)
	const [chatHistory, setChatHistory] = useState<Message[]>([
		{ sender: 'bot', text: defaultScenario.welcomeMessage },
	])
	const [typing, setTyping] = useState(false)

	// Хранение текущего интервала для очистки
	const typingIntervalRef = useRef<NodeJS.Timeout | null>(null)

	const handleScenarioChange = (scenario: Scenario) => {
		// Очистка текущего интервала
		if (typingIntervalRef.current) {
			clearInterval(typingIntervalRef.current)
			typingIntervalRef.current = null
			setTyping(false) // Остановка индикатора печати
		}

		// Смена сценария и сброс истории чата
		setSelectedScenario(scenario)
		setChatHistory([{ sender: 'bot', text: scenario.welcomeMessage }])
	}

	const isGibberish = (message: string): boolean => {
		// Сообщение только на русском с пробелами
		const gibberishPattern = /^[а-яА-ЯёЁ\s]+$/
		const words = message.trim().split(/\s+/) // Разделяем сообщение на слова

		if (!message.trim()) return true // Пустое сообщение или только пробелы
		if (!gibberishPattern.test(message)) return true // Сообщение содержит недопустимые символы
		return words.some(word => word.length < 2) // Слово меньше двух букв
	}

	const findBotReply = (message: string): string => {
		if (isGibberish(message)) {
			return 'Извините, я не понял ваш запрос. Попробуйте ввести что-то более осмысленное.'
		}

		const response = selectedScenario.responses.find(response =>
			response.pattern.test(message)
		)
		return response?.reply || 'Извините, я не понял ваш запрос.'
	}

	const typeReply = (text: string) => {
		// Остановка предыдущей анимации, если она есть
		if (typingIntervalRef.current) {
			clearInterval(typingIntervalRef.current)
		}

		setTyping(true)
		let currentText = ''

		typingIntervalRef.current = setInterval(() => {
			if (currentText.length < text.length) {
				currentText += text[currentText.length]
				setChatHistory(prev => {
					const updated = [...prev]
					updated[updated.length - 1] = { sender: 'bot', text: currentText }
					return updated
				})
			} else {
				clearInterval(typingIntervalRef.current!)
				typingIntervalRef.current = null
				setTyping(false)
			}
		}, 50)
	}

	return {
		selectedScenario,
		chatHistory,
		setChatHistory,
		typing,
		handleScenarioChange,
		findBotReply,
		typeReply,
	}
}
