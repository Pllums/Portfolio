import React, { useState, useRef } from "react";
import Projects3, { projects } from "./Projects";
import { AnimatePresence, motion, useInView } from "framer-motion";

export default function MyWork() {
	const [selectedId, setSelectedId] = useState(null);
	// {projects.map(CreateNewProject)}

	const [isOpen, setIsOpen] = useState(false);
	const myWorkRef = useRef(null);
	// const mwHeroRef = useRef(null);
	const isInView = useInView(myWorkRef, { once: true });
	// const isInView2 = useInView(mwHeroRef, { once: true });

	return (
		<>
			<div ref={myWorkRef} id="my-work" className="spacer purple-layer"></div>
			<section className="my-work-section">
				<div className="mw-content-wrapper">
					{isInView && (
						<motion.div
							isInView={isInView}
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
									Lorem ipsum dolor sit, amet consectetur adipisicing elit.
									Laborum natus quaerat consectetur commodi perferendis aliquid
									deserunt tempora repellendus, eligendi ullam incidunt quas.
								</span>
							</motion.div>
						</motion.div>
					)}
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
