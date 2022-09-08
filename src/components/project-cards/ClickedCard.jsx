import { motion } from "framer-motion";

import { projects } from "../Projects";

// export default function ClickedCard(props) {
// 	return (
// 		<motion.div
// 			className="clicked-card"
// 			layoutId={props.layoutId}
// 			initial={{ position: "relative", opacity: 0 }}
// 			animate={{
// 				position: "absolute",
// 				x: 0,
// 				y: 0,
// 				opacity: 1,
// 				scale: 3,
// 				transition: { duration: 0.5 },
// 			}}
// 			exit={{
// 				opacity: 0,
// 				scale: 0,
// 				transition: {
// 					delay: 0.3,
// 					duration: 0.5,
// 				},
// 			}}>
// 			<motion.h2>Test</motion.h2>
// 			<hr />
// 			<motion.span>
// 				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
// 				natus, nisi tenetur fuga iusto facilis ullam quam doloribus. Pariatur
// 				enim accusamus hic harum nihil?
// 			</motion.span>
// 		</motion.div>
// 	);
// }

export default function ClickedCard(props) {
	return (
		<motion.div
			className="clicked-card overlay"
			layoutId={props.layoutId}
			initial={{ opacity: 0 }}
			animate={{
				position: "absolute",
				x: 0,
				y: 0,
				opacity: 1,
				scale: 1,
				transition: { duration: 0.5 },
			}}
			exit={{
				opacity: 0,
				scale: 0,
				transition: {
					delay: 0.3,
					duration: 0.5,
				},
			}}>
			<motion.h2>test</motion.h2>
			<hr />
			<motion.span>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt aut
				natus, nisi tenetur fuga iusto facilis ullam quam doloribus. Pariatur
				enim accusamus hic harum nihil?
			</motion.span>
		</motion.div>
	);
}
