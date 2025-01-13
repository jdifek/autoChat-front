import { useState } from 'react'
import { INITIAL_DATA } from '../components/Dashboard/Statistics/statistics.data'

export const useFilterStatistics = () => {
	const [dateRange, setDateRange] = useState('last7days') // Фильтр по дате
	const [customDateRange, setCustomDateRange] = useState({ start: '', end: '' }) // Для выбора периода
	const [messenger, setMessenger] = useState('all') // Фильтр по мессенджеру
	const [category, setCategory] = useState('all')

	// Получение текущей даты и даты 7/30 дней назад
	const today = new Date()
	const last7Days = new Date(today)
	last7Days.setDate(today.getDate() - 7)

	const last30Days = new Date(today)
	last30Days.setDate(today.getDate() - 30)

	// Фильтрация данных
	const filteredData = INITIAL_DATA.filter(entry => {
		const entryDate = new Date(entry.date)
		let isInDateRange = false

		if (dateRange === 'last7days') {
			isInDateRange = entryDate >= last7Days && entryDate <= today
		} else if (dateRange === 'last30days') {
			isInDateRange = entryDate >= last30Days && entryDate <= today
		} else if (
			dateRange === 'custom' &&
			customDateRange.start &&
			customDateRange.end
		) {
			const startDate = new Date(customDateRange.start)
			const endDate = new Date(customDateRange.end)
			isInDateRange = entryDate >= startDate && entryDate <= endDate
		}

		const byMessenger = messenger === 'all' || entry.messenger === messenger
		const byCategory = category === 'all' || entry.category === category

		return isInDateRange && byMessenger && byCategory
	})

	// Если нет данных, добавляем заглушку
	const chartLabels = filteredData.length
		? filteredData.map(entry => `${entry.date} ${entry.time}`)
		: ['Нет данных']

	return {
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
	}
}
