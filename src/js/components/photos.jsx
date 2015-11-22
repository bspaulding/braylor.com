/* global require */

import Colors from "../colors.js";
import GalleryImage from "./gallery_image.jsx";
import Lightbox from "./lightbox.jsx";
import LightboxImageCarousel from "./lightbox_image_carousel.jsx";
import { Link } from "react-router";
import React from "react";
import {
	chunk,
	throttle
} from "../utils.js";
import arrowLeftDown from "../../images/Arrow-Left-Down.svg";
import arrowRightDown from "../../images/Arrow-Right-Down.svg";

let times = (x) => {
	var xs = [];
	for (var i = 0; i < x; i += 1) {
		xs.push(i);
	}
	return xs;
};
let urls = times(57).map((x) => require(`../../images/photos/proposal/thumbs/la-jolla-shores-spaulding-proposal${x+1}.jpg`));
let hiResUrls = times(57).map((x) => require(`../../images/photos/proposal/hires/la-jolla-shores-spaulding-proposal${x+1}.jpg`));

let containerStyle = {
	border: `1px solid ${Colors.heartPink}`,
	height: 240,
	marginLeft: 10,
	marginRight: 10,
	marginBottom: 20
};

let gridStyle = {
	margin: "0px auto",
	maxWidth: 768
};

class Photos extends React.Component {
	static displayName = "Photos";
	static defaultProps = {
		columns: 2
	};
	static propTypes = {
		columns: React.PropTypes.number,
		location: React.PropTypes.shape({
			query: React.PropTypes.shape({
				fullscreen: React.PropTypes.bool
			})
		}),
		params: React.PropTypes.shape({
			photoId: React.PropTypes.number
		}).isRequired,
		photos: React.PropTypes.shape({
			showFullscreenGuide: React.PropTypes.bool.isRequired,
		}),
		actions: React.PropTypes.shape({
			dismissFullscreenGuide: React.PropTypes.func.isRequired
		})
	};

	constructor(props) {
		super(props);
		this.state = { compressed: false };
		this.resized = throttle(this.resized.bind(this), 500);
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

	columns() {
		return this.state.compressed ? 1 : this.props.columns;
	}

	resized() {
		let isCompressed = window.innerWidth < 768;
		if (isCompressed !== this.state.compressed) {
			this.setState({
				compressed: isCompressed,
			});
		}
	}

	render() {
		/* eslint complexity: [2, 10] */
		let colspan = Math.floor(12 / this.columns());
		let src = urls[this.props.params.photoId || 0];

		let perPage = this.state.compressed ? 1 : 4;
		let currentIndex = urls.indexOf(src);
		let pages = chunk(perPage, urls);
		let pageNum = Math.floor(currentIndex / perPage);
		let page = pages[pageNum] || [];

		let previousPhotoId = currentIndex === 0 ? urls.length - 1 : currentIndex -  1;
		let nextPhotoId = currentIndex === urls.length - 1 ? 0 : currentIndex + 1;

		let previousPageId = currentIndex === 0 ? urls.length - perPage : currentIndex -  perPage;
		let nextPageId = currentIndex === urls.length - perPage ? 0 : currentIndex + perPage;

		let pagination = (
			<div className="col-xs-12" style={{ textAlign: "center", marginBottom: 20 }}>
				<Link to={`/photos/${previousPageId}`} className="btn btn-link">
					&laquo; Previous
				</Link>
				Page {pageNum + 1} of {pages.length}
				<Link to={`/photos/${nextPageId}`} className="btn btn-link">
					Next &raquo;
				</Link>
			</div>
		);

		return (
			<div className="row photos">
				{pagination}
				<div className="col-xs-12">
					<div className="photo-grid" style={gridStyle}>
					{this.props.photos.showFullscreenGuide ?
						<div className="location-fullscreen-guide">
							<img src={arrowLeftDown} className="hidden-xs" style={{
								left: "calc(50% - 160px)",
								position: "absolute",
								top: 30
							}}/>
							<img src={arrowRightDown} className="hidden-xs" style={{
								left: "calc(50% + 125px)",
								position: "absolute",
								top: 30
							}}/>
							<p>Tap a Photo to View Fullscreen!</p>
							<button className="btn btn-primary"
								onClick={this.props.actions.dismissFullscreenGuide}>
								OK, I got it!
							</button>
						</div>
					: null}
					{page.map((src) => {
						return (
							<Link key={src} to={`/photos/${urls.indexOf(src)}?fullscreen=true`}>
								<GalleryImage
									className={`col-sm-${colspan} photo`}
									src={src}
									style={containerStyle}/>
							</Link>
						);
					})}
					</div>
				</div>
				{pagination}
				{this.props.location.query.fullscreen === "true" ?
					<Lightbox closePath={`/photos/${currentIndex}`}>
						<LightboxImageCarousel
							urls={hiResUrls}
							currentURL={hiResUrls[currentIndex]}
							nextPath={`/photos/${nextPhotoId}?fullscreen=true`}
							previousPath={`/photos/${previousPhotoId}?fullscreen=true`}/>
					</Lightbox>
				: null}
			</div>
		);
	}
}

export default Photos;
