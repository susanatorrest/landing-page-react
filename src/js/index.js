//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.css";

//import your own components
import App from "/workspaces/landing-page-react/src/js/app.jsx";

//render your react application
ReactDOM.render(<App />, document.querySelector("#app"));
