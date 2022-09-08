import React from "react";
import Nav from "../src/components/Nav";
import Header from "../src/components/Header";
import MyWork from "../src/components/MyWork";
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
