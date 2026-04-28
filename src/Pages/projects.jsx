import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";

function Projects() {
  const [showProjects, setShowProjects] = useState(false);

  return (
    <div>
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
          />
          <ProjectCard
            name="Productly"
            screenshot="./images/productly.jpg"
            github="https://github.com/cuuanna/Productly"
            tech={["HTML", "CSS"]}
            description="Modern product landing page design through a Figma prototype."
          />
          <ProjectCard
            name="Responsive Website"
            screenshot="./images/responsive.jpg"
            github="https://github.com/cuuanna/Responsive-Website"
            tech={["HTML", "CSS"]}
            description="Responsive website design through a Figma prototype."
          />
        </div>
      )}
    </div>
  );
}

export default Projects;