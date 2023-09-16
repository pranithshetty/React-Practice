import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/helper";
import useOnline from "../utils/useOnline"; //custom hook
import useRestaurantList from "../utils/useRestaurantList"; //
const Body = () => {
	const [searchText, setSearchText] = useState("");

	const { allRestaurants, filterdRestaurants, setFilterdRestaurants } =
		useRestaurantList();

	const isOnline = useOnline();

	if (!isOnline) return <h1>🔴You are offline!</h1>;

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
						<Link to={"restaurant/" + restaurant?.info?.id}>
							<RestaurantCard
								key={restaurant?.info?.id}
								{...restaurant?.info}
							/>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Body;
