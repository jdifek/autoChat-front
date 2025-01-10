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
		if (typingIntervalRef.current) {
			clearInterval(typingIntervalRef.current)
			typingIntervalRef.current = null
			setTyping(false) // Остановка индикатора печати
		}
		setSelectedScenario(scenario)
		setChatHistory([{ sender: 'bot', text: scenario.welcomeMessage }])
	}

	const isGibberish = (message: string): boolean => {
		// Проверяем, содержит ли сообщение буквы
		const containsLetters = /[а-яА-ЯёЁa-zA-Z]/.test(message)
		// Проверяем, состоит ли сообщение только из символов
		const onlySymbols = /^[^a-zA-Zа-яА-ЯёЁ]+$/u.test(message)

		return !containsLetters || onlySymbols
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
