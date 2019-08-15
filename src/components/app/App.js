import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import logo from '../../assets/images/logo.svg'
import './App.css'
// import Anchor from '../react-a'
import Portfolio from '../Portfolio'
import Homepage from '../homepage'
import Header from '../header'

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<div className="content-container">
					<Homepage />
					<Portfolio />
				</div>
			</div>
		</Router>
	)
}

export default App
