import React, { useState } from "react";
import Projects3, { projects } from "./Projects";
import { AnimatePresence, motion } from "framer-motion";

export default function MyWork() {
	const [selectedId, setSelectedId] = useState(null);
	// {projects.map(CreateNewProject)}

	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<div className="spacer purple-layer"></div>
			<section id="my-work" className="my-work-section">
				<div className="mw-content-wrapper">
					<div className="mw-hero">
						<h1>Completed Works</h1>
						<div className="mw-hero-text">
							<span>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Laborum natus quaerat consectetur commodi perferendis aliquid
								deserunt tempora repellendus, eligendi ullam incidunt quas.
							</span>
						</div>
					</div>
					<div className="mw-contrast-stripe ">
						<div className="project-grid">
							<Projects3 />
							<div className="test">
								<motion.div
									className="test-card"
									layout
									transition={{ layout: { duration: 0.5, type: "spring" } }}
									style={{
										borderRadius: "1rem",
										boxShadow: "0px 10px 30px #000",
									}}
									onClick={() => setIsOpen(!isOpen)}>
									<motion.h2 layout="position">Test Card 🚀</motion.h2>
									{isOpen && (
										<motion.div
											layout
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											transition={{ duration: 0.5 }}
											className="test-card-content">
											<motion.p layout>
												Lorem20 ljkhasdoliudw lkjhadowihdaoishd oiqhwdoih oihdld
												hashduiwdh lqpiouqwepui h hqwjehhasdiouhuq
												hohdoihdalkjhwdih o
											</motion.p>
										</motion.div>
									)}
								</motion.div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
