import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import ProjectPopup from "../Components/ProjectPopup";

function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio">
      <h1>Portfolio Anna Tran</h1>
      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide projects" : "Show projects"}
      </button>

      {showProjects && (
        <div>
          <ProjectCard
            name="Genesis"
            screenshot="./images/genesis.jpg"
            github="https://github.com/cuuanna/Genesis"
            tech={["HTML", "CSS", "Figma"]}
            description="Recreation of a modern website design through a Figma prototype."
            onClick={() => setSelectedProject({
              name: "Genesis",
              screenshot: "./images/genesis.jpg",
              github: "https://github.com/cuuanna/Genesis",
              tech: ["HTML", "CSS", "Figma"],
              description: "Recreation of a modern website design through a Figma prototype.",
              learned: "How to translate a Figma design into clean HTML and CSS.",
              role: "Solo project",
              challenges: "Matching the design pixel-perfectly while keeping the code clean.",
            })}
          />
          <ProjectCard
            name="Productly"
            screenshot="./images/productly.jpg"
            github="https://github.com/cuuanna/Productly"
            tech={["HTML", "CSS"]}
            description="Modern product landing page design through a Figma prototype."
            onClick={() => setSelectedProject({
              name: "Productly",
              screenshot: "./images/productly.jpg",
              github: "https://github.com/cuuanna/Productly",
              tech: ["HTML", "CSS"],
              description: "Modern product landing page design through a Figma prototype.",
              learned: "Structuring a landing page with clear visual hierarchy.",
              role: "Solo project",
              challenges: "Making the layout feel polished without a framework.",
            })}
          />
          <ProjectCard
            name="Responsive Website"
            screenshot="./images/responsive.jpg"
            github="https://github.com/cuuanna/Responsive-Website"
            tech={["HTML", "CSS"]}
            description="Responsive website design through a Figma prototype."
            onClick={() => setSelectedProject({
              name: "Responsive Website",
              screenshot: "./images/responsive.jpg",
              github: "https://github.com/cuuanna/Responsive-Website",
              tech: ["HTML", "CSS"],
              description: "Responsive website design through a Figma prototype.",
              learned: "Mobile-first thinking and how to use media queries effectively.",
              role: "Solo project",
              challenges: "Getting the layout to hold up on very small screens.",
            })}
          />
        </div>
      )}

      <ProjectPopup
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}

export default Projects;