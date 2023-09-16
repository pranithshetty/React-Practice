import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurantMenu = (menuId) => {
	const [restaurant, setRestaurant] = useState(null);
	useEffect(() => {
		getRestaurantMenu();
	}, []);

	const getRestaurantMenu = async () => {
		const data = await fetch(FETCH_MENU_URL + menuId);
		const json = await data.json();
		setRestaurant(json?.data?.cards[0]?.card?.card?.info);
		//console.log(json?.data?.cards[0]?.card?.card?.info);
	};
	return restaurant;
};

export default useRestaurantMenu;
