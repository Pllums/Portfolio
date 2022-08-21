import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";

import AboutMeText from "./AboutMeText";

function AboutMe() {
	const aboutMeRef = useRef(null);
	const isInView = useInView(aboutMeRef, { once: true });

	return (
		<section className="about-me-wrapper">
			<div className="about-me-background row">
				<div ref={aboutMeRef} className="col-md-4 m-auto">
					{isInView && <AboutMeText isInView={isInView} />}
				</div>

				<div className="img-fluid col-md-4 mx-auto ">
					<img className="img-fluid" src="./images/Arik.jpg"></img>
				</div>

				{/* <div className="about-me-background row">
				<div ref={aboutMeRef} className="about-me-text-wrapper col-md-4 ">
					{isInView && <AboutMeTw isInView={isInView} />}
				</div>
				<div className="about-me-img-wrapper img-fluid col-md-4 ">
					<img className="img-fluid" src="./images/Arik.jpg"></img>
				</div>
				<div className="about-me-text-wrapper col-md-2 ">
					<div className="about-me-text">
						<h2>Some Title</h2>
						<span>
							Hey there, it's nice to meet you. Arik Abdullah is more than just
							a name on this website. I am married to the most amazing woman and
							the father of two magnificent children. For the first nine years
							of my professional career I was a fulltime firefighter and have
							been blessed to make an impact on alot of people. However, now I
							am looking to make an impact for myself and my family by working
							with something I enjoy{" "}
						</span>
					</div>
				</div>
			</div> */}
			</div>
		</section>
	);
}

export default AboutMe;
