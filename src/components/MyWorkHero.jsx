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
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum
					natus quaerat consectetur commodi perferendis aliquid deserunt tempora
					repellendus, eligendi ullam incidunt quas.
				</span>
			</motion.div>
		</motion.div>
	);
}
