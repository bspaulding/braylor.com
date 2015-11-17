import React from "react";
import Banner from "./banner.jsx";

class Menu extends React.Component {
	static displayName = "Menu";

	render() {
		return (
			<div className="row menu">
				<div className="col-xs-12">
					<Banner>Starters</Banner>
					<dl>
						<dt>fire roasted tomato and fennel bisque</dt>
						<dd>arugula pesto</dd>
						<dt>poached pear salad</dt>
						<dd>spoon leaf spinach, candied walnuts, gorgonzola cheese & seasonal tomatoes</dd>
					</dl>

					<Banner>Entrees</Banner>
					<dl>
						<dt>four cheese ravioli</dt>
						<dd>arugula pesto fillet of roasted tomato &amp; shaved squash</dd>
						<dt>pan seared breast of chicken</dt>
						<dd>peppercorn, port &amp; medeira sauce</dd>
						<dt>TODO</dt>
						<dd>Get the ribs title and description</dd>
					</dl>

					<Banner>Sides</Banner>
					<p>TODO: do these need to be paired with dishes? how many do we get? what did we select?</p>
				</div>
			</div>
		)
	}
}

export default Menu;
