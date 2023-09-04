import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";

//session 1
const heading = React.createElement("h1", { id: "heading" }, "Hello");
const heading2 = React.createElement("h2", { id: "heading2" }, "World");
const container = React.createElement("div", { id: "container" }, [
	heading,
	heading2,
]);

//JSX
const jsxHeading = (
	<div>
		<h1>This is JSX</h1>
	</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading);
//root.render(container);
// root.render(jsxHeading);
root.render(<App />);
