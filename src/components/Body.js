import { restaurantList } from "../constants";
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
const filterRestaurants = (searchText, restaurants) => {
	return restaurants.filter((restaurant) =>
		restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
	);
};
const Body = () => {
	const [searchText, setSearchText] = useState("");
	const [allRestaurants, setAllRestaurant] = useState([]);
	const [filterdRestaurants, setFilterdRestaurants] = useState([]);
	useEffect(() => {
		getRestaurants();
	}, []);

	async function getRestaurants() {
		const data = await fetch(
			"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
		);
		//https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING
		const json = await data.json();
		setAllRestaurant(
			json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
		);
		setFilterdRestaurants(
			json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle.restaurants
		);
		console.log(
			json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
		);
	}
	if (!allRestaurants) return null;

	return allRestaurants.length === 0 ? (
		<Shimmer />
	) : (
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
						const data = filterRestaurants(searchText, allRestaurants);
						setFilterdRestaurants(data);
						setSearchText("");
					}}
				>
					Search
				</button>
			</div>
			<div className="restaurant-list">
				{filterdRestaurants.length === 0 ? <h1>Not Found</h1> : null}
				{filterdRestaurants?.map((restaurant) => {
					return (
						<Link to={"restaurant/" + restaurant.info.id}>
							<RestaurantCard key={restaurant.info.id} {...restaurant.info} />
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Body;
