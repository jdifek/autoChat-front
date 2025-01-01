import { Route, Routes } from 'react-router-dom'
import { APIDocumentation } from './pages/APIDocumentation/APIDocumentation'
import { Blog } from './pages/Blog/Blog'
import { BotSettings } from './pages/BotSettings/BotSettings'
import { Features } from './pages/Features/Features'
import { GettingStarted } from './pages/GettingStarted/GettingStarted'
import { Home } from './pages/Home/Home'
import { Login } from './pages/Login/Login'
import { Pricing } from './pages/Pricing/Pricing'
import { Registration } from './pages/Registration/Registration'

const RoutesConfig = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/features' element={<Features />} />
			<Route path='/pricing' element={<Pricing />} />
			<Route path='/get-start' element={<GettingStarted />} />
			<Route path='/blog' element={<Blog />} />
			<Route path='/api-docs' element={<APIDocumentation />} />
			<Route path='/bot-set' element={<BotSettings />} />
			<Route path='/sign-in' element={<Login />} />
			<Route path='/sign-up' element={<Registration />} />
		</Routes>
	)
}

export default RoutesConfig
