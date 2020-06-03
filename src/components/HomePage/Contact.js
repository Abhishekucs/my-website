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
              >
                Twitter
              </a>
            </Details>
          </Info>
          <Button
            onMouseEnter={() => onCursor("pointer")}
            onMouseLeave={onCursor}
          >
            <a href="https://mail.google.com/mail/u/0/#inbox?compose=new">
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
