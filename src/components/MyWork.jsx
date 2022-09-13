import React, { useState, useRef } from "react";
import { projects } from "./Projects";
import ProjectCard from "./project-cards/ProjectCard";
import { AnimatePresence, motion, useInView } from "framer-motion";
import MyWorkHero from "./my-work/MyWorkHero";
import ClickedCard from "./project-cards/ClickedCard";
import ContactMe from "./Contact";
import MySkills from "./my-work/MyWorkSkills";

export default function MyWork() {
	const [selectedProject, setSelectedProject] = useState({ id: -1 });

	const handleClick = ({ project }) => {
		setSelectedProject((prevState) => {
			return { ...prevState, ...project };
		});
		console.log(selectedProject.title);
	};

	const handleClose = () => {
		setSelectedProject({ id: -1 });
	};

	const myWorkRef = useRef(null);
	const isInView = useInView(myWorkRef, { once: true });

	return (
		<>
			<div ref={myWorkRef} id="my-work" className="spacer purple-layer"></div>
			<section className="my-work-section">
				<div className="mw-content-wrapper row">
					<div className="col-lg-6 m-auto">
						{isInView && <MyWorkHero isInView={isInView} />}
					</div>
					<div className="col-lg-6 m-auto">
						{isInView && <MySkills isInView={isInView} />}
					</div>

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
						<AnimatePresence>
							{selectedProject.id != -1 && (
								<ClickedCard
									selectedProject={selectedProject}
									handleClose={handleClose}
								/>
							)}
						</AnimatePresence>
					</div>
				</div>

				<ContactMe email="arikabdullah1122@gmail.com" discord="" />
				{/* </div> */}
				{/* </div> */}
			</section>
		</>
	);
}
