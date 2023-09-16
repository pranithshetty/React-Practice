import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
	const { id } = useParams();

	const restaurant = useRestaurantMenu(id);

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
				<h2>Menu</h2>
			</div>
		</div>
	);
};

export default RestaurantMenu;
