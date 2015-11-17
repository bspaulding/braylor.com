import React from "react";
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

class LightboxImage extends React.Component {
	static displayName = "LightboxImage";
	static propTypes = {
		src: React.PropTypes.string.isRequired
	};

	constructor(props) {
		super(props);

		this.state = { previewSize: {} };
		this.imageLoaded = this.imageLoaded.bind(this);
		this.resized = throttle(this.imageLoaded.bind(this), 250);
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

	imageLoaded(event) {
		this.setState({
			previewSize: getScaledSize(
				window.innerWidth,
				window.innerHeight,
				this.refs.image.naturalWidth,
				this.refs.image.naturalHeight
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
				<img className="lightbox-image"
					ref="image"
					src={this.props.src}
					onLoad={this.imageLoaded}/>
      </div>
		);
	}
}

export default LightboxImage;
