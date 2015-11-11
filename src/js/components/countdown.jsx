import React from "react";

class Countdown extends React.Component {
	static displayName = "Countdown";
	static propTypes = {
		to: React.PropTypes.string.isRequired
	};

	render() {
		let days = Math.floor((Date.parse(this.props.to) - (new Date()).getTime()) / (1000 * 60 * 60 * 24));
		return <span>{days} days</span>;
	}
}

export default Countdown;
