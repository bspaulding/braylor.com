/* global require */

import assign from "../assign.js";
import Colors from "../colors";
import Countdown from "./countdown.jsx";
import GlobalNav from "./global_nav.jsx";
import React from "react";

let styles = {
	header: {
		fontFamily: "Dancing Script",
		position: "relative",
		textAlign: "center"
	},
	amp: {
		color: Colors.heartPink
	},
	backToTop: {
		fontFamily: "Amatic SC",
		fontSize: 24,
		marginBottom: 30,
		textTransform: "capitalize"
	},
	countdown: {
		left: "calc(50% - 180px)",
		position: "absolute",
		top: 0
	},
	footer: {
		marginBottom: 40,
		textAlign: "center"
	},
	stem: {
		position: "absolute",
		top: "calc(50% - 6px)"
	},
	stemLeft: {
		left: "calc(50% - 69px)",
	},
	stemRight: {
		left: "calc(50% + 20px)",
	},
};

class App extends React.Component {
	static displayName = "App";

	render() {
		return (
			<div>
				<a name="top"></a>
				<Countdown to="May 14, 2016" style={styles.countdown}/>
				<div className="row" style={styles.header}>
					<div className="col-xs-12">
						<h1>Taylor</h1>
						<img src={require("../../images/stem-left.svg")}
							style={assign({}, styles.stem, styles.stemLeft)}/>
						<h1 style={styles.amp}>&</h1>
						<img src={require("../../images/stem-right.svg")}
							style={assign({}, styles.stem, styles.stemRight)}/>
						<h1>Bradley</h1>
					</div>
				</div>
				<GlobalNav/>
				{/* eslint-disable react/prop-types */
				React.Children.map(this.props.children, (child) => React.cloneElement(child, this.props) )
				/* eslint-enable react/prop-types */}
				<div className="row footer">
					<div className="col-xs-12" style={styles.footer}>
						<h1 style={styles.backToTop}><a className="back-to-top" href="#top">Back To Top</a></h1>
						<img src={require("../../images/rings-t+b.svg")}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
