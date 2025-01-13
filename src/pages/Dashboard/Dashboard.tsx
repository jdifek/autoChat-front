import { useState } from 'react'
import DashboardContent from '../../components/Dashboard/DashboardContent/DashboardContent'
import Sidebar from '../../components/Dashboard/Sidebar/Sidebar'
import { useModal } from '../../hooks/useModal'
import styles from './Dashboard.module.scss'

export const Dashboard = () => {
	const { isMenuOpen, toggleMenu } = useModal()
	const [activeSection, setActiveSection] = useState('overview')

	const renderContent = () => {
		switch (activeSection) {
			case 'overview':
				return <DashboardContent section='overview' />
			case 'statistics':
				return <DashboardContent section='statistics' />
			case 'history':
				return <DashboardContent section='history' />
			case 'analytics':
				return <DashboardContent section='analytics' />
			default:
				return <div>Раздел в разработке</div>
		}
	}

	return (
		<div className={styles.dashboard}>
			{/* Overlay */}
			<div
				className={`${styles.overlay} ${isMenuOpen ? styles.active : ''}`}
				onClick={toggleMenu}
			></div>

			{/* Sidebar */}
			<aside
				className={`${styles.sidebar} ${
					isMenuOpen ? styles.open : styles.closed
				}`}
			>
				<Sidebar
					isOpen={isMenuOpen}
					toggleSidebar={toggleMenu}
					setActiveSection={setActiveSection}
				/>
			</aside>

			{/* Content */}
			<main className={styles.content}>{renderContent()}</main>
		</div>
	)
}
