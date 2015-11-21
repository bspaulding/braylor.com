import Colors from "../colors";
import React from "react";

let styles = {
	outer: {
		display: "block",
		backgroundColor: Colors.heartPink,
		margin: "20px auto",
		maxWidth: 240,
		position: "relative",
		textTransform: "uppercase"
	},
	center: {
		borderLeft: "1px solid " + Colors.heartPinkShadow,
		borderRight: "1px solid " + Colors.heartPinkShadow,
		fontSize: 20,
		lineHeight: "28px",
		minWidth: 180,
		paddingLeft: 20,
		paddingRight: 20,
		textAlign: "center",
		textShadow: "0px 2px 0px " + Colors.heartPinkShadow
	},
	left: {
		backgroundColor: "transparent",
		height: 28,
		position: "absolute",
		left: -18,
		top: 4,
		width: 28,
		zIndex: -2
	},
	right: {
		backgroundColor: "transparent",
		height: 28,
		position: "absolute",
		right: -18,
		top: 4,
		width: 28,
		zIndex: -2
	},
	shadowLeft: {
		borderLeft: "10px solid transparent",
		borderRight: "0px solid transparent",
		borderTop: "4px solid " + Colors.heartPinkShadow,
		bottom: -4,
		height: 0,
		left: 0,
		position: "absolute",
		width: 0,
		zIndex: -1
	},
	shadowRight: {
		borderLeft: "0px solid transparent",
		borderRight: "10px solid transparent",
		borderTop: "4px solid " + Colors.heartPinkShadow,
		bottom: -4,
		height: 0,
		right: 0,
		position: "absolute",
		width: 0,
		zIndex: -1
	},
	arrowUp: {
		borderLeft: "14px solid transparent",
		borderRight: "14px solid transparent",
		borderBottom: "14px solid " + Colors.heartPink,
		bottom: 0,
		height: 0,
		right: 0,
		position: "absolute",
		width: 0,
		zIndex: -1
	},
	arrowDown: {
		borderLeft: "14px solid transparent",
		borderRight: "14px solid transparent",
		borderTop: "14px solid " + Colors.heartPink,
		height: 0,
		right: 0,
		position: "absolute",
		top: 0,
		width: 0,
		zIndex: -1
	},
	arrowRight: {
		borderTop: "14px solid transparent",
		borderBottom: "14px solid transparent",
		borderLeft: "14px solid " + Colors.heartPink,
		height: 0,
		left: 1,
		position: "absolute",
		top: 0,
		width: 0,
		zIndex: -1
	},
	arrowLeft: {
		borderTop: "14px solid transparent",
		borderBottom: "14px solid transparent",
		borderRight: "14px solid " + Colors.heartPink,
		height: 0,
		right: 1,
		position: "absolute",
		top: 0,
		width: 0,
		zIndex: -1
	}
};

class Banner extends React.Component {
	static displayName =  "Banner";

	render() {
		return (
			<div className="banner" style={styles.outer}>
				<div style={styles.left}>
					<div style={styles.arrowUp}/>
					<div style={styles.arrowDown}/>
					<div style={styles.arrowLeft}/>
				</div>
				<div style={styles.right}>
					<div style={styles.arrowUp}/>
					<div style={styles.arrowDown}/>
					<div style={styles.arrowRight}/>
				</div>
				<div style={styles.center}>
					<div style={styles.shadowLeft}/>
					<div style={styles.shadowRight}/>
					{/* eslint-disable react/prop-types */
					this.props.children
					/* eslint-enable react/prop-types */}
				</div>
			</div>
		);
	}
}

export default Banner;
