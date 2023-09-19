import { useDispatch, useSelector } from "react-redux";
import CartCard from "./CartCard";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
	const cartItems = useSelector((store) => store.cart.items);
	const dispatch = useDispatch();
	const handleClearCart = () => {
		dispatch(clearCart());
	};

	return (
		<div>
			<div className="flex">
				<h1 className="text-2xl font-bold p-2 m-1">
					Items in cart: {cartItems.length}
				</h1>
				<button
					onClick={() => handleClearCart()}
					className="border-red-500 border bg-red-100 text-red-500 rounded-md p-2 m-2"
				>
					Clear cart
				</button>
			</div>
			<div className="flex">
				{cartItems.map((cartItem) => {
					return <CartCard key={cartItem?.id} {...cartItem} />;
				})}
			</div>
		</div>
	);
};

export default Cart;
