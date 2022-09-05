import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HoverCard(props) {
	const [selectedId, setSelectedId] = useState(null);

	return (
		<motion.div
			className="hover-card-wrapper"
			onClick={() => setSelectedId(props.id)}
			layoutId={props.id}>
			<motion.div
				className="hover-card"
				layout
				initial={{ opacity: 0, y: 100 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: "spring",
				}}
				exit={{ opacity: 0, transition: { delay: 0.2 } }}>
				<motion.div
					initial={{ opacity: 0, x: 50 }}
					animate={{
						opacity: 1,
						x: "-1rem",
						transition: { delay: 0.3, duration: 0.5 },
					}}>
					<motion.h2>{props.title}</motion.h2>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, x: "-4rem", y: 200, rotate: "0deg" }}
					animate={{
						opacity: 1,
						y: 0,
						rotate: "-20deg",
						transition: { duration: 0.3 },
					}}>
					<motion.hr />
				</motion.div>
				<motion.div
					className="project-content"
					initial={{ opacity: 0, x: 50 }}
					animate={{
						opacity: 1,
						x: "23rem",
						transition: { delay: 0.3, duration: 0.5 },
					}}>
					<motion.span>{props.content}</motion.span>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 0.75, duration: 0.75 },
					}}
					className="hover-card-tech">
					<motion.p className="project-tech">
						Technologies Used: {props.tech}.
					</motion.p>
					<motion.span>
						<a href={props.codeURL} rel="noreferrer" target="_blank">
							View the Code
						</a>
					</motion.span>{" "}
					<motion.span>
						<a href={props.site} rel="noreferrer" target="_blank">
							See it in action
						</a>
					</motion.span>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
