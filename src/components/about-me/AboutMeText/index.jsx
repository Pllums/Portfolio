import React, { useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Typewriter from "typewriter-effect";

export default function AboutMeText() {
	const [twIsDone, setTwIsDone] = useState(false);
	const isSet = () => setTwIsDone(true);

	// const [twIsFinished, setTwIsFinished] = useState(false);
	// const isFinished = () => setTwIsFinished(true);

	const [isClicked, setIsClicked] = useState(false);
	const clickSet = () => setIsClicked(!isClicked);

	return (
		<>
			<motion.div
				animate={{ opacity: [0, 1] }}
				transition={{ times: [0, 0.5] }}
				className="about-me-text-wrapper">
				<motion.div className="about-me-text">
					<h2>A little about me...</h2>
					<hr />
					<span className="about-tw-start">
						<Typewriter
							options={{ cursor: "_", delay: 10 }}
							onInit={(typewriter) => {
								typewriter
									.typeString("name: Arik Abdul")
									.start()
									.deleteAll(1)
									// .changeDelay(200)
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
							<motion.div
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, ease: "easeOut" }}>
								<p>
									Hey there, it's nice to meet you. Arik Abdullah is more than
									just a name on this website. I am married to the most amazing
									woman and the father of two magnificent children. For the
									first nine years of my professional career I was a fulltime
									firefighter and have been blessed to make an impact on alot of
									people. However, now I am looking to make an impact for myself
									and my family by working with something I enjoy that allows me
									to be the best version of myself for those I love. In my
									downtime (usually once everyone else is sleeping) you can
									almost always find me in front of my computer trying to learn
									something new, playing a game or reading comic books. On the
									nicer days I love to get out on my motorcycle or bring the
									whole family out on our boat. Oh and I have spent entirely too
									many hours of my life watching the Office! Ok, that last line
									is a lie... You can't watch the Office too much.
								</p>
							</motion.div>

							/* <Typewriter
								twIsDone={twIsDone}
								options={{
									cursor: "_",
									delay: 10,
								}}
								onInit={(typewriter) => {
									typewriter
										.typeString(
											"Hey there, it's nice to meet you. Arik Abdullah is more than just a name on this website. I am married to the most amazing woman and the father of two magnificent children. For the first nine years of my professional career I was a fulltime firefighter and have been blessed to make an impact on alot of people. However, now I am looking to make an impact for myself and my family by working with something I enjoy that allows me to be the best version of myself for those I love. In my downtime (usually once everyone else is sleeping) you can almost always find me in front of my computer trying to learn something new, playing a game or reading comic books. On the nicer days I love to get out on my motorcycle or bring the whole family out on our boat. Oh and I have spent entirely too many hours of my life watching the Office! Ok, that last line is a lie... You can't watch the Office too much."
										)
										.start()
										.callFunction(isFinished);
								}}
							/> */
						)}
					</span>
				</motion.div>
			</motion.div>
			<AnimatePresence>
				{twIsDone && (
					<motion.div
						onClick={clickSet}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
						className="about-me-text-wrapper">
						<div className="about-me-text">
							<h2>My Values</h2>
							<motion.div
								layoutId="values"
								initial={{
									opacity: isClicked ? 0 : 1,
									display: isClicked ? "none" : "inline-block",
								}}
								animate={{
									opacity: isClicked ? 0 : 1,
									display: isClicked ? "none" : "inline-block",
								}}
								exit={{
									opacity: isClicked ? 1 : 0,
									display: isClicked ? "inline-block" : "none",
								}}>
								<ul>
									<li>Integrity</li>
									<li>Transparency</li>
									<li>Authenticity</li>
									<li>Dependability</li>
								</ul>
							</motion.div>
							<div>
								{isClicked && (
									<>
										<motion.div
											layoutId="values"
											initial={{ opacity: 0, scale: 0 }}
											animate={{
												opacity: 1,
												scale: 1,
												transition: { duration: 0.5, type: "spring" },
											}}
											exit={{ opacity: 0, scale: 0 }}
											transition={{ delay: 0.2, duration: 0.5 }}>
											<span style={{ width: "10ch" }}>
												At Diversity Today, we believe it's very easy to be a
												HERO. All you need are:
											</span>
											<motion.ul
												isClicked={isClicked}
												animate={{ opacity: isClicked ? 1 : 0 }}>
												<li>Honesty</li>
												<li>Empathy</li>
												<li>Respect</li>
												<li>Open Mindedness</li>
											</motion.ul>
										</motion.div>
									</>
								)}
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
