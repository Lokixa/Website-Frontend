import React from 'react'
import { Link, useLocation } from 'react-router-dom'

interface NavItemProps {
	children: string | Element
	to: string
}

const NavItem: React.FC<NavItemProps> = ({ to, children }) => {
	const location = useLocation()
	const active = location.pathname === to ? 'active' : ''
	return (
		<li className={'nav-item ' + active}>
			<Link className="nav-link mx-5" to={to}>
				{children}
			</Link>
		</li>
	)
}
export default NavItem
