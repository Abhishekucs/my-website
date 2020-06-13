import React, { useEffect } from "react";
import LazyLoad from "react-lazy-load";
import AOS from "aos";
import "aos/dist/aos.css";

//styled Components
import {
  WorkSection,
  Wrapper,
  ContentOne,
  Content,
  DesignContent,
  AppContent,
  Title,
  Images,
  Info,
  AppBody,
  Button,
  ButtonTitle,
  ButtonHeading,
  DesignBodyContainer,
} from "../../styles/HomePage/Work";

//images
import Abhishek from "../../assests/images/Abhishek-01.png";
import Desert from "../../assests/images/Desert.png";
import Dreamland from "../../assests/images/dreamland1.png";
import Holi from "../../assests/images/Holi.png";
import LightRays from "../../assests/images/LightRays.png";
import Mushroom from "../../assests/images/Mushroom.png";
import TheLostCity from "../../assests/images/thelostcity.png";
import TajMahal from "../../assests/images/TajMahal.png";
import TheImpossibleTriangle from "../../assests/images/the impossible triangle.png";
import Saturn from "../../assests/images/saturn.png";

//Photos
const Photos = [
  { id: 1, Photo: Abhishek, firstName: "Abhishek", lastName: "Kumar" },
  { id: 2, Photo: Desert, firstName: "Desert", lastName: "" },
  { id: 3, Photo: Dreamland, firstName: "Dreamland", lastName: "" },
  { id: 4, Photo: Holi, firstName: "Holi", lastName: "" },
  { id: 5, Photo: Saturn, firstName: "Saturn", lastName: "" },
  { id: 6, Photo: TheLostCity, firstName: "The Lost", lastName: "City" },
  { id: 7, Photo: TajMahal, firstName: "TajMahal", lastName: "" },
  {
    id: 8,
    Photo: TheImpossibleTriangle,
    firstName: "The Impossible",
    lastName: "Triangle",
  },

  { id: 9, Photo: LightRays, firstName: "LightRays", lastName: "" },
  { id: 10, Photo: Mushroom, firstName: "Mushroom", lastName: "" },
];

//Links
const Links = [
  {
    id: 1,
    Path: "https://ucs-weather-application.herokuapp.com",
    Note: "Node.js",
    Title: "Weather App",
    SubTitle: "Real Time Weather",
  },
  {
    id: 2,
    Path: "https://ucs-expensify-app.herokuapp.com",
    Note: "React.js",
    Title: "Budget App",
    SubTitle: "Manage Your Expenses",
  },
  {
    id: 3,
    Path: "https://ucs-chat-app.herokuapp.com",
    Note: "Node.js",
    Title: "Chat App",
    SubTitle: "Using Socket.io",
  },
];

const Work = ({ onCursor }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <WorkSection id="work">
      <Wrapper>
        <Content>
          <ContentOne>work</ContentOne>
          <DesignContent>
            <Title>Design</Title>
            <DesignBodyContainer>
              {Photos.map((photo) => (
                <Images
                  key={photo.id}
                  onMouseEnter={() => onCursor("pointer")}
                  onMouseLeave={onCursor}
                  data-aos="fade-right"
                  data-aos-once="true"
                  whileHover={{
                    scale: 1.1,
                  }}
                >
                  <LazyLoad>
                    <img src={photo.Photo} alt={photo.firstName} />
                  </LazyLoad>
                  <Info>
                    <span className="title">
                      {photo.firstName}
                      <br />
                      {photo.lastName}
                    </span>
                    <span className="bar"></span>
                    <span className="number">{photo.id}</span>
                  </Info>
                </Images>
              ))}
            </DesignBodyContainer>
          </DesignContent>
          <AppContent>
            <Title>App</Title>
            <AppBody>
              {Links.map((Link) => (
                <Button
                  key={Link.id}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <a href={Link.Path} target="_blank" rel="noopener noreferrer">
                    <ButtonTitle>{Link.Note}</ButtonTitle>
                    <ButtonHeading>
                      {Link.Title}
                      <br />
                      <span className="break">{Link.SubTitle}</span>
                    </ButtonHeading>
                  </a>
                </Button>
              ))}
            </AppBody>
          </AppContent>
          <ContentOne last>work</ContentOne>
        </Content>
      </Wrapper>
    </WorkSection>
  );
};

export default Work;
