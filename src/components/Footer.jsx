import React from "react";
import { Container, Typography } from "@mui/material";
import styled from "styled-components";
import ScrollReveal from "./ScrollReveal";

const FooterWrapper = styled.div`
  padding: 2rem 0;
  background: #0d0d0d;
  color: gray;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <ScrollReveal direction="up">
          <Typography variant="body2">
            © {new Date().getFullYear()} QBix. All rights reserved.
          </Typography>
        </ScrollReveal>
      </Container>
    </FooterWrapper>
  );
}
