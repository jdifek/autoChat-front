import { useState } from 'react'
import DashboardContent from '../../components/Dashboard/DashboardContent/DashboardContent'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import styles from './Dashboard.module.scss'

export const Dashboard = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(true)

	const toggleSidebar = () => {
		setSidebarOpen(!isSidebarOpen)
	}

	return (
		<div className={styles.dashboard}>
			{/* Сайдбар */}
			<Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

			{/* Контент */}
			<div className={`${styles.content} ${isSidebarOpen ? styles.open : ''}`}>
				<DashboardContent />
			</div>
		</div>
	)
}
