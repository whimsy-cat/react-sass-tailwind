import { useState } from "react";

// import stylesheets
import "./header.scss";
import burger from "../../../assets/burger.svg";
interface HeaderProps {
	name: string;
}
const Header = ({ name }: HeaderProps) => {
	const [openMenu, setOpenMenu] = useState(false);
	const onClick = () => {
		setOpenMenu(!openMenu);
		console.log('on click')
	}

	return (
		<div className="header">
			<div className="header-menu">
				<div className="title">
					<a href="https://jonny.me">{name}.me</a>
				</div>

				<div className="navbar">
					<a href="https://jonny.me">SERVICES</a>
					<a href="https://jonny.me">PORTFOLIO</a>
					<a href="https://jonny.me">PRICING</a>
				</div>

				<div className="header-hambuger"
					onClick={onClick}
				>CLI</div>
			</div>

			{openMenu && (
				<div className="header-menu-wrapper">
					<div className="header-menu-contain">
						SERVICES
					</div>
					<div className="header-menu-contain">
						PORTFOLIO
					</div>
					<div className="header-menu-contain">
						PRICING
					</div>
				</div>
			)}
		</div >
	);
};

export default Header;
