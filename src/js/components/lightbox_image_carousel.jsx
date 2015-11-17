import Colors from "../colors.js";
import LightboxImage from "./lightbox_image.jsx";
import React from "react";

let navButtonStyle = {
	background: Colors.mineShaft,
	color: "white",
	fontSize: 32,
	padding: "0px 14px 7px",
	position: "absolute",
	top: "50%",
	zIndex: 7
};

let previousButtonStyle = Object.assign({}, navButtonStyle, {
	left: 0
});

let nextButtonStyle = Object.assign({}, navButtonStyle, {
	right: 0
});

class LightboxImageCarousel extends React.Component {
	nextDisabled() {
		let index = this.props.urls.indexOf(this.props.currentURL);
		return index === this.props.urls.length - 1;
	}

	next() {
		let index = this.props.urls.indexOf(this.props.currentURL);
		if (index !== this.props.urls.length) {
			this.props.onChange(this.props.urls[index + 1]);
		}
	}

	previousDisabled() {
		let index = this.props.urls.indexOf(this.props.currentURL);
		return index === 0;
	}

	previous() {
		let index = this.props.urls.indexOf(this.props.currentURL);
		if (index !== 0) {
			this.props.onChange(this.props.urls[index - 1]);
		}
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
		return Object.assign({}, nextButtonStyle, {
			cursor: this.nextDisabled() ? 'not-allowed' : 'pointer'
		});
	}

	previousButtonStyle() {
		return Object.assign({}, previousButtonStyle, {
			cursor: this.previousDisabled() ? 'not-allowed' : 'pointer'
		});
	}

	render() {
		return (
			<div className="lightbox-image-carousel">
				{this.showNavButtons() ?
				<button style={this.previousButtonStyle()} className="btn btn-link" onClick={this.previous.bind(this)}>
					<span style={this.previousIconStyle()}>&laquo;</span>
				</button>
				: null}
				<LightboxImage src={this.props.currentURL}/>
				{this.showNavButtons() ?
				<button style={this.nextButtonStyle()} className="btn btn-link" onClick={this.next.bind(this)}>
					<span style={this.nextIconStyle()}>&raquo;</span>
				</button>
				: null}
			</div>
		);
	}
}

LightboxImageCarousel.displayName = "LightboxImageCarousel";
LightboxImageCarousel.propTypes = {
	urls: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
	currentURL: React.PropTypes.string.isRequired,
	onChange: React.PropTypes.func
};
LightboxImageCarousel.defaultProps = {
	onChange: () => {}
};


export default LightboxImageCarousel;
