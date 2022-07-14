import React from "react";
import { Container } from "@mui/material";
import HeroSection from "../components/HeroSection";
import CakeSection from "../components/CakeSection";
import ContactUs from "../components/ContactUs";

export default function Home() {
  return (
    <Container>
      <HeroSection />
      <CakeSection />
      <ContactUs />
    </Container>
  );
}
