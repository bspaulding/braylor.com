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
	maxWidth: 320,
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

class Location extends React.Component {
	static displayName = "Location";

	render() {
		return (
			<div className="row location">
				<div className="col-sm-6 images">
					<img style={imageStyle} src="http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn2_1.jpg" />
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
				<div className="col-xs-12 travel-advisory">
					<div className="travel-advisory-inner">
					<p>Ligula. Nunc turpis. Mauris vitae sapien. Nunc luctus bibendum velit.</p>

					<p>Morbi faucibus volutpat sapien. Nam ac mauris at justo adipiscing facilisis.
					Nunc et velit. Donec auctor, nulla id laoreet volutpat, pede erat feugiat ante,
					auctor facilisis dui augue non turpis. Suspendisse mattis metus et justo.
					Aliquam erat volutpat. Suspendisse potenti. Nam hendrerit lorem commodo metus
					laoreet ullamcorper. Proin vel nunc a felis sollicitudin pretium. Maecenas in
					metus at mi mollis posuere. Quisque ac quam sed massa adipiscing rutrum.
					Vestibulum ipsum. Phasellus porta sapien. Maecenas venenatis tellus vel tellus.</p>

					<p>Aliquam aliquam dolor at justo. Cum sociis natoque penatibus et magnis dis
					parturient montes, nascetur.</p>
				</div>
				</div>
			</div>
		)
	}
}

export default Location;
