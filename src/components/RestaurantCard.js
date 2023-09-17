import { IMG_CDN_URL } from "../constants";
const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
	// console.log(IMG_CDN_URL + cloudinaryImageId);
	return (
		<div className="w-52 h-80 p-2 m-2 shadow-lg bg-slate-100 overflow-hidden">
			<img
				className="w-48 p-2 aspect-square"
				alt="Burger"
				//src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
				src={IMG_CDN_URL + cloudinaryImageId}
			/>
			<div style={{ padding: "5px" }}>
				<h2 className="text-lg font-bold">{name}</h2>
				<h3 className="text-ellipsis">{cuisines.join(",")}</h3>
				<h4>{avgRating}</h4>
			</div>
		</div>
	);
};

export default RestaurantCard;
