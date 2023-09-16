import { useState, useEffect } from "react";

const useRestaurantList = () => {
	const [allRestaurants, setAllRestaurant] = useState([]);
	const [filterdRestaurants, setFilterdRestaurants] = useState([]);
	useEffect(() => {
		getRestaurants();
	}, []);

	async function getRestaurants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		const json = await data.json();
		setAllRestaurant(
			json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
		);
		setFilterdRestaurants(
			json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
		);
		// console.log(
		// 	json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		// );
	}

	return {
		allRestaurants,
		filterdRestaurants,
		setAllRestaurant,
		setFilterdRestaurants,
	};
};

export default useRestaurantList;
