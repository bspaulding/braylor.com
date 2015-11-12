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
		textTransform: "capitalize"
	},
	countdown: {
		left: "calc(50% - 300px)",
		position: "absolute",
		top: 0
	},
	footer: {
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
							style={Object.assign({}, styles.stem, styles.stemLeft)}/>
						<h1 style={styles.amp}>&</h1>
						<img src={require("../../images/stem-right.svg")}
							style={Object.assign({}, styles.stem, styles.stemRight)}/>
						<h1>Bradley</h1>
					</div>
				</div>
				<GlobalNav/>
				<div className="row">
					<div className="col-xs-12">
						{this.props.children}
					</div>
				</div>
				<div className="row footer" style={styles.footer}>
					<div className="col-xs-12">
						<h1 style={styles.backToTop}><a className="back-to-top" href="#top">Back To Top</a></h1>
						<img src={require("../../images/rings-t+b.svg")}/>
					</div>
				</div>
			</div>
		);
	}
}

export default App
