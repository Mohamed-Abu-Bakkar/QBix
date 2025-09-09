import React, { useState, useEffect } from "react";
import { Container, Grid, Typography, Card, CardContent } from "@mui/material";
import { motion } from "framer-motion";
import styled from "styled-components";

const ServicesWrapper = styled.div`
  padding: 5rem 0;
  background: #0a0a0a;
  color: white;
  position: relative;
  overflow: hidden;

  .content {
    position: relative;
    z-index: 1;
  }

  .service-card {
    background: #111;
    border-radius: 12px;
    transition: transform 0.3s, box-shadow 0.3s;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 20px rgba(66, 165, 245, 0.4);
    }
  }
`;

const servicesData = [
  { title: "Web Development", desc: "Responsive websites with modern tech stack." },
  { title: "Analytics", desc: "Data-driven insights to scale your business." },
  { title: "AI Solutions", desc: "Custom AI tools to automate and innovate." },
  { title: "Consulting", desc: "Expert guidance for startups and enterprises." },
];

export default function Services() {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setOffsetY(window.scrollY);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ServicesWrapper id="services">
      <Container className="content">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Typography variant="h4" gutterBottom align="center" sx={{ color: "#42a5f5" }}>
            Our Services
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mt: 3 }}>
          {servicesData.map((service, i) => (
            <Grid item xs={12} md={6} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="service-card">
                  <CardContent>
                    <Typography variant="h6" sx={{ color: "#42a5f5", fontWeight: "bold" }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "white", mt: 1 }}>
                      {service.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ServicesWrapper>
  );
}
