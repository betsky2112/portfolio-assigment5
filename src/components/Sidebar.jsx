/* eslint-disable react/prop-types */

import {NavLink} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
	faUser,
	faBriefcase,
	faStar,
	faHeart,
	faTrophy,
} from '@fortawesome/free-solid-svg-icons'

const Sidebar = ({onNavClick}) => {
	return (
		<div className="sidebar">
			<nav>
				<ul>
					<li>
						<NavLink
							to="/about"
							className={({isActive}) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
							onClick={() => onNavClick('about')}
						>
							<FontAwesomeIcon icon={faUser} /> About
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/experience"
							className={({isActive}) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
							onClick={() => onNavClick('experience')}
						>
							<FontAwesomeIcon icon={faBriefcase} /> Experience
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/skills"
							className={({isActive}) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
							onClick={() => onNavClick('skills')}
						>
							<FontAwesomeIcon icon={faStar} /> Skills
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/interest"
							className={({isActive}) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
							onClick={() => onNavClick('interest')}
						>
							<FontAwesomeIcon icon={faHeart} /> Interest
						</NavLink>
					</li>
					<li>
						<NavLink
							to="/awards"
							className={({isActive}) =>
								isActive ? 'nav-link active' : 'nav-link'
							}
							onClick={() => onNavClick('awards')}
						>
							<FontAwesomeIcon icon={faTrophy} /> Awards
						</NavLink>
					</li>
				</ul>
			</nav>
		</div>
	)
}

export default Sidebar
