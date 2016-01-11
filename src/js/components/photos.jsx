/* global require */

import Colors from "../colors.js";
import GalleryImage from "./gallery_image.jsx";
import Lightbox from "./lightbox.jsx";
import LightboxImageCarousel from "./lightbox_image_carousel.jsx";
import { Link } from "react-router";
import PhotoCreditFooter from "./photo_credit_footer.jsx";
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

let proposalPhotos = times(57).map((x) => {
	return {
		id: x,
		url: require(`../../images/photos/proposal/thumbs/la-jolla-shores-spaulding-proposal${x+1}.jpg`),
		hiResUrl: require(`../../images/photos/proposal/hires/la-jolla-shores-spaulding-proposal${x+1}.jpg`),
		credit: "Fox and Crown Photography",
		creditLink: "http://www.facebook.com/foxandcrownphotography"
	};
});
let engagementPhotos = times(78).map((x) => {
	return {
		id: 57 + x,
		url: require(`../../images/photos/engagement/thumbs/taylorbradleyengagement_ashleykelemen-${x+1}.jpg`),
		hiResUrl: require(`../../images/photos/engagement/hires/taylorbradleyengagement_ashleykelemen-${x+1}.jpg`),
		credit: "Ashley Kelemen Photography",
		creditLink: "http://ashleykelemen.com"
	};
});
let photos = engagementPhotos.concat(proposalPhotos);

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
		let photo = photos.find((photo) => photo.id === parseInt(this.props.params.photoId, 10)) || photos[0];

		let perPage = this.state.compressed ? 1 : 4;
		let currentIndex = photos.indexOf(photo);
		let pages = chunk(perPage, photos);
		let pageNum = Math.floor(currentIndex / perPage);
		let page = pages[pageNum] || [];

		let previousPhotoId = currentIndex === 0 ? photos[photos.length - 1].id : photos[currentIndex -  1].id;
		let nextPhotoId = currentIndex === photos.length - 1 ? photos[0].id : photos[currentIndex + 1].id;

		let previousPageId = currentIndex === 0 ?
			photos[photos.length - perPage].id :
			photos[currentIndex -  perPage].id;
		let nextPageId = currentIndex >= photos.length - perPage ?
			photos[0].id :
			photos[currentIndex + perPage].id;

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
					{page.map((photo) => {
						return (
							<Link key={photo.url} to={`/photos/${photo.id}?fullscreen=true`}>
								<GalleryImage
									className={`col-sm-${colspan} photo`}
									src={photo.url}
									style={containerStyle}/>
							</Link>
						);
					})}
					</div>
				</div>
				{pagination}
				{this.props.location.query.fullscreen === "true" ?
					<Lightbox closePath={`/photos/${photo.id}`}>
						<LightboxImageCarousel
							urls={photos.map((photo) => photo.hiResUrl)}
							currentURL={photos[currentIndex].hiResUrl}
							nextPath={`/photos/${nextPhotoId}?fullscreen=true`}
							previousPath={`/photos/${previousPhotoId}?fullscreen=true`}>
							<PhotoCreditFooter credit={photo.credit} creditLink={photo.creditLink}/>
						</LightboxImageCarousel>
					</Lightbox>
				: null}
			</div>
		);
	}
}

export default Photos;
