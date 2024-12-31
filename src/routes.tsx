import { Route, Routes } from 'react-router-dom'
import { Features } from './pages/Features/Features'
import { Home } from './pages/Home/Home'

const RoutesConfig = () => {
	return (
		<Routes>
			<Route path='/' element={<Home />} />
			<Route path='/features' element={<Features />} />
		</Routes>
	)
}

export default RoutesConfig
