import {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Sidebar from './components/SideBar'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Interest from './components/Interest'
import Awards from './components/Awards'
import RouteObserver from './routes/RouteObserver'
import './App.css'

class App extends Component {
	handleScroll = (event) => {
		const scrollTop = event.target.scrollTop
		const sectionHeight = window.innerHeight
		const currentIndex = Math.round(scrollTop / sectionHeight)

		const paths = [
			'/',
			'/about',
			'/experience',
			'/skills',
			'/interest',
			'/awards',
		]
		const nextPath = paths[currentIndex]

		if (nextPath) {
			window.history.pushState(null, '', nextPath)
		}
	}

	scrollToSection = (section) => {
		const element = document.getElementById(section)
		if (element) {
			element.scrollIntoView({behavior: 'smooth'})
		}
	}

	render() {
		return (
			<Router>
				<div className="app">
					<Sidebar onNavClick={this.scrollToSection} /> {}
					<div
						className="content"
						style={{height: '100vh', overflowY: 'scroll'}}
						onScroll={this.handleScroll}
					>
						<RouteObserver />
						<div
							id="about"
							style={{height: '100vh'}}
						>
							<Routes>
								<Route
									path="/"
									element={<About />}
								/>
								<Route
									path="/about"
									element={<About />}
								/>
							</Routes>
						</div>
						<div
							id="experience"
							style={{height: '100vh'}}
						>
							<Routes>
								<Route
									path="/experience"
									element={<Experience />}
								/>
							</Routes>
						</div>
						<div
							id="skills"
							style={{height: '100vh'}}
						>
							<Routes>
								<Route
									path="/skills"
									element={<Skills />}
								/>
							</Routes>
						</div>
						<div
							id="interest"
							style={{height: '100vh'}}
						>
							<Routes>
								<Route
									path="/interest"
									element={<Interest />}
								/>
							</Routes>
						</div>
						<div
							id="awards"
							style={{height: '100vh'}}
						>
							<Routes>
								<Route
									path="/awards"
									element={<Awards />}
								/>
							</Routes>
						</div>
					</div>
				</div>
			</Router>
		)
	}
}

export default App
