import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

interface NavItemProps {
	children: string | Element;
	to: string;
	exact?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, exact }) => {
	const router = useRouter();
	let active = "";
	if (exact) {
		active = router.pathname === to ? "active" : "";
	} else {
		active = router.pathname.startsWith(to) ? "active" : "";
	}
	return (
		<li className={"nav-item " + active}>
			<Link href={to}>
				<a className="nav-link mx-5">{children}</a>
			</Link>
		</li>
	);
};
export default NavItem;
