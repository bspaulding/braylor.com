import Colors from "../colors.js";
import ModalPortal from "./modal_portal.jsx";
import React from "react";

class Lightbox extends React.Component {
	static displayName = "Lightbox";
	static propTypes = {
		onClose: React.PropTypes.func.isRequired
	};

	render() {
		return (
			<ModalPortal>
				<div className="lightbox-container">
					<div className="lightbox-overlay"/>
					<div className="lightbox-content">
						<button className="btn btn-link lightbox-close"
							onClick={this.props.onClose}>
							x
						</button>
						{this.props.children}
					</div>
				</div>
			</ModalPortal>
		);
	}
}

export default Lightbox;
