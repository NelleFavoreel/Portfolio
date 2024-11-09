import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WorkDetail from "./pages/WorkDetail.jsx";
import "./App.css";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/work/:id" element={<WorkDetail />} />
			</Routes>
		</Router>
	);
}

export default App;
