import React from 'react'
import NavItem from './NavItem'

export default function Navbar() {
	return (
		<nav className="navbar navbar-expand-sm bg-dark justify-content-center navbar-dark mb-4">
			<ul className="navbar-nav">
				<NavItem to="/projects">Projects</NavItem>
				<NavItem to="/">Home</NavItem>
				<NavItem to="/cool-things">Cool Things</NavItem>
			</ul>
		</nav>
	)
}
