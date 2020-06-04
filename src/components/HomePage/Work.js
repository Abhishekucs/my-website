import React, { useEffect } from "react";
import { useSpring } from "react-spring";
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
  DesignBody,
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
  const calc = (x, y) => [
    -(y - window.innerHeight / 2) / 20,
    (x - window.innerWidth / 2) / 20,
    1,
  ];
  const trans = (x, y, s) =>
    `perspective(1500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 },
  }));

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
            <DesignBodyContainer
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
            >
              {Photos.map((photo) => (
                <DesignBody
                  key={photo.id}
                  onMouseMove={({ clientX: x, clientY: y }) =>
                    set({ xys: calc(x, y) })
                  }
                  onMouseLeave={() => {
                    set({ xys: [0, 0, 1] });
                  }}
                  style={{ transform: props.xys.interpolate(trans) }}
                >
                  <LazyLoad debounce={false}>
                    <Images
                      data-aos="fade-right"
                      data-aos-once="true"
                      data-aos-offset="300"
                    >
                      <img src={photo.Photo} alt={photo.firstName} />
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
                  </LazyLoad>
                </DesignBody>
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
                  <a target="_blank" rel="noopener noreferrer" href={Link.Path}>
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
