import React from "react";
import { Container, Typography } from "@mui/material";
import { AboutWrapper } from "../styles/GlobalStyles.js";
import { motion } from "framer-motion";

const FloatingImage = {
  float: "left",
  width: "40%",
  maxWidth: "300px",
  marginRight: "2rem",
  borderRadius: "12px",
  marginBottom: "1rem",
};

export default function About() {
  return (
    <AboutWrapper id="about">
      <Container className="content">
        <motion.img
          src="https://cdn.vectorstock.com/i/500p/99/75/qb-techno-editable-font-logo-for-corporate-vector-56619975.jpg"
          alt="About QBix"
          style={FloatingImage}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: "#42a5f5" }}>
            About QBix
          </Typography>
          <Typography variant="body1" color="white" paragraph>
            QBix is a modern service provider agency delivering scalable
            solutions for businesses worldwide. Agile, innovative, and tailored
            for startups and enterprises.
          </Typography>
          <Typography variant="body1" color="white">
            Expertise spans web development, analytics, and AI — empowering
            businesses to adapt and thrive in the digital era.
          </Typography>
        </motion.div>
      </Container>
    </AboutWrapper>
  );
}
