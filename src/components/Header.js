import { LOGO_CDN, navItems } from "../constants";
import { Link } from "react-router-dom";
export const Title = () => {
	//named export
	return <img alt="Tomato" className="logo" src={LOGO_CDN} />;
};
const Header = () => {
	return (
		<div className="header">
			<Title />
			<div key="nav-items" className="nav-items">
				<ul key="ul" className="nav-items">
					{/* {navItems.map((item, key) => {
						return (
							<Link to={item.toLowerCase()}>
								<li key={key}>{item}</li>
							</Link>
						);
					})} */}
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/contact">
						<li>Contact</li>
					</Link>
					<Link to="/about">
						<li>About</li>
					</Link>
					<Link to="/cart">
						<li>Cart</li>
					</Link>
				</ul>
			</div>
		</div>
	);
};
export default Header; //default export
