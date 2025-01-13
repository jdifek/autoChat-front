import { saveAs } from 'file-saver'
import { motion } from 'framer-motion'
import { Line } from 'react-chartjs-2'
import * as XLSX from 'xlsx'
import '../../../../chartConfig.ts'
import { useFilterStatistics } from '../../../hooks/useFilterStatistics.ts'
import styles from './Statistics.module.scss'

const Statistics = () => {
	const {
		dateRange,
		setDateRange,
		customDateRange,
		setCustomDateRange,
		messenger,
		setMessenger,
		category,
		setCategory,
		filteredData,
		chartLabels,
	} = useFilterStatistics()

	const chartData = {
		labels: chartLabels,
		datasets: [
			{
				label: 'Количество сообщений',
				data: filteredData.map(entry => entry.count) || [0],
				borderColor: 'rgba(75, 192, 192, 1)',
				backgroundColor: 'rgba(75, 192, 192, 0.2)',
				tension: 0.4,
			},
		],
	}

	const options = {
		responsive: true,
		plugins: {
			legend: {
				display: true,
			},
			title: {
				display: true,
				text: 'Сообщения по времени суток',
			},
		},
	}

	const exportToCSV = () => {
		const csvData = filteredData.map(
			({ date, time, count, messenger, category }) => ({
				Дата: date,
				Время: time,
				Количество: count,
				Мессенджер: messenger,
				Категория: category,
			})
		)
		const worksheet = XLSX.utils.json_to_sheet(csvData)
		const workbook = XLSX.utils.book_new()
		XLSX.utils.book_append_sheet(workbook, worksheet, 'Статистика')
		const excelBuffer = XLSX.write(workbook, {
			bookType: 'xlsx',
			type: 'array',
		})
		const data = new Blob([excelBuffer], { type: 'application/octet-stream' })
		saveAs(data, 'статистика.xlsx')
	}

	return (
		<motion.div
			className={styles.statistics}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<h2>Статистика</h2>
			<div className={styles.filters}>
				<select value={dateRange} onChange={e => setDateRange(e.target.value)}>
					<option value='last7days'>Последние 7 дней</option>
					<option value='last30days'>Последние 30 дней</option>
					<option value='custom'>Выбрать период</option>
				</select>
				{dateRange === 'custom' && (
					<div className={styles.customDateRange}>
						<input
							type='date'
							value={customDateRange.start}
							onChange={e =>
								setCustomDateRange({
									...customDateRange,
									start: e.target.value,
								})
							}
						/>
						<input
							type='date'
							value={customDateRange.end}
							onChange={e =>
								setCustomDateRange({ ...customDateRange, end: e.target.value })
							}
						/>
					</div>
				)}
				<select value={messenger} onChange={e => setMessenger(e.target.value)}>
					<option value='all'>Все мессенджеры</option>
					<option value='whatsapp'>WhatsApp</option>
					<option value='telegram'>Telegram</option>
					<option value='facebook messenger'>Facebook Messenger</option>
					<option value='instagram direct'>Instagram Direct</option>
				</select>
				<select value={category} onChange={e => setCategory(e.target.value)}>
					<option value='all'>Все категории</option>
					<option value='support'>Поддержка</option>
					<option value='sales'>Продажи</option>
					<option value='feedback'>Обратная связь</option>
				</select>
			</div>
			<div className={styles.chart}>
				<Line data={chartData} options={options} />
			</div>
			<div className={styles.export}>
				<button onClick={exportToCSV}>Экспорт в CSV/Excel</button>
			</div>
		</motion.div>
	)
}

export default Statistics
