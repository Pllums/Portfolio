import React from "react";
import { motion } from "framer-motion";

export default function MyWorkHero() {
	return (
		<motion.div
			className="mw-hero"
			initial={{ opacity: 0, x: -2000 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: "spring", damping: 15, duration: 0.25 }}>
			<h1>Completed Works</h1>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.75, duration: 0.5 }}
				className="mw-hero-text">
				<span>
					I have listed out my finished projects below. Some of them I made for
					myself, whereas others I was asked to build something for someone
					else.{" "}
					<span className="hover-click-text">
						Hover on the project to learn more.
					</span>
				</span>
			</motion.div>
		</motion.div>
	);
}
