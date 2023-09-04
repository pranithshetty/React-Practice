import { restaurantList } from "../constants";
import { useState } from "react";
const RestaurantCard = ({ name, cusines, rating, image }) => {
	return (
		<div className="restaurant-card">
			<img alt="Burger" src={image} />
			<h2>{name}</h2>
			<h3>{cusines.join(",")}</h3>
			<h4>{rating}</h4>
		</div>
	);
};
const Body = () => {
	const [searchText, searchTextCB] = useState("");
	searchTextHandler = (e) => searchTextCB(e.target.value);
	console.log(searchText);

	return (
		<>
			<div className="search-container">
				<input
					type="text"
					placeholder="Search"
					value={searchText}
					onChange={(e) => searchTextHandler(e)}
				/>
				<button>Search</button>
			</div>
			<div className="restaurant-list">
				{restaurantList?.map((restaurant, key) => {
					return <RestaurantCard key={restaurant.name + key} {...restaurant} />;
				})}
			</div>
		</>
	);
};

export default Body;
