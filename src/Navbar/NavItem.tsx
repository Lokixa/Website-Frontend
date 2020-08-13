import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavItemProps {
	children: string | Element
	to: string
	exact?: boolean
}

const NavItem: React.FC<NavItemProps> = ({ to, children, exact }) => {
	const location = useLocation()
	let active = ''
	if (exact) {
		active = location.pathname === to ? 'active' : ''
	} else {
		active = location.pathname.startsWith(to) ? 'active' : ''
	}
	return (
		<li className={'nav-item ' + active}>
			<Link className="nav-link mx-5" to={to}>
				{children}
			</Link>
		</li>
	)
}
export default NavItem
