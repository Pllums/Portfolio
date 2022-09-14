import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactMe(props) {
	const [copied, setCopied] = useState("");

	const handleClick = () => {};

	return (
		<div id="contact">
			<section className="cta-wrapper">
				<div className="cta-title">
					<motion.h1>
						Let's get in <br />
						<span>touch</span>
					</motion.h1>
				</div>
				<span className="cta-content">
					Contact me below and let's bring your ideas to life
				</span>
				<div>
					<ul className="cta-list">
						<li>
							<span
								onClick={() => {
									setCopied(props.email);
									navigator.clipboard.writeText(copied);
								}}>
								{props.email}
							</span>
						</li>
						<li>
							<span
								onClick={() => {
									setCopied(props.discord);
									navigator.clipboard.writeText(copied);
								}}>
								<i className="fa-brands fa-discord"></i>
							</span>
						</li>
						<li>
							<motion.a href={props.linkedIn} target="_blank" rel="noreferrer">
								<i className="fa-brands fa-linkedin"></i>
							</motion.a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
