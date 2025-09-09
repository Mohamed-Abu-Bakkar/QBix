import React, { useEffect, useState } from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";
import { ContactWrapper } from "../styles/GlobalStyles.js";
import ScrollReveal from "./ScrollReveal";

export default function Contact() {
  const [offsetY, setOffsetY] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    setOffsetY(window.scrollY);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const validate = () => {
    const tempErrors = {};
    if (!formData.name) tempErrors.name = "Name is required";
    if (!formData.email) tempErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Email is invalid";
    if (!formData.message) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert(
        `Thank you, ${formData.name}! Your message has been received. We will contact you through ${formData.email}.`
      );
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <ContactWrapper id="contact">
      <div
        className="glow"
        style={{
          bottom: -250 + offsetY * 0.1,
          left: "50%",
          transform: "translateX(-50%)",
        }}
      />

      <Container maxWidth="sm" className="content">
        <ScrollReveal direction="up">
          <Typography variant="h4" gutterBottom align="center" sx={{ color: "#42a5f5" }}>
            Contact Us
          </Typography>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={0.2}>
          <Box
            component="form"
            sx={{ mt: 3, display: "flex", flexDirection: "column", gap: 2 }}
            onSubmit={handleSubmit}
          >
            <TextField
              label="Name"
              variant="outlined"
              fullWidth
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "#42a5f5" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
              }}
              error={!!errors.name}
              helperText={errors.name}
            />
            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "#42a5f5" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
              }}
              error={!!errors.email}
              helperText={errors.email}
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              InputLabelProps={{ style: { color: "white" } }}
              InputProps={{ style: { color: "white" } }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "gray" },
                  "&:hover fieldset": { borderColor: "#42a5f5" },
                  "&.Mui-focused fieldset": { borderColor: "#42a5f5" },
                },
              }}
              error={!!errors.message}
              helperText={errors.message}
            />
            <Button type="submit" variant="contained" size="large" sx={{ background: "#42a5f5", color: "white" }}>
              Send Message
            </Button>
          </Box>
        </ScrollReveal>
      </Container>
    </ContactWrapper>
  );
}
