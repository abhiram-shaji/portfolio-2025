import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ReactGA from "react-ga4";

import Homepage from "./pages/homepage";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import Notfound from "./pages/404";

import { TRACKING_ID } from "./data/tracking";
import "./app.css";

// Utility hook for initializing Google Analytics
const useGoogleAnalytics = (trackingId) => {
	useEffect(() => {
		if (trackingId) {
			ReactGA.initialize(trackingId);
		}
	}, [trackingId]);
};

function App() {
	// Initialize Google Analytics
	useGoogleAnalytics(TRACKING_ID);

	// Route configuration
	const RouteConfig = [
		{ path: "/", element: <Homepage /> },
		{ path: "/projects", element: <Projects /> },
		{ path: "/contact", element: <Contact /> },
		{ path: "*", element: <Notfound /> },
	];

	return (
		<div className="App">
			<Routes>
				{RouteConfig.map(({ path, element }, index) => (
					<Route key={index} path={path} element={element} />
				))}
			</Routes>
		</div>
	);
}

export default App;
