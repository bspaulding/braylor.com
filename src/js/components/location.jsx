import Colors from "../colors.js";
import React from "react";
import Banner from "./banner.jsx";
import locationPinSrc from "../../images/location-pin.svg"
import shareSrc from "../../images/share.svg"
import phoneSrc from "../../images/phone.svg"

let imageStyle = {
	boxShadow: "0px 1px 6px #000",
	borderColor: Colors.heartPink,
	borderRadius: "50%",
	borderStyle: "solid",
	borderWidth: 2,
	maxWidth: 240,
	width: "100%"
};

function makeSectionStyle(src) {
	return {
		backgroundImage: `url(${src})`,
		backgroundPosition: "3px 0px",
		backgroundRepeat: "no-repeat",
		backgroundSize: 18,
		paddingLeft: 34,
		minHeight: 34
	};
}
let locationStyle = makeSectionStyle(locationPinSrc);
let websiteStyle = makeSectionStyle(shareSrc);
let phoneStyle = makeSectionStyle(phoneSrc);

let gridStyle = {
	width: "100%",
	maxWidth: 240,
	display: "flex",
	flexWrap: "wrap",
	float: "right",
	marginTop: 20,
	justifyContent: "space-between",
	height: "0%"
};

let gridImgStyle = {
	cursor: "pointer",
	display: "inline-block",
	height: 70,
	marginBottom: 20,
	width: "calc(50% - 15px)"
};

let images = [
	"http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn2_1.jpg",
	"http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn1_1.jpg",
	"http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn3_1.jpg",
	"http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn5.jpg"
];
let imageIndex = 0;

class Location extends React.Component {
	static displayName = "Location";
	constructor(props) {
		super(props);
		this.state = { imageIndex: 0 };
	}

	updateImage(event) {
		this.setState({ imageIndex: images.indexOf(event.target.src) })
	}

	render() {
		return (
			<div>
			<div className="col-sm-6" style={{ textAlign: "right", paddingTop: 20 }}>
				<img style={imageStyle} src={images[this.state.imageIndex]} />
				<div className="image-carousel" style={gridStyle}>
					{images.map((src) => <img onClick={this.updateImage.bind(this)} src={src} style={gridImgStyle} />)}
				</div>
			</div>
			<div className="col-sm-6">
				<h1 style={{ fontFamily: "Dancing Script" }}>Temecula Creek Inn</h1>
				<p style={websiteStyle}>
					<a href="http://www.temeculacreekinn.com/" target="_blank">
						Visit Website
					</a>
				</p>
				<p style={phoneStyle}>
					<a href="http://www.temeculacreekinn.com/" target="_blank">
						(855) 685&ndash;6299
					</a>
				</p>
				<p style={locationStyle}>
					44501 Rainbow Canyon Rd<br/>
					Temecula, CA 92592<br/>
					<a className="btn btn-primary" role="button" href="https://goo.gl/maps/vtbPUY13pA52" target="_blank"
						style={{
							marginTop: 10
						}}>
						View in Google Maps
					</a>
				</p>
			</div>
			</div>
		)
	}
}

export default Location;
