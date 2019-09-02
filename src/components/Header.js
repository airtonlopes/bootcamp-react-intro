import React from "react";
import user from "../assets/user.png";

function Header() {
	return (
		<header id="header">
			<div className="logo">
				<h1>Facebook</h1>
			</div>
			<div className="profile">
				<span>Airton Lopes</span>
				<img src={user} />
			</div>
		</header>
	);
}
export default Header;
