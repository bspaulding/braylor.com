import Banner from "./banner.jsx";
import Colors from "../colors.js"
import Lightbox from "./lightbox.jsx"
import LightboxImageCarousel from "./lightbox_image_carousel.jsx"
import React from "react";
import {
	chunk,
	throttle
} from "../utils.js";

let urls = (function() {
	var ctx = require.context("../../images/photos/proposal/thumbs");
	return ctx.keys().map(ctx);
}());

let containerStyle = {
	backgroundPosition: "center",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
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
		columns: 2,
		compressed: false
	};
	static propTypes = {
		photos: React.PropTypes.shape({
			showFullscreenGuide: React.PropTypes.bool.isRequired,
		}),
		actions: React.PropTypes.shape({
			dismissFullscreenGuide: React.PropTypes.func.isRequired
		})
	};

	constructor(props) {
		super(props);
		this.state = {
			page: 0, pages: chunk(4, urls),
			lightboxImage: ""
		};
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

	next() {
		this.setState({ page: this.state.page === this.state.pages.length - 1 ? 0 : this.state.page + 1 });
	}

	previous() {
		this.setState({ page: this.state.page === 0 ? this.state.pages.length - 1 : this.state.page - 1 })
	}

	columns() {
		return this.state.compressed ? 1 : this.props.columns;
	}

	resized() {
		let isCompressed = window.innerWidth < 768;
		if (isCompressed !== this.state.compressed) {
			let perPage = isCompressed ? 1 : 4;
			let currentIndex = this.state.page * (this.state.compressed ? 1 : 4);
			this.setState({
				compressed: isCompressed,
				pages: chunk(perPage, urls),
				page: Math.floor(currentIndex / perPage)
			});
		}
	}

	showFullscreen(src) {
		let page = Math.floor(urls.indexOf(src) / (this.state.compressed ? 1 : 4));
		if (!page || page < 0) {
			page = this.state.page;
		}
		this.setState({ fullscreenImage: src, page });
	}

	render() {
		let colspan = Math.floor(12 / this.columns());
		let page = this.state.pages[this.state.page] || [];

		let pagination = (
			<div className="col-xs-12" style={{ textAlign: "center", marginBottom: 20 }}>
				<button className="btn btn-link" onClick={this.previous.bind(this)}>
					&laquo; Previous
				</button>
				Page {this.state.page + 1} of {this.state.pages.length}
				<button className="btn btn-link" onClick={this.next.bind(this)}>
					Next &raquo;
				</button>
			</div>
		);

		return (
			<div className="row photos">
				{pagination}
				<div className="col-xs-12">
					<div className="photo-grid" style={gridStyle}>
					{this.props.photos.showFullscreenGuide ?
						<div className="location-fullscreen-guide">
							<p>Tap a Photo to View Fullscreen!</p>
							<button className="btn btn-primary"
								onClick={this.props.actions.dismissFullscreenGuide}>
								OK, I got it!
							</button>
						</div>
					: null}
					{page.map((src) => {
						return (
							<div key={src} className={`col-sm-${colspan} photo`}
								onClick={this.showFullscreen.bind(this, src)} style={
								Object.assign({}, containerStyle, {
									backgroundImage: `url(${src})`
								})}>
							</div>
						);
					})}
					</div>
				</div>
				{pagination}
				{this.state.fullscreenImage ?
					<Lightbox onClose={() => this.setState({ fullscreenImage: "" })}>
						<LightboxImageCarousel
							currentURL={this.state.fullscreenImage}
							onChange={this.showFullscreen.bind(this)}
							urls={urls}/>
					</Lightbox>
				: null}
			</div>
		);
	}
}

export default Photos;
