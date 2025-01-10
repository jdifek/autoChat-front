import { Doughnut, Line } from 'react-chartjs-2'
import '../../../../chartConfig.ts'
import styles from './Overview.module.scss'
import { ACTIVITY_DATA, CATEGORY_DATA } from './overview.data.ts'

const Overview = () => {
	const metrics = {
		totalMessages: 1250,
		activeChats: 150,
		averageSatisfaction: 4.5,
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
			},
			title: {
				display: true,
				text: 'Активность по дням',
			},
		},
	}

	return (
		<div className={styles.overview}>
			<h2>Обзор</h2>
			<div className={styles.metrics}>
				<div className={styles.metric}>
					<h3>Сообщения</h3>
					<p>{metrics.totalMessages}</p>
				</div>
				<div className={styles.metric}>
					<h3>Активные чаты</h3>
					<p>{metrics.activeChats}</p>
				</div>
				<div className={styles.metric}>
					<h3>Средняя оценка</h3>
					<p>{metrics.averageSatisfaction}</p>
				</div>
			</div>
			<div className={styles.charts}>
				<div className={styles.chart}>
					<h3>Активность по дням</h3>
					<Line data={ACTIVITY_DATA} options={options} />
				</div>
				<div className={styles.chart}>
					<h3>Распределение запросов</h3>
					<Doughnut data={CATEGORY_DATA} />
				</div>
			</div>
		</div>
	)
}

export default Overview
