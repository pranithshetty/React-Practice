import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
	const { id } = useParams();

	const { restaurant, restaurantMenu } = useRestaurantMenu(id);

	const dispatch = useDispatch();

	const handleAddItem = (item) => {
		dispatch(addItem(item));
	};
	return !restaurant ? (
		<Shimmer />
	) : (
		<div className="flex">
			<div className="p-2 m-2">
				<h1 className="text-2xl font-extrabold p-2 m-2">{restaurant?.name}</h1>
				<img
					src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
					alt={restaurant?.name}
					style={{ height: "300px", width: "300px" }}
				/>
				<h2 className="p-1 m-1">{restaurant?.cuisines.join(",")}</h2>
				<h2 className="p-1 m-1">{restaurant?.locality}</h2>
				<h2 className="p-1 m-1">{restaurant?.city}</h2>
				<h2 className="p-1 m-1">{restaurant?.avgRating} stars</h2>
			</div>
			<div>
				<h2 className="text-xl font-extrabold p-4 m-2">Menu</h2>
				{restaurantMenu.map((item) => {
					return (
						<div className="flex items-center">
							<h1 key={item?.card?.info?.id}>{item?.card?.info?.name}</h1>
							<button
								className="p-1 m-2  bg-green-300"
								onClick={() => handleAddItem(item?.card?.info)}
							>
								Add Item
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default RestaurantMenu;
