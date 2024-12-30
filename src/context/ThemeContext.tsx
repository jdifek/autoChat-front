import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useMemo,
	useState,
} from 'react'

interface IThemeContext {
	isDarkMode: boolean
	toggleTheme: () => void
}

const ThemeContext = createContext<IThemeContext | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [isDarkMode, setIsDarkMode] = useState(() => {
		return localStorage.getItem('isDarkMode') === 'true'
	})

	useEffect(() => {
		document.body.classList.toggle('dark-mode', isDarkMode)
	}, [isDarkMode])

	const toggleTheme = () => {
		setIsDarkMode(prevMode => {
			const newMode = !prevMode
			document.body.classList.toggle('dark-mode', newMode)
			localStorage.setItem('isDarkMode', newMode.toString())
			return newMode
		})
	}

	const value = useMemo(() => ({ isDarkMode, toggleTheme }), [isDarkMode])

	return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => {
	const context = useContext(ThemeContext)
	if (!context) {
		throw new Error('useTheme must be used within a ThemeProvider')
	}
	return context
}
