import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

import AboutMeText from "./AboutMeText";

function AboutMe() {
	const aboutMeRef = useRef(null);
	const isInView = useInView(aboutMeRef, { once: true });

	return (
		<>
			<section id="about-me" className="about-me-background">
				<div className="purple-triangle">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none">
						<path
							d="M1200 0L0 0 892.25 114.72 1200 0z"
							className="shape-fill"></path>
					</svg>
				</div>
				<div className="about-me-wrapper row">
					<div ref={aboutMeRef} className="col-md-6 m-auto">
						{isInView && <AboutMeText isInView={isInView} />}
					</div>

					<div className="img-fluid col-md-6 mx-auto order-first">
						<img className="img-fluid" src="./images/Arik.jpg"></img>
					</div>
				</div>
				<div className="blue-wave">
					<svg
						data-name="Layer 1"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 1200 120"
						preserveAspectRatio="none">
						<path
							d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
							className="shape-fill"></path>
					</svg>
				</div>
			</section>
		</>
	);
}

export default AboutMe;
