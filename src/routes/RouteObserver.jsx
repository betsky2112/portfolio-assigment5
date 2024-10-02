import {useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

const RouteObserver = () => {
	const navigate = useNavigate()

	useEffect(() => {
		const sections = document.querySelectorAll('div[id]')
		const options = {
			root: null,
			threshold: 0.5,
		}

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					const id = entry.target.id
					navigate(`/${id}`)
				}
			})
		}, options)

		sections.forEach((section) => {
			observer.observe(section)
		})

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section)
			})
		}
	}, [navigate])

	return null
}

export default RouteObserver
