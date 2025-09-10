import React, { useEffect, useState } from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { HeroWrapper, ScrollArrow } from "../styles/GlobalStyles";
import ScrollReveal from "./ScrollReveal";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => window.scrollTo(0, 0), 10);
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setOffsetY(window.scrollY);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <HeroWrapper id="home">
      {/* Background glow orbs */}
      <div
        className="glow"
        style={{
          transform: `translate3d(${offsetY * 0.5}px, ${offsetY * 0.2}px, 0)`,
        }}
      />
      <div
        className="glow secondary"
        style={{
          transform: `translate3d(${-offsetY * 0.3}px, ${-offsetY * 0.15}px, 0)`,
        }}
      />

      {/* Hero content */}
      <Container className="content">
        <ScrollReveal direction="up">
          <Typography
            variant="h2"
            gutterBottom
            sx={{ fontSize: { xs: "2rem", md: "3.5rem" }, lineHeight: 1.2 }}
          >
            Welcome to{" "}
            <Box
              component="span"
              sx={{
                backgroundColor: "#42a5f5",
                color: "#000",
                fontWeight: "bold",
                px: 1,
                borderRadius: "4px",
              }}
            >
              QBix
            </Box>
          </Typography>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.2}>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, color: "white" }}
          >
            Innovative Solutions. Scalable Impact. Agile Like Never Before.
          </Typography>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={0.4}>
          <Button
            variant="contained"
            size="large"
            sx={{ background: "#42a5f5", color: "black", mt: 3 }}
            onClick={scrollToNext}
          >
            Get Started
          </Button>
        </ScrollReveal>
      </Container>

      {/* Premium scroll indicator */}
      <ScrollArrow onClick={scrollToNext} />
    </HeroWrapper>
  );
}
