import { useState } from "react";
import { motion } from "framer-motion";
import CopiedCard from "./contact/TextCopiedCard";
import ContactNav from "./contact/ContactNav";

export default function ContactMe(props) {
	const [copied, setCopied] = useState("");

	const handleClick = () => {};

	return (
		<div id="contact">
			<section className="cta-wrapper">
				<div className="cta-title">
					<motion.h1>
						Let's get in <br />
						<span className="cta-title-touch">
							tou<span>c</span>h
						</span>
					</motion.h1>
				</div>
				<div className="cta-content">
					<span className="cta-vert-type">lick</span>
					<span className="cta-horz-type">
						my links to contact me and let's bring your ideas to life
					</span>
				</div>
				<ContactNav
					email="arikabdullah1122@gmail.com"
					discord="Plum#3107"
					linkedIn="https://www.linkedin.com/in/arik-abdullah-425552240/"
				/>
			</section>
		</div>
	);
}
