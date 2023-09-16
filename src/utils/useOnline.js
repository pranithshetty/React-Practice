import { useEffect, useState } from "react";

const useOnline = () => {
	const [isOnline, setisOnline] = useState(true);

	//call once on load
	useEffect(() => {
		const handleOffline = () => {
			setisOnline(false);
		};

		const handleOnline = () => {
			setisOnline(true);
		};

		window.addEventListener("online", handleOnline);
		window.addEventListener("offline", handleOffline);

		return () => {
			window.removeEventListener("offline", handleOffline);
			window.removeEventListener("offline", handleOnline);
		};
	}, []);
	return isOnline;
};
export default useOnline;
