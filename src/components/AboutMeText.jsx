import React, { useState } from "react";
import { motion, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";
import { GetAge } from "./Date";
import { hover } from "@testing-library/user-event/dist/hover";

export default function AboutMeText() {
	const [twIsDone, setTwIsDone] = useState(false);
	const isSet = () => setTwIsDone(true);

	const [twIsFinished, setTwIsFinished] = useState(false);
	const isFinished = () => setTwIsFinished(true);

	const [isHovering, setIsHovering] = useState(false);
	const hoverSet = () => setIsHovering(true);

	return (
		<>
			<motion.div
				whileHover={{}}
				animate={{ opacity: [0, 1] }}
				transition={{ times: [0, 0.5] }}
				className="about-me-text-wrapper">
				<motion.div className="about-me-text">
					<h2>A little about me...</h2>
					<hr />
					<span className="about-tw-start">
						<Typewriter
							options={{ cursor: "_" }}
							onInit={(typewriter) => {
								typewriter
									.typeString("name: Arik Abdul")
									.start()
									.deleteAll(1)
									.changeDelay(40)
									.typeString(
										"<strong>BREACH DETECTED, INITIATE WIPE...</strong>"
									)
									.pauseFor(2000)
									.deleteAll(1)
									.typeString(
										"<strong>WIPE FAILED:</strong> Info being retrieved..."
									)
									.pauseFor(1000)
									.callFunction(isSet);
							}}
						/>
					</span>
					<span className="about-tw-end">
						{twIsDone && (
							<Typewriter
								twIsDone={twIsDone}
								options={{
									cursor: "_",
									delay: 20,
								}}
								onInit={(typewriter) => {
									typewriter
										.typeString(
											"Hey there, it's nice to meet you. Arik Abdullah is more than just a name on this website. I am married to the most amazing woman and the father of two magnificent children. For the first nine years of my professional career I was a fulltime firefighter and have been blessed to make an impact on alot of people. However, now I am looking to make an impact for myself and my family by working with something I enjoy that allows me to be the best version of myself for those I love. In my downtime (usually once everyone else is sleeping) you can almost always find me in front of my computer trying to learn something new, playing a game or reading comic books. On the nicer days I love to get out on my motorcycle or bring the whole family out on our boat. Oh and I have spent entirely too many hours of my life watching the Office! Ok, that last line is a lie... You can't watch the Office too much."
										)
										.start()
										.callFunction(isFinished);
								}}
							/>
						)}
					</span>
				</motion.div>
			</motion.div>
			<motion.div
				whileHover={hoverSet}
				mous
				animate={{ opacity: twIsFinished ? 1 : 0 }}
				className="about-me-text-wrapper">
				<div className="about-me-text">
					<h2>My Values</h2>
					<ul>
						<li>Integrity</li>
						<li>Transparency</li>
						<li>Authenticity</li>
						<li>Dependability</li>
					</ul>
					{isHovering && (
						<motion.ul
							isHovering={isHovering}
							animate={{ opacity: isHovering ? 1 : 0 }}>
							<li>Honesty</li>
							<li>Empathy</li>
							<li>Respect</li>
							<li>Open Mindedness</li>
						</motion.ul>
					)}
				</div>
			</motion.div>
		</>
	);
}
