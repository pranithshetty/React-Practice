import { restaurantList } from "../constants";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";

const filterRestaurants = (searchText, restaurants) => {
	return searchText === ""
		? restaurantList
		: restaurants.filter((restaurant) =>
				restaurant.name.toLowerCase().includes(searchText.toLowerCase())
		  );
};
const Body = () => {
	const [searchText, setSearchText] = useState("");
	const [restaurants, setRestaurant] = useState(restaurantList);
	return (
		<>
			<div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button
					onClick={() => {
						const filterdRestaurants = filterRestaurants(
							searchText,
							restaurants
						);
						setRestaurant(filterdRestaurants);
						setSearchText("");
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{restaurants?.map((restaurant, key) => {
					return <RestaurantCard key={restaurant.name + key} {...restaurant} />;
				})}
			</div>
		</>
	);
};

export default Body;
