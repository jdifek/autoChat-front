import { motion } from 'framer-motion'
import { useTheme } from '../../../context/ThemeContext'
import Diagram from '../Diagram/Diagram'
import MessengerIcons from '../MessengerIcons/MessengerIcons'
import styles from './StepGuide.module.scss'
import { STEPS_ITEMS } from './steps-items.data'

const StepGuide = () => {
	const { isDarkMode } = useTheme()

	return (
		<div className={`${styles.box} ${isDarkMode ? styles.dark : ''}`}>
			{STEPS_ITEMS.map((step, index) => (
				<motion.div
					className={styles.step}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: index * 0.2 }}
					viewport={{ once: true }}
				>
					<h2 className={styles.stepTitle}>{step.title}</h2>
					<p className={styles.stepDescription}>{step.description}</p>

					{/* Рендер мессенджеров */}
					{step.messengers && <MessengerIcons messengers={step.messengers} />}

					{/* Рендер изображения */}
					{step.image && (
						<img
							src={step.image}
							alt={step.title}
							className={styles.stepImage}
						/>
					)}

					{/* Рендер диаграммы */}
					{step.diagram && <Diagram />}

					{/* Рендер чек-листа */}
					{step.checklist && (
						<ul className={styles.checklist}>
							{step.checklist.map((item: string, index: number) => (
								<li key={index}>{item}</li>
							))}
						</ul>
					)}
				</motion.div>
			))}
		</div>
	)
}

export default StepGuide
