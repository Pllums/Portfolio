import React, { useState, useRef } from "react";
import { projects } from "./Projects";
import ProjectCard from "./project-cards/ProjectCard";
import { AnimatePresence, motion, useInView } from "framer-motion";
import MyWorkHero from "./MyWorkHero";

export default function MyWork() {
	const [selectedId, setSelectedId] = useState(null);

	const myWorkRef = useRef(null);
	const isInView = useInView(myWorkRef, { once: true });

	return (
		<>
			<div ref={myWorkRef} id="my-work" className="spacer purple-layer"></div>
			<section className="my-work-section">
				<div className="mw-content-wrapper">
					{isInView && <MyWorkHero isInView={isInView} />}
					<div className="mw-contrast-stripe ">
						<div className="project-grid">
							{projects.map((project) => (
								<ProjectCard
									key={project.key}
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
					</div>
				</div>
			</section>
		</>
	);
}
