import { motion } from "framer-motion";

export default function CopiedCard(props) {
	return (
		<motion.div
			className="copied-card"
			animate={{
				position: "absolute",
				opacity: [0, 1, 1, 1, 0],
				x: ["-4rem", "-4rem"],
				y: [-50, 0, 0, 0, 0],
				scaleY: [0.01, 1, 1, 1, 1],
				scaleX: [0.01, 0.01, 1, 1, 1],
			}}
			exit={{ display: "none" }}
			transition={{
				ease: "easeIn",
				times: [0, 0.2, 0.5, 0.7, 1],
				duration: 2,
			}}>
			<p>Copied to clipboard!</p>
		</motion.div>
	);
}
