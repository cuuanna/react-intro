function ProjectCard({ name, screenshot, github, tech, description }) {
  return (
    <div className="project-card">
      <img src={screenshot} alt={name} />
      <div className="project-info">
        <h2>{name}</h2>
        <p>{description}</p>
        <p className="tech">{tech.join(", ")}</p>
        <a href={github} target="_blank" rel="noreferrer">GitHub</a>
      </div>
    </div>
  )
}

export default ProjectCard