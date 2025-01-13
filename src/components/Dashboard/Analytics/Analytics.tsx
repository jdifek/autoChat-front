import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import '../../../../chartConfig.ts'
import styles from './Analytics.module.scss'
import {
	FREQUENT_QUESTIONS_DATA,
	KEYWORD_CLOUD_DATA,
	RECOMMENDATIONS_DATA,
	SENTIMENT_DATA,
} from './analytics.data.ts'

const Analytics = () => {
	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
			},
		},
	}

	return (
		<div className={styles.analyticsContainer}>
			<div className={styles.chartSection}>
				<h2>Анализ настроения клиентов</h2>
				<Line data={SENTIMENT_DATA} options={options} />
			</div>

			<motion.div
				className={styles.keywordSection}
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: 'easeOut' }}
			>
				<h2 className={styles.sectionTitle}>Облако ключевых слов</h2>
				<ul className={styles.keywordList}>
					{KEYWORD_CLOUD_DATA.map((item, index) => (
						<motion.li
							key={index}
							className={styles.keywordItem}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							<p className={styles.word}>{item.word}</p>
						</motion.li>
					))}
				</ul>
			</motion.div>

			<div className={styles.faqSection}>
				<h2>Рейтинг наиболее частых вопросов</h2>
				<ul>
					{FREQUENT_QUESTIONS_DATA.map((item, index) => (
						<li key={index}>
							{item.question} — {item.count} запросов
						</li>
					))}
				</ul>
			</div>

			<div className={styles.recommendationSection}>
				<h2>Рекомендации по улучшению</h2>
				<ul>
					{RECOMMENDATIONS_DATA.map((rec, index) => (
						<li key={index}>{rec}</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Analytics
