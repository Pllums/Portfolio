import { motion } from "framer-motion";
import Skill, { frameworks, skills } from "./skills";

export default function MySkills() {
	return (
		<motion.div
			className="skills-hero"
			initial={{ opacity: 0, x: 2000 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ type: "spring", damping: 15, delay: 0.5, duration: 0.25 }}>
			<h1>My Skills</h1>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.5, delay: 1 }}>
				<div className="row">
					{skills.map((skill) => (
						<Skill key={skill.key} skill={skill.skill} />
					))}
					{frameworks.map((framework) => (
						<Skill key={framework.key} frameworks={framework.framework} />
					))}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 1, duration: 0.5 }}
						className="skills-hero-text"></motion.div>
				</div>
			</motion.div>
		</motion.div>
	);
}
