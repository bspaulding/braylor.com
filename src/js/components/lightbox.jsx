import { Link } from "react-router";
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
					{/* eslint-disable react/prop-types */
					this.props.children
					/* eslint-enable react/prop-types */}
				</div>
			</div>
		);
	}
}

export default Lightbox;
