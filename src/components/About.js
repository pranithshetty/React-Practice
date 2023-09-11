import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
const About = () => {
	return (
		<div>
			<h1>About Page</h1>
			<ProfileClassComponent name={"pranith"} lName={"shetty"} />
			<Outlet />
		</div>
	);
};

export default About;
