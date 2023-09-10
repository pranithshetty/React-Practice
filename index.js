/**
 * session 1 data do not use for project
 *
 */

import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement(
	"h1",
	{ id: "heading", key: "h1" },
	"Hello"
);
const heading2 = React.createElement(
	"h2",
	{ id: "heading2", key: "h1" },
	"World"
);
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
// root.render(<App />);
root.render(root);
