import React from "react";
import { IndexLink, Link } from "../ReactRouter";

let styles = {
	ul: {
		fontFamily: "Amatic SC",
		fontSize: 24,
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
			<div className="row" style={{ marginTop: 20 }}>
				<div className="col-xs-12" style={{ marginTop: 20 }}>
					<ul style={styles.ul} className="global-nav">
						<li style={styles.li}><IndexLink to="/" activeClassName="active">Story</IndexLink></li>
						<li style={styles.li}><Link to="/menu" activeClassName="active">Menu</Link></li>
						<li style={styles.li}><Link to="/photos" activeClassName="active">Photos</Link></li>
						<li style={styles.li}><Link to="/location" activeClassName="active">Location</Link></li>
						<li style={styles.li}><Link to="/registry" activeClassName="active">Registry</Link></li>
					</ul>
				</div>
			</div>
		);
	}
}

export default GlobalNav;

