import { useState } from "react";
import ProjectCard from "../Components/ProjectCard";
import ProjectPopup from "../Components/ProjectPopup";

const allProjects = [
  {
    id: 1,
    name: "Genesis",
    screenshot: "./images/genesis.jpg",
    github: "https://github.com/cuuanna/Genesis",
    tech: ["HTML", "CSS", "Figma"],
    description: "Recreation of a modern website design through a Figma prototype.",
    learned: "How to translate a Figma design into clean HTML and CSS.",
    role: "Solo project",
    challenges: "Matching the design pixel-perfectly while keeping the code clean.",
  },
  {
    id: 2,
    name: "Productly",
    screenshot: "./images/productly.jpg",
    github: "https://github.com/cuuanna/Productly",
    tech: ["HTML", "CSS"],
    description: "Modern product landing page design through a Figma prototype.",
    learned: "Structuring a landing page with clear visual hierarchy.",
    role: "Solo project",
    challenges: "Making the layout feel polished without a framework.",
  },
  {
    id: 3,
    name: "Responsive Website",
    screenshot: "./images/responsive.jpg",
    github: "https://github.com/cuuanna/Responsive-Website",
    tech: ["HTML", "CSS"],
    description: "Responsive website design through a Figma prototype.",
    learned: "Mobile-first thinking and how to use media queries effectively.",
    role: "Solo project",
    challenges: "Getting the layout to hold up on very small screens.",
  },
];

function Projects() {
  const [showProjects, setShowProjects] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [search, setSearch] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const query = search.toLowerCase();
    const matchesName = project.name.toLowerCase().includes(query);
    const matchesTech = project.tech.some((t) => t.toLowerCase().includes(query));
    return matchesName || matchesTech;
  });

  return (
    <div className="portfolio">
      <h1>Portfolio Anna Tran</h1>

      <input
        type="text"
        placeholder="Search by name or tech..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />

      <button onClick={() => setShowProjects(!showProjects)}>
        {showProjects ? "Hide projects" : "Show projects"}
      </button>

      {showProjects && (
        <div>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              screenshot={project.screenshot}
              github={project.github}
              tech={project.tech}
              description={project.description}
              onClick={() => setSelectedProject(project)}
            />
          ))}
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