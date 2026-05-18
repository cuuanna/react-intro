function ProjectPopup({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="popup-overlay" onClick={onClose}>
      <div className="popup-card" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={onClose}>✕</button>

        <img src={project.screenshot} alt={project.name} className="popup-screenshot" />

        <div className="popup-content">
          <h2>{project.name}</h2>

          <div className="popup-tech">
            {project.tech.map((t) => (
              <span key={t} className="tech-tag">{t}</span>
            ))}
          </div>

          <p>{project.description}</p>

          <h4>What I learned</h4>
          <p>{project.learned}</p>

          <h4>My role</h4>
          <p>{project.role}</p>

          <h4>Challenges</h4>
          <p>{project.challenges}</p>

          <a href={project.github} target="_blank" rel="noreferrer" className="popup-link">
            View on GitHub →
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectPopup;