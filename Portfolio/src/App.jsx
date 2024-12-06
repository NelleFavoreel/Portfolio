import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import WorkDetail from "./pages/WorkDetail.jsx";
import "./App.css";
import "./style/mobile.css";

function App() {
	return (
		<>
			<BrowserRouter basename="/Portfolio/">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/Portfolio/work/:id" element={<WorkDetail />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
