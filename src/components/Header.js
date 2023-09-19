import { LOGO_CDN, navItems } from "../constants";
import { Link } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Title = () => {
	//named export
	return <img alt="Tomato" className="h-28 p-2" src={LOGO_CDN} />;
};
const Header = () => {
	const { user } = useContext(UserContext);
	const cartItems = useSelector((store) => store.cart.items);
	return (
		<div className="flex justify-between bg-slate-100 rounded-lg shadow-lg my-3 py-2 ">
			<Title />
			<div key="nav-items">
				<ul key="ul" className="flex py-10">
					{/* {navItems.map((item, key) => {
						return (
							<Link to={item.toLowerCase()}>
								<li key={key}>{item}</li>
							</Link>
						);
					})} */}
					<Link to="/">
						<li className="px-2">Home</li>
					</Link>
					<Link to="/contact">
						<li className="px-2">Contact</li>
					</Link>
					<Link to="/about">
						<li className="px-2">About</li>
					</Link>
					<Link to="/instamart">
						<li className="px-2">Insta Mart</li>
					</Link>
					<Link to="/cart">
						<li className="px-2">Cart {cartItems.length}</li>
					</Link>
				</ul>
				<span className="p-10 m-2 font-bold">{user.name}</span>
			</div>
		</div>
	);
};
export default Header; //default export
