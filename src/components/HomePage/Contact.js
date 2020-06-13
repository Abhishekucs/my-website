import React from "react";

//styled components
import {
  ContactSection,
  Wrapper,
  Content,
  Title,
  Info,
  Details,
  Icon,
  Button,
} from "../../styles/HomePage/Contact";

//svg
import {
  Instagram,
  Facebook,
  Github,
  Twitter,
  Linkdein,
} from "../../assests/svg/social.icons";

const Contact = ({ onCursor }) => {
  return (
    <ContactSection id="contact">
      <Wrapper>
        <Content>
          <Title>contact</Title>
          <Info>
            <span>Find me on:</span>
            <Details>
              <Icon>
                <Facebook />
              </Icon>
              <a
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                href="https://www.facebook.com/abhishekucs/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </Details>
            <Details>
              <Icon>
                <Instagram />
              </Icon>
              <a
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                href="https://www.instagram.com/abhishek00308/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </Details>
            <Details>
              <Icon>
                <Github />
              </Icon>
              <a
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                href="https://github.com/Abhishekucs"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </Details>
            <Details>
              <Icon>
                <Twitter />
              </Icon>
              <a
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                href="https://twitter.com/mabhi1999"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </Details>
            <Details>
              <Icon>
                <Linkdein />
              </Icon>
              <a
                onMouseEnter={() => onCursor("pointer")}
                onMouseLeave={onCursor}
                href="https://www.linkedin.com/in/abhishek-kumar-1b8a13151/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkdein
              </a>
            </Details>
          </Info>
          <Button
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
          >
            <a
              href="mailto:abhishekucskumar@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get in touch
            </a>
          </Button>
          <Title>contact</Title>
        </Content>
      </Wrapper>
    </ContactSection>
  );
};

export default Contact;
