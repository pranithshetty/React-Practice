import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";
const useRestaurantMenu = (menuId) => {
	const [restaurant, setRestaurant] = useState(null);
	const [restaurantMenu, setRestaurantMenu] = useState(null);
	useEffect(() => {
		getRestaurantMenu();
	}, []);

	const getRestaurantMenu = async () => {
		const data = await fetch(FETCH_MENU_URL + menuId);
		const json = await data.json();
		setRestaurant(json?.data?.cards[0]?.card?.card?.info);
		setRestaurantMenu(
			json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
				?.card?.itemCards
		);
		console.log(
			json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
				?.card?.itemCards
		);
	};
	return { restaurant, restaurantMenu };
};

export default useRestaurantMenu;
