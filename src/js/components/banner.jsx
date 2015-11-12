import React from "react";

class Banner extends React.Component {
	render() {
		return <div className="banner">{this.props.children}</div>;
	}
}

export default Banner;
