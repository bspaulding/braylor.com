import Colors from "../colors.js";
import React from "react";
import welcomePicSrc from "../../images/photos/proposal/thumbs/la-jolla-shores-spaulding-proposal27.jpg";
import { Link } from "react-router";

let styles = {
	fancyLetter: {
		fontFamily: "Dancing Script",
		fontSize: 38,
		lineHeight: "42px",
		opacity: 0.5,
		position: "absolute",
		top: -15,
		left: -15,
		zIndex: -1
	},
	p: {
		fontFamily: "Open Sans, sans serif",
		padding: "0px 10px",
		position: "relative",
		textShadow: "0px -1px 0px black"
	},
	image: {
		backgroundImage: `url(${welcomePicSrc})`,
		backgroundPosition: "-40px 0px",
		backgroundSize: 420,
		boxShadow: "0px 1px 6px #000",
		borderColor: Colors.heartPink,
		borderRadius: "50%",
		borderStyle: "solid",
		borderWidth: 2,
		height: 280,
		maxWidth: 280,
		width: "100%"
	}
};

class Welcome extends React.Component {
	static displayName = "Welcome";

	render() {
		return (
			<div className="row welcome">
				<div className="col-xs-12">
					<div className="center-block" style={{ maxWidth: 640 }}>
						<div className="image" style={styles.image}/>
						<p style={styles.p}>
							<span style={styles.fancyLetter}>W</span>
							Welcome! We are so excited that you've made it here!
							We hope you'll find everything you need to know about our special day,
							and get super excited to celebrate with us!
						</p>
						<p style={styles.p}>
							Over on the <Link to="/location">location</Link> page, you'll find some helpful
							travel tips, as well as more information about accomodations.
						</p>
						<p style={styles.p}>
							Most importantly, please be sure to <Link to="/stay_updated">sign up for the mailing list</Link>.
							That way, you'll be in the know about the latest and greatest Braylor Wedding info!
							(hint: engagement photos are coming soon!)
						</p>
						<div style={{ textAlign: "center" }}>
							<Link className="btn btn-primary" to="/stay_updated">
								Join the Mailing List
							</Link>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Welcome;
