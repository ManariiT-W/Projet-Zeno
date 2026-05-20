import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import VideoModal from "./components/VideoModal";

import Home from "./sections/Home";
import About from "./sections/About";
import Creations from "./sections/Creations";
import Pricing from "./sections/Pricing";

export default function App() {
  const [active, setActive] = useState("accueil");
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const ids = ["accueil", "about", "creations", "tarifs"];
    const visible = new Set();

    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) visible.add(e.target.id);
        else visible.delete(e.target.id);
      });

      for (let i = ids.length - 1; i >= 0; i--) {
        if (visible.has(ids[i])) {
          setActive(ids[i]);
          break;
        }
      }
    }, { threshold: 0.3 });

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  return (
    <>
      <Navbar active={active} />

      <main>
        <Home onDemo={() => setShowModal(true)} />
        <About />
        <Creations />
        <Pricing />
      </main>

      <Footer />

      {showModal && (
        <VideoModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}