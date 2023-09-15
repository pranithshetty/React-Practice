import { Outlet } from "react-router-dom";
import ProfileClassComponent from "./ProfileClass";
import { render } from "react-dom";
class About extends React.Component {
	constructor(props) {
		super(props);
		console.log("parent constructor");
	}
	componentDidMount() {
		console.log("parent is mounted");
	}

	render() {
		console.log("parent is rendered");
		return (
			<div>
				<h1>About Page</h1>
				<ProfileClassComponent name={"child 1"} lName={"shetty"} />
				<ProfileClassComponent name={"child 2"} lName={"shetty"} />
				<Outlet />
			</div>
		);
	}
}

export default About;

/**  
 * parent constructor
// parent render
// ---child1 constructor
// ---child1 render
// ---child2 constructor
// ---child2 render
//dom is updated for children
// ---child1 componentDidMount
// ---child2 componentDidUnmount
// parent componentDidMount
*/
