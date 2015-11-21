import React from "react";
import ladyRingSrc from "../../images/lady-ring.svg";

let loaderStyle = {
	animation: "spin 1s linear infinite",
	display: "block",
	margin: "0px auto",
	position: "relative",
	top: "calc(50% - 150px / 2)",
	width: 150,
	height: 150
};

class Loading extends React.Component {
	static displayName = "Loading";

	render() {
		return <img src={ladyRingSrc} style={loaderStyle}/>;
	}
}

export default Loading;
