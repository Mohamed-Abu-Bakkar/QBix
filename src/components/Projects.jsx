import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ProjectsWrapper } from "../styles/GlobalStyles";

const projects = [
  {
    title: "Project Alpha",
    desc: "A cutting-edge web platform for modern businesses.",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Beta",
    desc: "A mobile-first solution for digital marketing.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80"
  },
  {
    title: "Project Gamma",
    desc: "Custom tech solutions for startups.",
    img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <ProjectsWrapper id="projects">
      <h2>What We've Done</h2>
      <div className="timeline">
        {projects.map((p, i) => (
          <div key={i} className="project-item">
  <div className="dot" />
  <div className="card-wrapper">
    <motion.div
      className="card"
      onMouseEnter={() => setHovered(i)}
      onMouseLeave={() => setHovered(null)}
    >
      <motion.img
        src={p.img}
        alt={p.title}
        animate={{
          scale: hovered === i ? 1.05 : 1,
          filter: hovered === i ? "blur(1px)" : "none"
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      />
      <div className="overlay">
        <div className="title">{p.title}</div>
        <div className="desc">{p.desc}</div>
      </div>
    </motion.div>
  </div>
  <div className="spacer" />
</div>

        ))}
      </div>
    </ProjectsWrapper>
  );
}
