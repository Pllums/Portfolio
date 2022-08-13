const projects = [
	{
		key: 0,
		title: "Squash-It",
		img: "./images/Squash-it.png",
		content:
			"Squash-It is a mock bug submit and tracking site where users can register as employees and are then able to work assign themselves a bug, list any work they have done to correct the fake bugs and any user can submit a bug without logging in.",
		tech: "EJS, Node.js, HTML, CSS, MongoDB",
		codeURL: "https://github.com/Pllums/Bug-Tracker",
	},
	{
		key: 1,
		title: "Boudoir X Alyssa",
		img: "./images/BoudoirXAlyssa.png",
		content:
			"This is a site I made for my wife's photography business. The site features a rich landing page, portfolio pages and contact page.",
		tech: "HTML, CSS, JavaScript, Node.js",
		codeURL: "https://github.com/Pllums/Boudoir-X-Alyssa",
	},
	{
		key: 2,
		title: "WarServeR",
		img: "./images/BoudoirXAlyssa.png",
		content:
			"I made this site as a refresh for a client who wanted a retro feel for his Quake 3 Arena page. The original site was faiyl slow, so I built this with React to give it modularity and the snappy feel we all want as.",
		tech: "ReactJs, CSS",
		codeURL: "https://github.com/Pllums/WarServeR-Redesign",
		site: "https://warserver-redesign.vercel.app/",
	},
];

function Projects(props) {
	return (
		<div className="col-md-4 project-card">
			<div>
				<h3 className="project-title">{props.title}</h3>
				<img className="project-img" src={props.img} />
				<p className="project-content">{props.content}</p>
				<hr />
				<p className="project-tech">
					<span>
						<a href={props.codeURL} rel="noreferrer" target="_blank">
							View the Code
						</a>
					</span>
					Technologies Used: {props.tech}.
					<span>
						<a href={props.site} rel="noreferrer" target="_blank">
							See it in action
						</a>
					</span>
				</p>
			</div>
		</div>
	);
}

function CreateNewProject(project) {
	return (
		<Projects
			title={project.title}
			img={project.img}
			content={project.content}
			codeURL={project.codeURL}
			tech={project.tech}
			site={project.site}
		/>
	);
}

export default CreateNewProject;
export { projects };
