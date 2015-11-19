import Colors from "../colors.js";
import React from "react";
import Banner from "./banner.jsx";
import locationPinSrc from "../../images/location-pin.svg"
import shareSrc from "../../images/share.svg"
import phoneSrc from "../../images/phone.svg"
import temeculaPicSrc from "../../images/TemeculaCreekInn2_1.jpg"

let imageStyle = {
	boxShadow: "0px 1px 6px #000",
	borderColor: Colors.heartPink,
	borderRadius: "50%",
	borderStyle: "solid",
	borderWidth: 2,
	maxWidth: 280,
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
	float: "right",
	marginTop: 20,
	height: "0%"
};

let gridImgStyle = {
	cursor: "pointer",
	display: "inline-block",
	height: 70,
	marginBottom: 20,
	width: "calc(50% - 15px)",
};

let colWidth = 242;

class Location extends React.Component {
	static displayName = "Location";

	render() {
		return (
			<div className="row location">
				<div className="col-sm-6 images">
					<img style={imageStyle} src={temeculaPicSrc} />
				</div>
				<div className="col-sm-6 info">
					<h1 style={{ fontFamily: "Dancing Script" }}>Temecula Creek Inn</h1>
					<div className="info-detail">
						<p style={websiteStyle}>
							<a href="http://www.temeculacreekinn.com/" target="_blank">
								Visit Website
							</a>
						</p>
						<p style={phoneStyle}>
							<a href="tel:8556856299" target="_blank">
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
				<div className="col-xs-12">
					<div className="center-block" style={{ maxWidth: colWidth * 2 + 72 }}>
						<div className="column" style={{ margin: "0px auto", width: colWidth }}>
							<Banner>Accomodations</Banner>
							<p>
								We have arranged for a special wedding discount on rooms at the Temecula Creek Inn for Friday and Saturday night and encourage you to make reservations before the first of the year as they will begin to fill up in the Spring.
							</p>
						</div>
						<div className="column" style={{ margin: "0px auto", width: colWidth }}>
							<Banner>Travel</Banner>
							<p>
								The closest airport options are to fly into either San Diego or Ontario airport in Los Angeles (Orange County or LAX are also options but are farther away).
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Location;
