import { useState } from 'react'
import { Message, Scenario } from '../types'

export const useChatSimulator = (defaultScenario: Scenario) => {
	const [selectedScenario, setSelectedScenario] =
		useState<Scenario>(defaultScenario)
	const [chatHistory, setChatHistory] = useState<Message[]>([
		{ sender: 'bot', text: defaultScenario.welcomeMessage },
	])
	const [typing, setTyping] = useState(false)

	const handleScenarioChange = (scenario: Scenario) => {
		setSelectedScenario(scenario)
		setChatHistory([{ sender: 'bot', text: scenario.welcomeMessage }])
	}

	const isGibberish = (message: string): boolean => {
		// Проверяем, если сообщение похоже на хаотичный текст
		// Сообщение содержит много букв, но не формирует осмысленные слова
		const gibberishPattern = /^[а-яА-ЯёЁ\s]+$/ // Сообщение только на русском с пробелами
		const words = message.split(/\s+/) // Разделяем сообщение на слова

		if (!gibberishPattern.test(message)) return true // Если не только буквы и пробелы
		if (words.length === 0) return true // Пустое сообщение или только пробелы

		// Проверка на хаотичный текст: слова слишком короткие или случайные буквы
		return words.some(
			word =>
				word.length < 2 || /[йцукенгшщзхъфывпролджэячсмитьбю]{3,}/i.test(word)
		)
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
		setTyping(true)
		let currentText = ''
		const interval = setInterval(() => {
			if (currentText.length < text.length) {
				currentText += text[currentText.length]
				setChatHistory(prev => {
					const updated = [...prev]
					updated[updated.length - 1] = { sender: 'bot', text: currentText }
					return updated
				})
			} else {
				clearInterval(interval)
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
