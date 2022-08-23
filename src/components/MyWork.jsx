import React from "react";
import CreateNewProject, { projects } from "./Projects";

export default function MyWork() {
	return (
		<>
			<div className="spacer purple-layer"></div>
			<section id="my-work" className="my-work-section">
				<div className="mw-content-wrapper">
					<div className="mw-hero">
						<h1>Completed Works</h1>
						<div className="mw-hero-text">
							<span>
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Laborum natus quaerat consectetur commodi perferendis aliquid
								deserunt tempora repellendus, eligendi ullam incidunt quas.
							</span>
						</div>
					</div>
					<div className="mw-contrast-stripe"></div>
				</div>
			</section>
		</>
	);
}
