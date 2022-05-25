import React from "react";
import "./Sidebar.scss";

const Sidebar: React.FC<NavbarProps> = (props) => {
	const { isActive } = props;
	const activeClass = isActive ? 'active' : ""
	return (
		<aside className={`sidebar ${activeClass}`}>
			<h2>My documents</h2>
		</aside>
	);
};

interface NavbarProps {
	isActive: boolean;
}

export default Sidebar;
