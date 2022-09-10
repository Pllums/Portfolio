import React, { useState, useRef } from "react";
import { projects } from "./Projects";
import ProjectCard from "./project-cards/ProjectCard";
import { AnimatePresence, motion, useInView } from "framer-motion";
import MyWorkHero from "./MyWorkHero";
import ClickedCard from "./project-cards/ClickedCard";
import ContactMe from "./Contact";

export default function MyWork() {
	const [selectedProject, setSelectedProject] = useState({ id: -1 });

	const handleClick = ({ project }) => {
		setSelectedProject((prevState) => {
			return { ...prevState, ...project };
		});
		console.log(selectedProject.title);
	};

	// const handleClick = (id) => {
	// 	setSelectedId(id);
	// 	console.log("changed");
	// };

	const myWorkRef = useRef(null);
	const isInView = useInView(myWorkRef, { once: true });

	return (
		<>
			<div ref={myWorkRef} id="my-work" className="spacer purple-layer"></div>
			<section className="my-work-section">
				<div className="mw-content-wrapper">
					{isInView && <MyWorkHero isInView={isInView} />}
					{/* <div className="mw-contrast-stripe"> */}

					<div className="container-fluid">
						<div className="row">
							{projects.map((project) => (
								<ProjectCard
									key={project.key}
									handleClick={() => {
										handleClick({ project });
									}}
									img={project.img}
									id={project.id}
									title={project.title}
									content={project.content}
									codeURL={project.codeURL}
									site={project.site}
									tech={project.tech}
								/>
							))}
						</div>
						{selectedProject.id != -1 && (
							<ClickedCard selectedProject={selectedProject} />
						)}
					</div>
				</div>
				<ContactMe email="arikabdullah1122@gmail.com" discord="" />
				{/* </div> */}
				{/* </div> */}
			</section>
		</>
	);
}
