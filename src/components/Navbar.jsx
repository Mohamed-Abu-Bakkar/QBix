import React, { useEffect, useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styled from "styled-components";

const StyledAppBar = styled(AppBar)`
  transition: background 0.3s ease, border-bottom 0.3s ease;
  background: ${(props) => (props.scrolled ? "#0d0d0d" : "transparent")} !important;
  border-bottom: ${(props) => (props.scrolled ? "1px solid #1a1a1a" : "none")};
  box-shadow: none !important;
`;

const NavLinks = styled.div`
  margin-left: auto;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none; /* hide links on mobile */
  }

  button {
    color: #ffffff;
    font-weight: 500;
    transition: 0.3s;
    &:hover {
      color: #42a5f5;
    }
  }
`;

const MobileMenuButton = styled(IconButton)`
  margin-left: auto;
  color: white;
  display: none !important;

  @media (max-width: 768px) {
    display: inline-flex !important; /* show only on mobile */
  }
`;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close drawer on link click
    }
  };

  const navItems = ["home", "about", "services", "testimonials", "contact"];

  return (
    <>
      <StyledAppBar position="fixed" scrolled={scrolled ? 1 : 0}>
<Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
  {/* Logo */}
  <Typography variant="h6" sx={{ color: "#42a5f5", fontWeight: 700 }}>
    QBix
  </Typography>

  {/* Desktop Nav */}
  <NavLinks>
    {navItems.map((item) => (
      <Button key={item} onClick={() => handleScrollTo(item)}>
        {item.charAt(0).toUpperCase() + item.slice(1)}
      </Button>
    ))}
  </NavLinks>

  {/* Mobile Hamburger */}
  <MobileMenuButton onClick={() => setOpen(true)}>
    <MenuIcon />
  </MobileMenuButton>
</Toolbar>

      </StyledAppBar>

      {/* Mobile Drawer */}
      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { background: "#0d0d0d", color: "white", width: "70%" } }}
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton onClick={() => handleScrollTo(item)}>
                <ListItemText
                  primary={item.charAt(0).toUpperCase() + item.slice(1)}
                  primaryTypographyProps={{ fontSize: "1.2rem", fontWeight: 500 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
