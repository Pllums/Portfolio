import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HoverCard from "./HoverCard";

export default function ProjectCard(props) {
	const [isHovering, setIsHovering] = useState(false);

	return (
		<motion.div
			key={props.key}
			layoutId={props.title}
			onMouseEnter={() => setIsHovering(!isHovering)}
			onMouseLeave={() => setIsHovering(!isHovering)}
			style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px #000" }}
			className="test-card">
			<img src={props.img}></img>
			<AnimatePresence>
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
			</AnimatePresence>
		</motion.div>
	);
}