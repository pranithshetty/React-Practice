import { LOGO_CDN, navItems } from "../constants";
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
					{navItems.map((item, key) => {
						return <li key={key}>{item}</li>;
					})}
				</ul>
			</div>
		</div>
	);
};
export default Header; //default export
