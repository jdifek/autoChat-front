import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ParallaxProvider } from 'react-scroll-parallax'
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
import App from './App'
import './assets/styles/main.scss'
import { ThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<ThemeProvider>
				<ParallaxProvider>
					<App />
				</ParallaxProvider>
			</ThemeProvider>
		</BrowserRouter>
	</StrictMode>
)
