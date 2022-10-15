export const links = [
	{ path: "/", label: "Home" },
	{ path: "/about", label: "About me" },
	{ path: "/services", label: "services" },
	{ path: "/portfolio", label: "My Work" },
	{ path: "/blog", label: "Blog" },
	{ path: "/contact", label: "Contact Me" },
];

import { MorphingNavBar } from "./MorphingNavBar";

export * from "./BannerHeader";

export * from "./Banner";

import { NavBar } from "./NavBar";

export const Header = ({ active = null }) => {
	return <MorphingNavBar active={active} links={links} />;
};
