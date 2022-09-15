import { motion } from "framer-motion";

export default function ClickedCard(props) {
	return (
		<motion.div
			className="backdrop"
			onClick={props.handleClose}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}>
			<motion.div
				className="clicked-card"
				onClick={(e) => {
					e.stopPropagation();
				}}
				initial={{ opacity: 0 }}
				animate={{
					position: "absolute",
					x: 0,
					y: -200,
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
				<motion.div className="card-header">
					<img src={props.selectedProject.img}></img>
				</motion.div>
				<motion.h2>{props.selectedProject.title}</motion.h2>
				<motion.span
					className="card-closer"
					onClick={props.handleClose}
					whileHover={{ scale: 1.3, cursor: "pointer" }}
					whileTap={{ scale: 0.9 }}>
					<i className="fa-solid fa-xmark close-button"></i>
				</motion.span>
				<motion.div className="card-info">
					<hr />
					<motion.span>{props.selectedProject.content}</motion.span>
					<div className="project-tech row">
						<div className="col-lg-4 column">
							<motion.span
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								<motion.a
									href={props.selectedProject.codeURL}
									rel="noreferrer"
									target="_blank">
									View the code
								</motion.a>
							</motion.span>
						</div>
						<div className="col-lg-4 column">
							<motion.span>
								Technologies Used : {props.selectedProject.tech}
							</motion.span>
						</div>
						<div className="col-lg-4 column">
							<motion.span
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}>
								<motion.a
									href={props.selectedProject.site}
									rel="noreferrer"
									target="_blank">
									See it in action
								</motion.a>
							</motion.span>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</motion.div>
	);
}
