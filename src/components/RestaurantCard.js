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

export default RestaurantCard;
