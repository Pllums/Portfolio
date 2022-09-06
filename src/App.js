import React from "react";
import Nav from "../src/components/Nav";
import Header from "../src/components/Header";
import MyWork from "../src/components/MyWork";
import AboutMe from "./components/AboutMe";

function App() {
	return (
		<div className="wrapper">
			<Nav />
			<Header />
			<AboutMe />
			<MyWork />
		</div>
	);
}

export default App;
