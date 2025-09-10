import React, { useState } from "react";
import { Container, Typography, Box } from "@mui/material";
import { ServicesWrapper } from "../styles/GlobalStyles";
import ScrollReveal from "./ScrollReveal";

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description:
        "We build fast, scalable, and responsive web applications using modern frameworks and tools.",
      img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "Mobile Apps",
      description:
        "Cross-platform mobile apps with seamless performance and engaging UI/UX.",
      img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    },
    {
      title: "AI & Automation",
      description:
        "Leverage AI-driven solutions and automation tools to boost productivity and innovation.",
      img: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
    },
  ];

  const [activeImg, setActiveImg] = useState(services[0].img);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered item

  return (
    <ServicesWrapper id="services">
      <Container className="content">
        <ScrollReveal direction="up">
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            fontSize={48}
            fontWeight={1000}
            sx={{ color: "#42a5f5", mb: 5 }}
          >
            What we Provide
          </Typography>
        </ScrollReveal>

        <Box className="service-layout">
          {/* Left Side - Only titles, description shows on hover */}
          <Box className="service-texts">
            {services.map((service, index) => (
              <ScrollReveal key={index} direction="left">
                <Box
                  className="service-item"
                  onMouseEnter={() => {
                    setActiveImg(service.img);
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Typography
                    variant="h5"
                    sx={{ mb: 1, color: "#42a5f5" }}
                  >
                    {service.title}
                  </Typography>

                  {/* Show description only on hover */}
                  {hoveredIndex === index && (
                    <Typography variant="body1" sx={{ color: "#ddd" }}>
                      {service.description}
                    </Typography>
                  )}
                </Box>
              </ScrollReveal>
            ))}
          </Box>

          {/* Right Side - Animated Image */}
          <Box className="service-image">
            <img
              key={activeImg} // Force fade animation
              src={activeImg}
              alt="Active Service"
              className="fade-img"
            />
          </Box>
        </Box>
      </Container>
    </ServicesWrapper>
  );
}
