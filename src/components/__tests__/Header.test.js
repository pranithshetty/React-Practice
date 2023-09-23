import Header from "../Header";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("Logo has loaded", () => {
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);

	const logo = header.getByTestId("logo");

	expect(logo.alt).toBe("Tomato");

	//console.log(logo);
});

test("Cart has 0 items inetilayout", () => {
	const header = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
			</Provider>
		</StaticRouter>
	);

	const cart = header.getByTestId("cart");

	expect(cart.innerHTML).toBe("Cart 0");
});
