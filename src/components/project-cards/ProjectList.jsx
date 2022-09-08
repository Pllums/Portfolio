import { projects } from "../Projects";
import ProjectCard from "./ProjectCard";

export default function ProjectList({ selectedId }) {
	return (
		<div className="project-grid">
			{projects.map((project) => (
				<ProjectCard
					key={project.key}
					img={project.img}
					id={project.id}
					title={project.title}
					content={project.content}
					codeURL={project.codeURL}
					site={project.site}
					tech={project.tech}
				/>
			))}
		</div>
	);
}
