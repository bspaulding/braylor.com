import React from "react";
import scribbleCircleURL from "../../images/scribble-circle.svg";

let styles = {
	outer: {
		backgroundImage: "url(" + scribbleCircleURL + ")",
		backgroundRepeat: "no-repeat",
		backgroundSize: "120px 120px",
		fontFamily: "Chalkduster",
		fontSize: 24,
		height: 120,
		lineHeight: "34px",
		paddingTop: (120 / 2 - 34),
		textAlign: "center",
		width: 120
	},
	span: {
		opacity: 0.8
	}
};

class Countdown extends React.Component {
	static displayName = "Countdown";
	static propTypes = {
		to: React.PropTypes.string.isRequired,
		style: React.PropTypes.object
	};
	static defaultProps = { style: {} };

	render() {
		let days = Math.max(0, Math.floor((Date.parse(this.props.to) - (new Date()).getTime()) / (1000 * 60 * 60 * 24)));
		return (
			<div style={Object.assign({}, this.props.style, styles.outer)}>
				<span style={styles.span}>{days}<br/>days</span>
			</div>
		);
	}
}

export default Countdown;
