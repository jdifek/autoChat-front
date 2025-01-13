import { useEffect, useState } from 'react'
import { RiMenuFold2Line, RiMenuFoldLine } from 'react-icons/ri'
import { SECTIONS } from './sidebar-nav.data'
import styles from './Sidebar.module.scss'

interface ISidebarProps {
	isOpen: boolean
	toggleSidebar: () => void
	setActiveSection: (section: string) => void
}

const Sidebar = ({
	isOpen,
	toggleSidebar,
	setActiveSection,
}: ISidebarProps) => {
	const [canShowText, setCanShowText] = useState(false)

	useEffect(() => {
		if (isOpen) {
			const timer = setTimeout(() => setCanShowText(true), 300)
			return () => clearTimeout(timer)
		} else {
			setCanShowText(false)
		}
	}, [isOpen])

	const handleSectionClick = (section: string) => {
		setActiveSection(section)
		if (isOpen) {
			toggleSidebar()
		}
	}

	return (
		<div className={`${styles.sidebar} ${isOpen ? '' : styles.closed}`}>
			<button className={styles.toggleButton} onClick={toggleSidebar}>
				{isOpen ? (
					<RiMenuFoldLine className={styles.icon} />
				) : (
					<RiMenuFold2Line className={styles.icon} />
				)}
			</button>

			<nav className={styles.menu}>
				<ul>
					{SECTIONS.map(section => (
						<li
							key={section.key}
							onClick={() => handleSectionClick(section.key)}
						>
							<span className={styles.icon}>
								<section.icon />
							</span>

							<span
								className={`${styles.text} ${canShowText ? styles.open : ''} `}
							>
								{section.label}
							</span>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar
