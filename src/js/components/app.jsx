import React from "react";
import { Link } from "react-router";

class App extends React.Component {
	static displayName = "App";

	render() {
		return (
			<div>
				<h1>Taylor & Bradley</h1>
				<ul>
					<li><Link to="/story" activeClassName="active">Story</Link></li>
					<li><Link to="/menu" activeClassName="active">Menu</Link></li>
				</ul>
				{this.props.children}
			</div>
		);
	}
}

export default App
