import React from "react";
import { motion } from "framer-motion";

function Nav() {
	return (
		<nav>
			<navbar className="navbar navbar-expand-md bg-transparent navbar-light">
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
					<i class="fa-brands fa-github"></i>
				</motion.a>
				<motion.a
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					className="nav-link "
					href="#about-me">
					About Me
				</motion.a>
			</navbar>
		</nav>
	);
}

export default Nav;
