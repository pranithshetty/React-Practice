import { useState, useContext } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurants } from "../utils/helper";
import useOnline from "../utils/useOnline"; //custom hook
import useRestaurantList from "../utils/useRestaurantList"; //
import UserContext from "../utils/UserContext";

const Body = () => {
	const [searchText, setSearchText] = useState("");
	const { user, setUser } = useContext(UserContext);

	const { allRestaurants, filterdRestaurants, setFilterdRestaurants } =
		useRestaurantList();

	const isOnline = useOnline();

	if (!isOnline) return <h1>🔴You are offline!</h1>;

	if (!allRestaurants) return null;

	return allRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<>
			<div className="p-2 m-2 bg-slate-100 shadow-lg">
				<input
					data-testid="search-bar"
					className="p-2 mx-2 rounded-lg"
					type="text"
					placeholder="Search"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
				/>
				<button
					className="p-2 mx-2 text-slate-200 font-bold rounded-lg bg-blue-300"
					data-testid="search-btn"
					onClick={() => {
						const data = filterRestaurants(searchText, allRestaurants);
						setFilterdRestaurants(data);
						setSearchText("");
					}}
				>
					Search
				</button>
				<input
					value={user.name}
					onChange={(e) => setUser({ ...user, name: e.target.value })}
				/>
				<input
					value={user.email}
					onChange={(e) => setUser({ ...user, email: e.target.value })}
				/>
			</div>
			<div className="flex flex-wrap justify-evenly" data-testid="rest-list">
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
