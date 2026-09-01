import projects from "../assets/projects/fullstack.json";
import ProjectCard from "../assets/projects/ProjectCard.jsx";
import "../css/projects.css";
import Reveal from "./motion/Reveal.jsx";
import TextReveal from "./motion/TextReveal.jsx";

export default function Fullstack() {
  return (
    <>
      <div className="pb-14">
        <section className="section" id="fullstack">
          <TextReveal as="h2" text="Web Projects" className="section-title" />
          {projects.map((project, index) => (
            <Reveal key={project.id} variant="fade">
              <ProjectCard key={project.id} project={project} index={index} />
            </Reveal>
          ))}
        </section>
      </div>
    </>
  );
}
