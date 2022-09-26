const skills = [
	{ id: 0, key: 0, skill: "HTML" },
	{ id: 1, key: 1, skill: "CSS" },
	{ id: 2, key: 2, skill: "JavaScript" },
	{ id: 3, key: 3, skill: "TypeScript" },
];

const frameworks = [
	{ id: 0, key: 0, framework: "Bootstrap" },
	{ id: 1, key: 1, framework: "React" },
];

export default function Skill(props) {
	return (
		<div className="col-lg-4">
			<h3>{props.skill}</h3>
			<h3>{props.frameworks}</h3>
		</div>
	);
}

export { skills, frameworks };
