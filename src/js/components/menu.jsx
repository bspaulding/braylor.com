import Banner from "./banner.jsx";
import Colors from "../colors.js";
import React from "react";
import tablePicSrc from "../../images/tci-table.jpg";

let imageStyle = {
	boxShadow: "0px 1px 6px #000",
	borderColor: Colors.heartPink,
	borderRadius: "50%",
	borderStyle: "solid",
	borderWidth: 2,
	maxWidth: 280,
	width: "100%"
};

class Menu extends React.Component {
	static displayName = "Menu";

	render() {
		return (
			<div className="row menu">
				<div className="col-sm-6 wide-left">
					<img style={imageStyle} src={tablePicSrc}/><br/>
				</div>
				<div className="col-sm-6 wide-right">
					<div className="center-block" style={{ maxWidth: 240, width: "100%" }}>
						<Banner>Starters</Banner>
						<dl>
							<dt>fire roasted tomato and fennel bisque</dt>
							<dd>arugula pesto</dd>
							<dt>poached pear salad</dt>
							<dd>spoon leaf spinach, candied walnuts, gorgonzola cheese & seasonal tomatoes</dd>
						</dl>

						<Banner>Entrees</Banner>
						<dl>
							<dt>
								four cheese ravioli
								<span className="label label-primary pull-right">
									Vegetarian
								</span>
							</dt>
							<dd>arugula pesto fillet of roasted tomato &amp; shaved squash</dd>
							<dt>pan seared breast of chicken</dt>
							<dd>peppercorn, port &amp; medeira sauce</dd>
							<dt>herb salted prime rib</dt>
							<dd>cooked medium, au jus, creamy horseradish</dd>
						</dl>
					</div>
				</div>
			</div>
		);
	}
}

export default Menu;
