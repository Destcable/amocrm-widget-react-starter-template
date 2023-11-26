import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./App.css";

const Widget = {
	render(self) {
		self.render_template({
			render: '<div id="1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"></div>',
		});

		ReactDOM.createRoot(
			document.getElementById("1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"),
		).render(
			<React.StrictMode>
				<App widget={self}/>
			</React.StrictMode>,
		);

		return true;
	},
	init() {
		return true;
	},
	bind_actions() {
		return true;
	},
	settings() {
		return true;
	},
	onSave() {
		return true;
	},
	destroy() {
		return true;
	},
	contacts_selected() {
	},
	leads_selected() {
	},
	tasks_selected() {
	},
};

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<App widget={{}}/>
	</React.StrictMode>,
);

export default Widget;
