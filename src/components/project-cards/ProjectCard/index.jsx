import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard(props) {
	return (
		<div className="col-lg-4 col-md-6 ">
			<motion.div
				key={props.id}
				onClick={props.handleClick}
				className="project-card">
				<img src={props.img}></img>
			</motion.div>
		</div>
	);
}
