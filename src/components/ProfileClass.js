import React from "react";

class ProfileClass extends React.Component {
	constructor(props) {
		super(props);
		//creating state
		this.state = {
			count: 0,
			count2: 0,
			userInfo: {
				name: "Name",
				location: "Dummy",
			},
		};
		console.log("child Constructor" + this.props.name);
	}

	async componentDidMount() {
		/**
		 * if there is an async operation ie api call (comment 2nd child)
		 * the other liffecycle methods contiue to be called
		 * in this
		 * parent constructor
		 * parent render
		 * child constructor
		 * child render
		 * child componentDidMount
		 * parent ComponentDidMount
		 * child api call - since async delayed
		 * setState again
		 * child render - this is because child id updated
		 * componentDidUpdate
		 */

		/**Example for useCase of comonentWillUnmount
		 * this.timer = setInterval(()=>{
		 * console.log('hello)},1000)
		 * });
		 * If this is set then interval will be set even when moving into another page
		 * it will create anothere interval if moved back into this page
		 * so we need componentWillunmount to clear interval
		 */
		console.log("child ComponentDidMount" + this.props.name);
		//api calls in here
		const data = await fetch("https://api.github.com/users/pranithshetty");
		const json = await data.json();
		this.setState({ userInfo: json });
		console.log(json);
	}
	componentDidUpdate(prevProps, prevState) {
		if (this.state.count !== prevState.count) {
			console.log("do somethig");
		}
		console.log("componentDidUpdate");
	}

	componentWillUnmount() {
		/**
		 * clearInterval(this.timer)
		 */
		console.log("componentWillUnmount");
	}
	render() {
		const { lName } = this.props;
		const { count } = this.state;
		console.log("child Render" + this.props.name);
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
