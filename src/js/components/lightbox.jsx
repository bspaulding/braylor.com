import Colors from "../colors.js";
import { Link } from "react-router";
import ModalPortal from "./modal_portal.jsx";
import React from "react";

class Lightbox extends React.Component {
	static displayName = "Lightbox";
	static propTypes = {
		closePath: React.PropTypes.string.isRequired
	};

	render() {
		return (
			<div className="lightbox-container">
				<div className="lightbox-overlay"/>
				<div className="lightbox-content">
					<Link className="btn btn-link lightbox-close"
						to={this.props.closePath}>
						x
					</Link>
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default Lightbox;
