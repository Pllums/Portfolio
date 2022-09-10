import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Site from "./Site";

function App() {
	return (
		<div className="wrapper">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Site />} />
				</Routes>
			</BrowserRouter>
			{/* <Nav />
			<Header />
			<AboutMe />
			<MyWork /> */}
		</div>
	);
}

export default App;
