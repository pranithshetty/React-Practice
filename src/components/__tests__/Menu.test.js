import { Provider } from "react-redux";
import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import RestaurantMenu from "../RestaurantMenu";
import { MENU_DATA } from "../../mocks/data";
import Header from "../Header";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(MENU_DATA);
		},
	});
});

test("Add item into cart from menu", async () => {
	const retaurantMenu = render(
		<StaticRouter>
			<Provider store={store}>
				<Header />
				<RestaurantMenu />
			</Provider>
		</StaticRouter>
	);
	await waitFor(() => expect(retaurantMenu.getByTestId("menu")));

	const addItemBtn = retaurantMenu.getAllByTestId("add-item-btn");

	fireEvent.click(addItemBtn[0]);
	fireEvent.click(addItemBtn[1]);

	const cart = retaurantMenu.getByTestId("cart");

	expect(cart.innerHTML).toBe("Cart 2");
});
