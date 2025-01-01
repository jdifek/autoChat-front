import { AlignJustify, X } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useBurgerModal } from '../../hooks/useBurgerModal'
import Button from '../ui/Button/Button'
import CustomModal from '../ui/CustomModal/CustomModal'
import Logo from '../ui/Logo/Logo'
import ThemeSwitch from '../ui/ThemeSwitch/ThemeSwitch'
import styles from './Header.module.scss'
import { NAV_ITEMS } from './nav-items.data'

const Header = () => {
	const { isMenuOpen, toggleMenu } = useBurgerModal()
	const { isDarkMode, toggleTheme } = useTheme()

	return (
		<div className={styles.header}>
			<Logo />
			<button className={styles.burgerMenu} onClick={toggleMenu}>
				<AlignJustify />
			</button>
			{/* mobile */}
			<CustomModal
				open={isMenuOpen}
				onClose={toggleMenu}
				styles={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
				}}
			>
				<nav className={styles.modalNav}>
					<ul className={styles.modalNavList}>
						{NAV_ITEMS.map((item, index) => (
							<li key={index} className={styles.modalNavList__item}>
								<NavLink
									to={item.link}
									className={({ isActive }) => (isActive ? styles.active : '')}
									onClick={toggleMenu}
								>
									{item.name}
								</NavLink>
							</li>
						))}
					</ul>
				</nav>
				<div className={styles.modalBtn}>
					<Button
						isLink
						href='/sign-in'
						styles={{ minWidth: '100%' }}
						onClick={toggleMenu}
					>
						Войти
					</Button>
					<Button isLink href='/sign-up' onClick={toggleMenu}>
						Регистрация
					</Button>
				</div>
				<button onClick={toggleMenu} className={styles.closeMenuBtn}>
					<X />
				</button>
			</CustomModal>

			{/* desktop */}
			<nav className={styles.nav}>
				<ul className={styles.navList}>
					{NAV_ITEMS.map((item, index) => (
						<li key={index} className={styles.navList__item}>
							<NavLink
								to={item.link}
								className={({ isActive }) => (isActive ? styles.active : '')}
							>
								{item.name}
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<div className={styles.btnBlock}>
				<Button isLink href='/sign-in' className={styles.btn}>
					Войти
				</Button>
				<Button isLink href='/sign-up' className={styles.btn}>
					Регистрация
				</Button>
			</div>
			<ThemeSwitch toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
		</div>
	)
}

export default Header
