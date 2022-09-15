import { motion } from "framer-motion";
import ContactNav from "./contact/ContactNav";

export default function ContactMe(props) {
	return (
		<div id="contact">
			<section className="cta-wrapper">
				<div className="lg-cta">
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
							my links and let's bring your ideas to life
						</span>
					</div>
					<ContactNav
						email="arikabdullah1122@gmail.com"
						discord="Plum#3107"
						linkedIn="https://www.linkedin.com/in/arik-abdullah-425552240/"
					/>
				</div>
				<div className="sm-cta">
					<div className="row">
						<div className="col-lg-6">
							<div className="cta-title">
								<motion.h1>
									Let's get in <br />
									<span className="cta-title-touch">
										tou<span>c</span>h
									</span>
								</motion.h1>
								<div className="sm-cta-content">
									<span className="cta-horz-type">
										Click my links and let's bring your ideas to life
									</span>
								</div>
							</div>
						</div>
						<div className="lg-col-6">
							<ContactNav
								email="arikabdullah1122@gmail.com"
								discord="Plum#3107"
								linkedIn="https://www.linkedin.com/in/arik-abdullah-425552240/"
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
