import { motion } from 'framer-motion'
import { useState } from 'react'
import { useTheme } from '../../context/ThemeContext'
import styles from './FAQPricing.module.scss'
import { QUESTIONS } from './questions.data'

const FAQPricing = () => {
	const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

	const { isDarkMode } = useTheme()

	const toggleFAQ = (index: number) => {
		setExpandedIndex(prevIndex => (prevIndex === index ? null : index))
	}

	return (
		<div className={`${styles.faqContainer} ${isDarkMode ? styles.dark : ''}`}>
			{QUESTIONS.map((faq, index) => (
				<motion.div
					key={index}
					className={styles.faqItem}
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
				>
					<div className={styles.faqQuestion} onClick={() => toggleFAQ(index)}>
						{faq.question}
					</div>
					{expandedIndex === index && (
						<motion.div
							className={styles.faqAnswer}
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: '100px' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
						>
							{faq.answer}
						</motion.div>
					)}
				</motion.div>
			))}
		</div>
	)
}

export default FAQPricing
