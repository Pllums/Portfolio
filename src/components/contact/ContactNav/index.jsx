import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CopiedCard from "../TextCopiedCard";

export default function ContactNav(props) {
	const [copied, setCopied] = useState("");

	return (
		<nav className="contact-nav navbar navbar-expand-md bg-transparent navbar-light">
			<motion.span
				className="nav-link"
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				onClick={() => {
					setCopied(props.email);
					navigator.clipboard.writeText(props.email);
				}}>
				<i className="fa fa-envelope" aria-hidden="true"></i>
				<AnimatePresence>
					{copied === props.email && <CopiedCard />}
				</AnimatePresence>
			</motion.span>
			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="nav-link"
				rel="noreferrer"
				target="_blank"
				href="https://github.com/Pllums">
				<i className="fa-brands fa-github"></i>
			</motion.a>
			<motion.span
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="nav-link"
				onClick={() => {
					setCopied(props.discord);
					navigator.clipboard.writeText(props.discord);
				}}>
				<i className="fa-brands fa-discord"></i>
				{copied === props.discord && <CopiedCard />}
			</motion.span>

			<motion.a
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.9 }}
				className="nav-link"
				href={props.linkedIn}
				target="_blank"
				rel="noreferrer">
				<i className="fa-brands fa-linkedin"></i>
			</motion.a>
		</nav>
	);
}
