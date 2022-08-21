import React from "react";
import GetDate from "./Date";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";

function Header() {
	return (
		<header>
			<img className="background" src="./images/HeaderBackground.png"></img>
			<div className="title">
				<GetDate />
				<h1>Hi, I'm Arik</h1>
				<hr></hr>
				<Typewriter
					options={{ cursor: "_", loop: true }}
					onInit={(typewriter) => {
						typewriter
							.typeString("Front-end Web Developer")
							.pauseFor(1500)
							.deleteAll()
							.typeString("Husband and father")
							.pauseFor(2000)
							.deleteAll()
							.typeString("")
							.start();
					}}
				/>
			</div>
			<motion.span
				className="header-arrow"
				animate={{
					y: [0, 25, 0, -25],
				}}
				transition={{
					duration: 1.5,
					ease: "easeInOut",
					times: [0, 0.5, 1, 1.5],
					repeat: Infinity,
					repeatDelay: 0,
				}}>
				<i className="fa-solid fa-arrow-down-long"></i>
			</motion.span>
		</header>
	);
}

export default Header;
