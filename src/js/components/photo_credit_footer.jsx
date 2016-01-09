import React from "react";

const verticalPadding = 10;

const outerStyle = {
	backgroundColor: "rgba(33, 33, 33, 0.3)",
	bottom: 0,
	color: "white",
	left: 0,
	paddingTop: verticalPadding,
	paddingBottom: verticalPadding,
	position: "absolute",
	textAlign: "center",
	width: "100%"
};

class PhotoCreditFooter extends React.Component {
	static displayName = "PhotoCreditFooter";
	static defaultProps = {
		credit: "",
		creditLink: ""
	}
	static propTypes = {
		credit: React.PropTypes.string,
		creditLink: React.PropTypes.string
	};

	render() {
		if (!this.props.credit) {
			return null;
		}

		return (
			<div style={outerStyle}>
				{this.props.creditLink ?
					<a href={this.props.creditLink}>{this.props.credit}</a>
				: this.props.credit}
			</div>
		);
	}
}

export default PhotoCreditFooter;
