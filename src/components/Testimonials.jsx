import React from "react";
import { Container, Typography, Paper } from "@mui/material";
import styled from "styled-components";
import ScrollReveal from "./ScrollReveal";

const TestimonialsWrapper = styled.div`
  padding: 5rem 0;
  background: #0d0d0d;
  color: white;
`;

const testimonials = [
  { name: "Antony", text: "QBix transformed our digital strategy." },
  { name: "Mohamed Faaris", text: "Excellent service and timely delivery." },
];

export default function Testimonials() {
  return (
    <TestimonialsWrapper id="testimonials">
      <Container>
        <ScrollReveal direction="up">
          <Typography
            variant="h4"
            gutterBottom
            align="center"
            sx={{ color: "#42a5f5" }}
          >
            What Our Clients Say
          </Typography>
        </ScrollReveal>
        {testimonials.map((t, idx) => (
          <ScrollReveal key={idx} direction="up" delay={idx * 0.2}>
            <Paper
              sx={{
                background: "#1a1a1a",
                color: "white",
                padding: "1.5rem",
                margin: "1.5rem 0",
                borderRadius: "12px",
              }}
            >
              <Typography variant="body1" paragraph>
                "{t.text}"
              </Typography>
              <Typography variant="subtitle2" sx={{ color: "#42a5f5" }}>
                - {t.name}
              </Typography>
            </Paper>
          </ScrollReveal>
        ))}
      </Container>
    </TestimonialsWrapper>
  );
}
