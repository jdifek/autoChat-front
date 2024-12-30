import { useEffect, useState } from 'react'
import { animated, config, useSpring } from 'react-spring'

const messages = [
	'Автоматизированная переписка с клиентами через AI',
	'Telegram',
	'WhatsApp',
	'Viber',
	'Facebook Messenger',
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
		<div
			style={{
				textAlign: 'center',
				position: 'relative',
				height: '160px',
				marginBottom: '32px',
			}}
		>
			{/* Анимация для нового текста */}
			<animated.h2 style={fadeIn} className='title-animated'>
				{messages[index]}
			</animated.h2>
		</div>
	)
}

export default TitleWithAnimation
