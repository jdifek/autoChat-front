import { useEffect, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'

const messages = [
	'Автоматизированная переписка с клиентами через AI',
	'Telegram',
	'WhatsApp',
	'Facebook Messenger',
	'Instagram Direct',
]

const TitleWithAnimation = () => {
	const [index, setIndex] = useState(0)

	// Анимация для плавного перехода текста
	const fadeIn = useSpring({
		opacity: 1,
		transform: 'translateY(0px)', // Плавное появление сдвига текста
		from: { opacity: 0, transform: 'translateY(30px)' },
		config: config.slow, // Замедленная анимация для плавности
	})

	// Меняем текст каждые 2 секунды
	useEffect(() => {
		const interval = setInterval(() => {
			setIndex(prevIndex => (prevIndex + 1) % messages.length)
		}, 2000) // Смена текста каждые 2 секунды

		return () => clearInterval(interval)
	}, [])

	return (
		<div className='thumb-animated'>
			{/* Анимация для нового текста */}
			<animated.h2 style={fadeIn} className='thumb-animated__title'>
				{messages[index]}
			</animated.h2>
		</div>
	)
}

export default TitleWithAnimation
