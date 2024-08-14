function ProjectSquare({ projectNum }) {
    return <div className="project-square">Project {projectNum}</div>;
  }
  
export function Projects() {
    return (
      <section className="projects-grid">
        <ProjectSquare projectNum={"1"} />
        <ProjectSquare projectNum={"2"} />
        <ProjectSquare projectNum={"3"} />
      </section>
    );
  }