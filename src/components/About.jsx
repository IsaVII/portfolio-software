import Game from "../assets/game/Game.jsx";
import TextReveal from "./motion/TextReveal.jsx";

export default function About() {
  return (
    <>
      <section id="about" className="section">
        <TextReveal as="h2" text="About Me" className="section-title" />

        <div className="about-wrapper">
          <div className="container-left">
            <Game />
          </div>

          <div className="container-right" id="about-content">
            <p className="section-content header">
              Hi, I'm <b>Isa</b>,
            </p>
            <p className="tab">
              a Software Developer with a background in game systems
              programming.
            </p>
            <br />
            <p className="section-content">
              I've spent 8+ years developing games and game systems - as a solo
              developer and as a programmer/technical designer on production
              teams, including leading programming on a multiplayer co-op title.
              Now I'm applying that same problem-solving and systems thinking to
              web development. Recently, I built an inventory management system
              for a local store, replacing a manual paper process with a tool
              that auto-parses supplier PDFs into structured data.
            </p>

            <div className="experience-wrapper">
              <div className="experience-item">
                <span className="experience-title sphere-shape">8+</span>
                <p className="experience-description">
                  Years of programming experience
                </p>
              </div>

              <div className="experience-item">
                <span className="experience-title sphere-shape">4</span>
                <p className="experience-description">programming languages</p>
              </div>

              <div className="experience-item">
                <span className="experience-title sphere-shape">2</span>
                <p className="experience-description">
                  Game engines worked with
                </p>
              </div>

              <div className="experience-item">
                <span
                  className="experience-title sphere-shape"
                  style={{ fontSize: "3em" }}
                >
                  ∞
                </span>
                <p className="experience-description">Motivation</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
