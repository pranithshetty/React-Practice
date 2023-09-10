import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
	// console.log(IMG_CDN_URL + cloudinaryImageId);
	return (
		<div className="restaurant-card">
			<img
				alt="Burger"
				//src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
				src={IMG_CDN_URL + cloudinaryImageId}
			/>
			<div style={{ padding: "5px" }}>
				<h2>{name}</h2>
				<h3 style={{ textOverflow: "ellipsis" }}>{cuisines.join(",")}</h3>
				<h4>{avgRating}</h4>
			</div>
		</div>
	);
};

export default RestaurantCard;
