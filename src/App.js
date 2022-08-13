import React from "react";
import Nav from "../src/components/Nav";
import Header from "../src/components/Header";
import MyWork from "../src/components/MyWork";
import CreateNewProject, { projects } from "../src/components/Projects";
function App() {
	return (
		<div className="wrapper">
			<Nav />
			<Header />
			<MyWork />
			<section id="my-work" className="my-work">
				<div className="row">{projects.map(CreateNewProject)}</div>
			</section>
		</div>
	);
}

export default App;
