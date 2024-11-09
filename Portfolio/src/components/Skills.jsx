import React from "react";

const Skills = () => {
	return (
		<div className="skills-section">
			<h1>Skills</h1>
			<div className="skills-content">
				<div className="skills-category">
					<h2>Programmeertalen</h2>
					<div className="skill">
						<span>Swift (iOS-appontwikkeling)</span>
						<div className="skill-bar">
							<div className="skill-level level-high"></div>
						</div>
					</div>
					<div className="skill">
						<span>JavaScript (ES6)</span>
						<div className="skill-bar">
							<div className="skill-level level-medium"></div>
						</div>
					</div>
					<div className="skill">
						<span>HTML5 & CSS3</span>
						<div className="skill-bar">
							<div className="skill-level level-high"></div>
						</div>
					</div>
					<div className="skill">
						<span>React.js</span>
						<div className="skill-bar">
							<div className="skill-level level-medium"></div>
						</div>
					</div>
					<div className="skill">
						<span>Vue.js</span>
						<div className="skill-bar">
							<div className="skill-level level-low"></div>
						</div>
					</div>
				</div>

				<div className="skills-category">
					<h2>Tools & technologieën</h2>
					<div className="skill">
						<span>Xcode</span>
						<div className="skill-bar">
							<div className="skill-level level-high"></div>
						</div>
					</div>
					<div className="skill">
						<span>Git & GitHub</span>
						<div className="skill-bar">
							<div className="skill-level level-medium"></div>
						</div>
					</div>
					<div className="skill">
						<span>Figma</span>
						<div className="skill-bar">
							<div className="skill-level level-medium"></div>
						</div>
					</div>
					<div className="skill">
						<span>Adobe programma's</span>
						<div className="skill-bar">
							<div className="skill-level level-high"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
