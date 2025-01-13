import {
	FaChartLine,
	FaChartPie,
	FaCog,
	FaComments,
	FaHistory,
} from 'react-icons/fa'

export const SECTIONS = [
	{ key: 'overview', label: 'Обзор', icon: FaChartPie },
	{ key: 'statistics', label: 'Статистика', icon: FaChartLine },
	{ key: 'bots', label: 'Настройки ботов', icon: FaCog },
	{ key: 'history', label: 'История сообщений', icon: FaHistory },
	{ key: 'analytics', label: 'Аналитика', icon: FaComments },
]
