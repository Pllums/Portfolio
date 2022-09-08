import React from "react";
import Nav from "../src/components/Nav";
import Header from "../src/components/Header";
import MyWork from "../src/components/MyWork";
import AboutMe from "./components/AboutMe";
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
