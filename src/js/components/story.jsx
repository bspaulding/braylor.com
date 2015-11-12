import Banner from "./banner.jsx";
import React from "react";

let styles = {
	fancyLetter: {
		fontFamily: "Dancing Script",
		fontSize: 38,
		lineHeight: "42px",
		opacity: 0.5,
		position: "absolute",
		top: -10,
		left: 0,
		zIndex: -1
	},
	p: {
		fontFamily: "Open Sans, sans serif",
		fontSize: 16,
		lineHeight: "24px",
		margin: "0px auto 10px",
		maxWidth: 380,
		padding: "0px 10px",
		position: "relative",
		textShadow: "0px -1px 0px black"
	}
};

class Story extends React.Component {
	static displayName = "Story";

	render() {
		return (
			<div className="row">
				<div className="col-xs-12">
					<Banner>Story</Banner>
					<p style={styles.p}>
						<span style={styles.fancyLetter}>D</span>
						Dui nisl sodales felis, ut
						fermentum sapien nibh eu nunc.  Lorem ipsum dolor sit amet. Integer
						sed magna. Duis nisl nulla, porta ut, molestie sit amet, tincidunt
						eu, enim. Cras eu mauris. Cras iaculis, nisi vel tempor fringilla,
						nisl dolor imperdiet dolor, id lobortis ligula nunc sed dolor.  Class
						aptent taciti sociosqu ad litora torquent per conubia nostra, per
						inceptos himenaeos. Curabitur eu dui vitae nulla tempor consectetuer.
						Suspendisse ligula dolor, varius nec, vulputate id, luctus sed,
						lacus. Pellentesque purus urna, porta molestie, mattis non, posuere
						et, velit. Curabitur diam mauris, dictum vel, lacinia congue,
						molestie at, nisi. Proin tempus diam ut ligula.
					</p>
				</div>
			</div>
		);
	}
}

export default Story;
