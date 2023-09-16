import React, { lazy, Suspense } from "react";
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
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
//import InstaMart from "./components/InstaMart";

//lazy load
const InstaMart = lazy(() => import("./components/InstaMart"));
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
			{
				path: "/about", // '/' means from root
				element: <About />,
				children: [{ path: "profile", element: <Profile /> }],
			},
			{ path: "/contact", element: <ContactUs /> },
			{
				path: "/instamart",
				element: (
					//lazy loading
					<Suspense fallback={<Shimmer />}>
						<InstaMart />
					</Suspense>
				),
			},
			{ path: "/restaurant/:id", element: <RestaurantMenu /> },
		],
	},
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
