import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const projects = [
	{
		id: 0,
		key: 0,
		title: "Squash-It",
		img: "./images/Squash-it.png",
		content:
			"Squash-It is a mock bug submit and tracking site where users can register as employees and are then able to work assign themselves a bug, list any work they have done to correct the fake bugs and any user can submit a bug without logging in.",
		tech: "EJS, Node.js, HTML, CSS, MongoDB",
		codeURL: "https://github.com/Pllums/Bug-Tracker",
	},
	{
		id: 1,
		key: 1,
		title: "Boudoir X Alyssa",
		img: "./images/BoudoirXAlyssa.png",
		content:
			"This is a site I made for my wife's photography business. The site features a rich landing page, portfolio pages and contact page.",
		tech: "HTML, CSS, JavaScript, Node.js",
		codeURL: "https://github.com/Pllums/Boudoir-X-Alyssa",
	},
	{
		id: 2,
		key: 2,
		title: "WarServeR",
		img: "./images/Warserver.png",
		content:
			"I made this site as a refresh for a client who wanted a retro feel for his Quake 3 Arena page. The original site was faiyl slow, so I built this with React to give it modularity and the snappy feel we all want as.",
		tech: "ReactJs, CSS",
		codeURL: "https://github.com/Pllums/WarServeR-Redesign",
		site: "https://warserver-redesign.vercel.app/",
	},
];

// function Projects(projects) {

// 	return (
// 		<motion.div
// 			layoutId={projects.id}
// 			onClick={() => setSelectedId(projects.id)}
// 			className="project-card">
// 			<div>
// 				<h3 className="project-title">{projects.title}</h3>
// 				<img className="project-img" src={projects.img} />
// 				<p className="project-content">{projects.content}</p>
// 				<hr />
// 				<p className="project-tech">Technologies Used: {projects.tech}.</p>
// 				<span>
// 					<a href={projects.codeURL} rel="noreferrer" target="_blank">
// 						View the Code
// 					</a>
// 				</span>
// 				<span>
// 					<a href={projects.site} rel="noreferrer" target="_blank">
// 						See it in action
// 					</a>
// 				</span>
// 			</div>
// 		</motion.div>
// 	);
// }

// function CreateNewProject(project) {
// 	return (
// 		<Projects
// 			key={project.key}
// 			title={project.title}
// 			img={project.img}
// 			content={project.content}
// 			codeURL={project.codeURL}
// 			tech={project.tech}
// 			site={project.site}
// 		/>
// 	);
// }

function Projects2() {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<>
			{projects.map((project) => (
				<motion.div
					key={project.key}
					layout
					// layoutId={project.id}
					className="project-card">
					<motion.div>
						<motion.h3 className="project-title">{project.title}</motion.h3>
						<motion.img
							className="project-img"
							onClick={() => setSelectedId(project.id)}
							src={project.img}
						/>
						<motion.p className="project-content">{project.content}</motion.p>
						<hr />
						<motion.p className="project-tech">
							Technologies Used: {projects.tech}.
						</motion.p>
						<motion.span>
							<a href={project.codeURL} rel="noreferrer" target="_blank">
								View the Code
							</a>
						</motion.span>
						<motion.span>
							<a href={project.site} rel="noreferrer" target="_blank">
								See it in action
							</a>
						</motion.span>
					</motion.div>
				</motion.div>
			))}
			;
			{selectedId && (
				<AnimatePresence>
					<motion.div
						layoutId={selectedId}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0, transition: { duration: 0.15 } }}
						transition={{ duration: 0.15, delay: 0.15 }}
						className="overlay">
						<motion.h1>Test</motion.h1>
					</motion.div>
				</AnimatePresence>
			)}
		</>
	);
}

function Projects3() {
	const [isHovering, setIsHovering] = useState(false);
	const [selectedId, setSelectedId] = useState("");
	return (
		<>
			{projects.map((project) => (
				<motion.div
					layoutId={project.title}
					onMouseEnter={() => setIsHovering(!isHovering)}
					onMouseLeave={() => setIsHovering(!isHovering)}
					onClick={() => setSelectedId(project.title)}
					style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px #000" }}
					className="test-card">
					<img src={project.img}></img>
					{isHovering && (
						<motion.div className="hover-card">
							<motion.h2
								layout
								initial={{ opacity: 0, y: 100 }}
								animate={{ opacity: 1, y: 0 }}>
								{project.title}
							</motion.h2>
						</motion.div>
					)}
				</motion.div>
			))}
			{/* {projects.map((project) => (
				<AnimatePresence>
					{selectedId && (
						<motion.div
							onClick={() => setSelectedId(null)}
							layoutId={selectedId}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0, transition: { duration: 0.15 } }}
							transition={{ duration: 0.15, delay: 0.15 }}
							className="overlay">
							<motion.h1>{project.title}</motion.h1>
						</motion.div>
					)}
				</AnimatePresence>
			))} */}
		</>
	);
}

// export default CreateNewProject;
export default Projects3;
export { projects };
