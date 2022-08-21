import React from "react";
import { motion } from "framer-motion";

function Nav() {
	return (
		<section>
			<nav className="navbar navbar-expand-md bg-transparent navbar-light">
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="nav-link "
					href="#my-work">
					My Work
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="nav-link"
					rel="noreferrer"
					target="_blank"
					href="https://github.com/Pllums">
					<i className="fa-brands fa-github"></i>
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="nav-link "
					href="#about-me">
					About Me
				</motion.a>
			</nav>
		</section>
	);
}

export default Nav;
