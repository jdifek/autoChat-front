import { Moon, SunMedium } from 'lucide-react'

const ThemeSwitch = ({
	toggleTheme,
	isDarkMode,
}: {
	toggleTheme: () => void
	isDarkMode: boolean
}) => {
	return (
		<div className='themeSwitch' onClick={toggleTheme}>
			<div className={`switch ${isDarkMode ? 'dark' : ''}`}>
				{isDarkMode ? <Moon /> : <SunMedium />}
			</div>
		</div>
	)
}

export default ThemeSwitch
