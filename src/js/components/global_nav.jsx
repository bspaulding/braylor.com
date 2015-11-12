import React from "react";
import { Link } from "react-router";

let styles = {
	ul: {
		alignItems: "center",
		display: "flex",
		flexWrap: "wrap",
		fontFamily: "Amatic SC",
		fontSize: 24,
		justifyContent: "space-around",
		listStyleType: "none",
		margin: "0px auto",
		maxWidth: 512,
		paddingLeft: 0,
		textAlign: "center"
	},
	li: {
		display: "inline-block",
		margin: "0px 16px"
	}
};

class GlobalNav extends React.Component {
	static displayName = "GlobalNav";

	render() {
		return (
			<div className="row col-xs-12" style={{ marginTop: 20 }}>
				<ul style={styles.ul} className="global-nav">
					<li style={styles.li}><Link to="/story" activeClassName="active">Story</Link></li>
					<li style={styles.li}><Link to="/menu" activeClassName="active">Menu</Link></li>
					<li style={styles.li}><Link to="/photos" activeClassName="active">Photos</Link></li>
					<li style={styles.li}><Link to="/location" activeClassName="active">Location</Link></li>
					<li style={styles.li}><Link to="/registry" activeClassName="active">Registry</Link></li>
				</ul>
			</div>
		);
	}
}

export default GlobalNav;

