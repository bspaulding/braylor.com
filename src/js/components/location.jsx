import Colors from "../colors.js";
import React from "react";
import Banner from "./banner.jsx";

let imageStyle = {
	boxShadow: "0px 1px 6px #000",
	borderColor: Colors.heartPink,
	borderRadius: "50%",
	borderStyle: "solid",
	borderWidth: 2,
	width: 240
};

let images = [
	"http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn1_1.jpg",
	"http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn2_1.jpg",
	"http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn3_1.jpg",
	"http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn5.jpg"
]

class Location extends React.Component {
	static displayName = "Location";

	render() {
		return (
			<div>
			<div className="col-xs-12">
				<Banner>Location</Banner>
			</div>
			<div className="col-sm-6">
				<img style={imageStyle} src="http://www.herecomestheguide.com/images/area_images/TemeculaCreekInn2_1.jpg"/>
			</div>
			<div className="col-sm-6">
				<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.2971746295693!2d-117.13137148481586!3d33.46761295575872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db802b77b2d255%3A0x2f1ee894d2f0c8fd!2sTemecula+Creek+Inn!5e0!3m2!1sen!2sus!4v1447631753167" width="400" height="300" frameborder="0" style={{border:0}} allowfullscreen></iframe>
			</div>
			</div>
		)
	}
}

export default Location;
