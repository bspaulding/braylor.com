import React from "react";
import ReactDOM from "react-dom";

let ModalPortal = React.createClass({
	displayName: "ModalPortal",
	componentDidMount: function() {
		this._target = document.body.appendChild(document.createElement('div'));
		/* eslint-disable react/prop-types */
		this._component = ReactDOM.render(this.props.children, this._target);
		/* eslint-enable react/prop-types */
	},
	componentWillUnmount: function() {
		ReactDOM.unmountComponentAtNode(this._target);
		document.body.removeChild(this._target);
	},
	componentDidUpdate: function() {
		/* eslint-disable react/prop-types */
		this._component = ReactDOM.render(this.props.children, this._target);
		/* eslint-enable react/prop-types */
	},
	render: function() {
		return null;
	}
});

export default ModalPortal;
