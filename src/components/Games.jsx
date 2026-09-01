import { icons } from "../assets/icons.jsx";
import TextReveal from "./motion/TextReveal.jsx";
import Reveal from "./motion/Reveal.jsx";
import projects from "../assets/projects/games.json";
import ProjectCardGames from "../assets/projects/ProjectCardGames.jsx";
import UnityProjects from "./partials/UnityProjects.jsx";
import "../css/projects.css";

const Icon = ({ name }) => icons[name] ?? null;

export default function Games() {
  return (
    <section className="section" id="games ">
      <TextReveal as="h2" text="Games Projects" className="section-title" />

      {projects.map((project, index) => (
        <Reveal key={project.id}>
          <ProjectCardGames key={project.id} project={project} index={index} />
        </Reveal>
      ))}

      <UnityProjects />
    </section>
  );
}
