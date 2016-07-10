import Colors from "../colors.js";
import React from "react";
import welcomePicSrc from "../../images/photos/engagement/thumbs/taylorbradleyengagement_ashleykelemen-14.jpg";
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
		backgroundPosition: "-10px 0px",
		backgroundSize: 320,
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
							Thanks so much to everyone who came out and celebrated
							with us.
						</p>
						<p style={styles.p}>
							We've just updated the <Link to="/photos">photos</Link> with
							some amazing pics from <a href="http://ashleykelemen.com/?utm_source=braylor&utm_medium=web&utm_campaign=braylor-wedding">Ashley Keleman</a>.
						</p>
						<p style={styles.p}>
							<Link to="/photos">Check out the wedding photos!</Link>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Welcome;
