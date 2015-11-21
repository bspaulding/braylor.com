import App from "../components/app.jsx";
import { connect } from "react-redux";
import actions from "../actions/photos_actions";
import { bindActionCreators } from "redux";

let ConnectableApp = connect(
	(state) => state,
	(dispatch) => { return { actions: bindActionCreators(actions, dispatch) }; }
)(App);

export default ConnectableApp;
