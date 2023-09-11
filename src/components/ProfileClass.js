import React from "react";

class ProfileClass extends React.Component {
	constructor(props) {
		super(props);
		//creating state
		this.state = {
			count: 0,
			count2: 0,
		};
		console.log("Constructor");
	}

	componentDidMount() {
		console.log("ComponentDidMount");
		//api calls in here
	}

	render() {
		const { lName } = this.props;
		const { count } = this.state;
		console.log("Render");
		return (
			<div>
				<h1>Class profile component</h1>
				<h2>Name: {this.props.name}</h2>
				<h2>LName: {lName}</h2>
				<h2>Count: {count}</h2>
				{/* //Cannot mutate state directly */}
				<button onClick={() => this.setState({ count: count + 1 })}>
					click
				</button>
			</div>
		);
	}
}

export default ProfileClass;
