import assign from "../assign.js";
import Loading from "./loading.jsx";
import React from "react";

let containerStyle = {
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover"
};

class GalleryImage extends React.Component {
	static displayName = "GalleryImage";
	static propTypes = {
		className: React.PropTypes.string,
		onClick: React.PropTypes.func,
		src: React.PropTypes.string.isRequired,
		style: React.PropTypes.object.isRequired
	};
	static defaultPropTypes = {
		className: "",
		onClick: () => {},
		style: ""
	};

	constructor(props) {
		super(props);

		this.state = { loading: true };
	}

	imageLoaded() {
		this.setState({ loading: false });
	}

	render() {
		let className = `gallery-image ${this.props.className}`;
		let style = assign({}, this.props.style, containerStyle, {
			backgroundImage: this.state.loading ? "" : `url(${this.props.src})`
		});

		return (
			<div className={className}
				onClick={this.props.onClick}
				style={style}>
				{this.state.loading ?  <Loading/> : null}
				<img style={{ display: "none" }}
						src={this.props.src}
						onLoad={() => this.imageLoaded()}/>
			</div>
		);
	}
}

export default GalleryImage;
