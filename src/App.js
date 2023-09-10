import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; //default import
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import PageNotFound from "./components/PageNotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
//Food App --------------------------------

const AppLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		errorElement: <PageNotFound />,
		children: [
			{ path: "/", element: <Body /> },
			{ path: "/about", element: <About /> },
			{ path: "/contact", element: <ContactUs /> },
			{ path: "/restaurant/:id", element: <RestaurantMenu /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
