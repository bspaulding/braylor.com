import assign from "../assign.js";
import Colors from "../colors.js";
import LightboxImage from "./lightbox_image.jsx";
import { Link } from "react-router";
import React from "react";

let navButtonHeight = 54;
let navButtonStyle = {
	background: Colors.mineShaft,
	color: "white",
	fontSize: 32,
	height: navButtonHeight,
	padding: "0px 14px 7px",
	position: "absolute",
	top: `calc(50% - ${navButtonHeight / 2}px)`,
	zIndex: 7
};

let previousButtonStyle = assign({}, navButtonStyle, {
	left: 0
});

let nextButtonStyle = assign({}, navButtonStyle, {
	right: 0
});

class LightboxImageCarousel extends React.Component {
	nextDisabled() {
		let index = this.props.urls.indexOf(this.props.currentURL);
		return index === this.props.urls.length - 1;
	}

	previousDisabled() {
		let index = this.props.urls.indexOf(this.props.currentURL);
		return index === 0;
	}

	nextIconStyle() {
		return { opacity: this.nextDisabled() ? 0.5 : 1 };
	}

	previousIconStyle() {
		return { opacity: this.previousDisabled() ? 0.5 : 1 };
	}

	showNavButtons() {
		return this.props.urls.length > 1;
	}

	nextButtonStyle() {
		return assign({}, nextButtonStyle, {
			cursor: this.nextDisabled() ? 'not-allowed' : 'pointer'
		});
	}

	previousButtonStyle() {
		return assign({}, previousButtonStyle, {
			cursor: this.previousDisabled() ? 'not-allowed' : 'pointer'
		});
	}

	render() {
		return (
			<div className="lightbox-image-carousel">
				<div className="lightbox-n-of">
					{this.props.urls.indexOf(this.props.currentURL) + 1} / {this.props.urls.length}
				</div>
				{this.showNavButtons() ?
				<Link style={this.previousButtonStyle()}
					className="btn btn-link"
					to={this.props.previousPath}>
					<span style={this.previousIconStyle()}>&laquo;</span>
				</Link>
				: null}
				<LightboxImage src={this.props.currentURL}/>
				{this.showNavButtons() ?
				<Link style={this.nextButtonStyle()}
					className="btn btn-link"
					to={this.props.nextPath}>
					<span style={this.nextIconStyle()}>&raquo;</span>
				</Link>
				: null}
			</div>
		);
	}
}

LightboxImageCarousel.displayName = "LightboxImageCarousel";
LightboxImageCarousel.propTypes = {
	urls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	currentURL: React.PropTypes.string.isRequired,
	previousPath: React.PropTypes.string.isRequired,
	nextPath: React.PropTypes.string.isRequired
};


export default LightboxImageCarousel;
