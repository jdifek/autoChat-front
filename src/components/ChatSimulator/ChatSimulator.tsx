import { useEffect, useRef } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FaPaperPlane } from 'react-icons/fa'
import { useTheme } from '../../context/ThemeContext'
import { useChatSimulator } from '../../hooks/useChatSimulator'
import { Message } from '../../types'
import styles from './ChatSimulator.module.scss'
import { CHAT_SCENARIOS } from './chat-scenarios.data'

interface IFormInput {
	message: string
}

const ChatSimulator = () => {
	const {
		selectedScenario,
		chatHistory,
		setChatHistory,
		typing,
		handleScenarioChange,
		findBotReply,
		typeReply,
	} = useChatSimulator(CHAT_SCENARIOS[0])
	const { isDarkMode } = useTheme()

	const { register, handleSubmit, reset } = useForm<IFormInput>()

	const chatWindowRef = useRef<HTMLDivElement | null>(null)

	const onSubmit: SubmitHandler<IFormInput> = data => {
		const userMessage: Message = { sender: 'user', text: data.message }
		setChatHistory(prev => [...prev, userMessage, { sender: 'bot', text: '' }])

		const botReply = findBotReply(data.message)
		typeReply(botReply)
		reset()
	}

	// Прокрутка вниз при изменении истории чата
	useEffect(() => {
		if (chatWindowRef.current) {
			chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight
		}
	}, [chatHistory])

	return (
		<div className={`${styles.chatSimulator} ${isDarkMode ? styles.dark : ''}`}>
			<h2 className={styles.title}>Симулятор чата</h2>
			<div className={styles.scenarioSelector}>
				{CHAT_SCENARIOS.map(scenario => (
					<button
						key={scenario.name}
						className={`${styles.scenarioButton} ${
							selectedScenario.name === scenario.name ? styles.active : ''
						}`}
						onClick={() => handleScenarioChange(scenario)}
					>
						{scenario.name}
					</button>
				))}
			</div>
			<div
				ref={chatWindowRef}
				className={`${styles.chatWindow} ${isDarkMode ? styles.dark : ''}`}
			>
				{chatHistory.map((message, index) => (
					<div
						key={index}
						className={`${styles.message} ${isDarkMode ? styles.dark : ''} ${
							message.sender === 'bot' ? styles.bot : styles.user
						}`}
					>
						{message.text}
					</div>
				))}
				{typing && (
					<div className={styles.typingIndicator}>Бот печатает...</div>
				)}
			</div>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.inputSection}>
				<input
					{...register('message', { required: true })}
					type='text'
					placeholder='Введите сообщение...'
					className={`${styles.input} ${isDarkMode ? styles.dark : ''}`}
					disabled={typing}
				/>
				<button className={styles.sendButton}>
					<span className={styles.btnText}>Отправить</span>
					<FaPaperPlane className={styles.btnIcon} />
				</button>
			</form>
		</div>
	)
}

export default ChatSimulator
