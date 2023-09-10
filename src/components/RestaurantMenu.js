import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
	const { id } = useParams();
	const [restaurant, setRestaurant] = useState(null);
	useEffect(() => {
		getRestaurantMenu();
	}, []);

	const getRestaurantMenu = async () => {
		const data = await fetch(
			`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
		);
		const json = await data.json();
		setRestaurant(json?.data?.cards[0]?.card?.card?.info);
		console.log(json?.data?.cards[0]?.card?.card?.info);
	};

	return !restaurant ? (
		<Shimmer />
	) : (
		<div>
			<h1>{restaurant?.name}</h1>
			<img
				src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
				alt={restaurant?.name}
				style={{ height: "300px", width: "350px" }}
			/>
			<h2>{restaurant?.cuisines}</h2>
			<h2>{restaurant?.locality}</h2>
			<h2>{restaurant?.city}</h2>
			<h2>{restaurant?.avgRating} stars</h2>
			<div>
				<h2>MEnu</h2>
			</div>
		</div>
	);
};

export default RestaurantMenu;
