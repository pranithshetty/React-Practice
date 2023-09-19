import { IMG_CDN_URL } from "../constants";
const CartCard = ({ name, description, imageId, price }) => {
	return (
		<div className="w-52 p-2 m-2 shadow-lg bg-slate-100 overflow-hidden ">
			<img
				className="p-2 m-1 aspect-square"
				alt="Burger"
				src={IMG_CDN_URL + imageId}
			/>
			<div style={{ padding: "5px" }}>
				<h2 className="text-lg font-bold p-1 m-1">{name}</h2>
				<h3 className="p-1 m-1">{description}</h3>
				<h4 className="p-1 m-1">{price / 100} Rupees</h4>
			</div>
		</div>
	);
};

export default CartCard;
