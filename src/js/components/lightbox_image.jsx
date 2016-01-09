import React from "react";
import Loading from "./loading.jsx";
import { throttle } from "../utils.js";

function getScaledSize(containerWidth, containerHeight, imageWidth, imageHeight) {
	var width = imageWidth,
		height = imageHeight,
		scaled = {
			height: imageHeight,
			width: imageWidth
		};
	if (imageHeight > containerHeight) {
		height = containerHeight;
		width = height * imageWidth / imageHeight;
		return getScaledSize(containerWidth, containerHeight, width, height);
	} else if (imageWidth > containerWidth) {
		width = containerWidth;
		height = width * imageHeight / imageWidth;
		return getScaledSize(containerWidth, containerHeight, width, height);
	}
	return scaled;
}

let defaultState = { previewSize: {}, loading: true };

class LightboxImage extends React.Component {
	static displayName = "LightboxImage";
	static propTypes = {
		children: React.PropTypes.element,
		src: React.PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);

		this.state = defaultState;
		this.imageLoaded = this.imageLoaded.bind(this);
		this.resized = throttle(this.resized.bind(this), 250);
	}

	componentWillMount() {
		if (typeof window !== "undefined") {
			window.addEventListener("resize", this.resized);
			setTimeout(this.resized, 0);
		}
	}

	componentWillUnmount() {
		if (typeof window !== "undefined") {
			window.removeEventListener("resize", this.resized);
		}
	}

	componentWillReceiveProps(props) {
		if (props.src !== this.props.src) {
			this.setState({ loading: true });
		}
	}

	resized() {
		this.setState({
			previewSize: getScaledSize(
				window.innerWidth,
				window.innerHeight,
				this.refs.image.naturalWidth || window.innerWidth,
				this.refs.image.naturalHeight || window.innerHeight
			)
		});
	}

	imageLoaded() {
		this.setState({
			loading: false,
			previewSize: getScaledSize(
				window.innerWidth,
				window.innerHeight,
				this.refs.image.naturalWidth || window.innerWidth,
				this.refs.image.naturalHeight || window.innerHeight
			)
		});
	}

	render() {
		let { width, height } = this.state.previewSize;
		let offsetY = (window.innerHeight - height) / 2;
		let offsetX = window.innerWidth / 2 - width / 2;
		let wrapperStyle = {
			display: "block",
			height: Math.floor(height),
			left: Math.floor(offsetX),
			top: Math.floor(offsetY),
			width: Math.floor(width)
		};

		return (
      <div className="lightbox-image-wrapper" style={wrapperStyle}>
				{this.state.loading ?
					<Loading/>
				: null}
				<img className="lightbox-image"
					style={{ display: this.state.loading ? "none" : "initial" }}
					ref="image"
					src={this.props.src}
					onLoad={this.imageLoaded}/>
				{this.props.children}
      </div>
		);
	}
}

export default LightboxImage;
