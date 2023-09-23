import { Provider } from "react-redux";
import { render, waitFor, fireEvent } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import Body from "../Body";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
	return Promise.resolve({
		json: () => {
			return Promise.resolve(RESTAURANT_DATA);
		},
	});
});

test("Test shimmer loads", async () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Body />
			</Provider>
		</StaticRouter>
	);
	//await waitFor(() => expect(body.getByTestId("shimmer")));
	const shimmer = body.getByTestId("shimmer");
	expect(shimmer.children.length).toBe(10);
	//console.log(shimmer);
});

test("Restaurant list loads", async () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Body />
			</Provider>
		</StaticRouter>
	);
	await waitFor(() => expect(body.getByTestId("search-btn")));

	const restList = body.getByTestId("rest-list");
	expect(restList.children.length).toBe(20);
});

test("Search for food in search", async () => {
	const body = render(
		<StaticRouter>
			<Provider store={store}>
				<Body />
			</Provider>
		</StaticRouter>
	);
	await waitFor(() => expect(body.getByTestId("search-bar")));

	const searchBar = body.getByTestId("search-bar");
	const searchBtn = body.getByTestId("search-btn");

	fireEvent.change(searchBar, {
		target: {
			value: "burger king",
		},
	});

	fireEvent.click(searchBtn);
	const restList = body.getByTestId("rest-list");
	expect(restList.children.length).toBe(1);
});
