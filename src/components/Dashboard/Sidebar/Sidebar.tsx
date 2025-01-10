import styles from './Sidebar.module.scss'

interface SidebarProps {
	isOpen: boolean
	toggleSidebar: () => void
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
	return (
		<div
			className={`${styles.sidebar} ${isOpen ? styles.open : styles.closed}`}
		>
			<button className={styles.toggleButton} onClick={toggleSidebar}>
				{isOpen ? 'Закрыть' : 'Открыть'}
			</button>

			<nav className={styles.menu}>
				<ul>
					<li>Обзор</li>
					<li>Статистика</li>
					<li>Настройки ботов</li>
					<li>История сообщений</li>
					<li>Аналитика</li>
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar
