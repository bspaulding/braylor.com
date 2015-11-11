import App from "./components/app.js";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(React.createFactory(App)(window.APP_PROPS), document.querySelector("#react-container"));
