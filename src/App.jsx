import Header from "./components/Header";
import About from "./components/About";
import Tools from "./components/Tools";

import { useEffect } from "react";

import particlesConfig from "./config/particlesConfig";
import { tsParticles } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { loadTwinkleUpdater } from "@tsparticles/updater-twinkle";
import Fullstack from "./components/Fullstack.jsx";
import Games from "./components/Games.jsx";
import Footer from "./components/Footer.jsx";
import "./css/reveal.css";

function App() {
  useEffect(() => {
    let container;
    let cancelled = false;

    const initParticles = async () => {
      await loadSlim(tsParticles);
      await loadTwinkleUpdater(tsParticles);

      container = await tsParticles.load({
        id: "tsparticles",
        options: particlesConfig,
      });

      if (cancelled) container?.destroy();
    };

    initParticles();

    return () => {
      cancelled = true;
      container?.destroy();
    };
  }, []);

  return (
    <>
      <div id="tsparticles" />
      <section id="header">
        <Header />
      </section>
      <section id="center">
        <About />
        <Tools />
        <Fullstack />
        <Games />
      </section>
      <footer id="footer">
        <Footer />
      </footer>
    </>
  );
}

export default App;
