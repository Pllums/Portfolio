import { motion } from "framer-motion";

export default function ContactMe(props) {
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
							<motion.a>{props.email}</motion.a>
						</li>
						<li>
							<motion.a>{props.discord}</motion.a>
						</li>
						<li>
							<motion.a>{props.linkedIn}</motion.a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
