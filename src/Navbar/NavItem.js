import React from 'react'
import { useLocation, Link } from 'react-router-dom'

export default function NavItem({ to, children }) {
    var isActive = ""
    let location = useLocation()
    if (location.pathname === to) {
        isActive = "active"
    }
    return (
        <li className={'nav-item ' + isActive}>
            <Link className="nav-link mx-5" to={to}>
                {children}
            </Link>
        </li >
    )

}