import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HoverCard from "../HoverCard";

export default function ProjectCard(props) {
	const [isHovering, setIsHovering] = useState(false);

	return (
		<div className="col-lg-4 col-md-6">
			<motion.div
				key={props.id}
				layoutId={props.title}
				onClick={props.handleClick}
				onMouseEnter={() => setIsHovering(!isHovering)}
				onMouseLeave={() => setIsHovering(!isHovering)}
				style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px #000" }}
				className="test-card">
				<img src={props.img}></img>
				{/* <AnimatePresence>
					{isHovering && (
						<HoverCard
							id={props.id}
							title={props.title}
							content={props.content}
							tech={props.tech}
							codeURL={props.codeURL}
							site={props.site}
						/>
					)}
				</AnimatePresence> */}
			</motion.div>
		</div>
	);
}
