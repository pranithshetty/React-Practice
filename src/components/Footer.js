import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
	const { user } = useContext(UserContext);
	return (
		<div className="bg-slate-300">
			<h1>
				Developed by: {user.name} {user.email}
			</h1>
		</div>
	);
};

export default Footer;
