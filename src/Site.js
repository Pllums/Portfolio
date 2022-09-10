import React from "react";
import Nav from "./components/header-nav/Nav";
import Header from "./components/header-nav/Header";
import MyWork from "./components/MyWork";
import AboutMe from "./components/AboutMe";

export default function Site() {
	return (
		<>
			<Nav />
			<Header />
			<AboutMe />
			<MyWork />
		</>
	);
}
