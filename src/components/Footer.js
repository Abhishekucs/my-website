import React from "react";

//styled components
import { FooterSection, Container } from "../styles/footer";

const Footer = () => {
  return (
    <FooterSection>
      <Container>
        <span>&copy; Made with</span>
        <span className="symbol"></span>
        <span>by Abhishek. 2020</span>
      </Container>
    </FooterSection>
  );
};

export default Footer;
