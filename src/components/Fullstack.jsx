import projects from "../assets/projects/fullstack.json";
import ProjectCard from "../assets/projects/ProjectCard.jsx";
import "../css/projects.css";

export default function Fullstack() {
  return (
    <>
      <section className="section" id="fullstack">
        <h2 className="section-title">Web Projects</h2>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </section>
    </>
  );
}
