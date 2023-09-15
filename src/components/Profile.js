import { useEffect } from "react";

const Profile = () => {
	useEffect(() => {
		const timer = setInterval(() => {
			console.log("hello");
		}, 1000);

		return () => {
			//cleanUp timers
			clearInterval(timer);
			console.log("useEffect return");
		};
	});
	return (
		<div>
			<h1>Profile page</h1>
		</div>
	);
};

export default Profile;
