import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Navbar from './components/Navbar/index'

const App = () => {
	return (
		<>
			<Router>
				<Navbar />
				<Routes>
					<Route exact path='/' element={<Home />} />
				</Routes>
			</Router>
		</>
	)
}

export default App