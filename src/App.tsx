import { Route, Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import { Features } from './pages/Features/Features'
import { Home } from './pages/Home/Home'

function App() {
	return (
		<div className='container'>
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/features' element={<Features />} />
			</Routes>
		</div>
	)
}

export default App
