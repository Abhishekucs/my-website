import React, { useEffect } from "react";

//styled components
import {
  Container,
  Wrapper,
  Content,
  Flex,
  ContentOne,
  ContentSubOne,
  ContentTwo,
  ContentBar,
  ContentZero,
  ContentThree,
  Toggle,
  Line,
} from "../../styles/HomePage/bodyStyles";

//context
import {
  useGlobalStateContext,
  useGlobalDispatchContext,
} from "../../context/globalContext";

//typing
import Typer from "./Typer";

const Body = ({ onCursor }) => {
  const dispatch = useGlobalDispatchContext();
  const { currentTheme } = useGlobalStateContext();

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme);
  }, [currentTheme]);

  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" });
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" });
    }
  };

  //vaiants(framer motion)
  const parent = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        delay: 0.5,
        staggerChildren: 0.3,
      },
    },
    hidden: {
      opacity: 0,
      x: "-100%",
    },
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      },
    },
    hidden: {
      opacity: 0,
      x: "-100%",
    },
  };
  return (
    <Container id="home">
      <Wrapper column>
        <Content>
          <ContentZero>start</ContentZero>
          <Flex>
            <ContentOne animate="visible" initial="hidden" variants={parent}>
              <ContentSubOne variants={child}>Hello, i'm</ContentSubOne>
              <ContentSubOne variants={child} primary>
                Abhishek
              </ContentSubOne>
              <ContentSubOne variants={child} primary>
                Kumar
              </ContentSubOne>
              <ContentBar></ContentBar>
            </ContentOne>
            <ContentTwo
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1.5,
                  ease: [0.6, 0.05, -0.01, 0.9],
                },
              }}
            >
              <Typer
                dataText={["Developer", "Designer", "Coder", "blah blah blah"]}
              />
            </ContentTwo>
          </Flex>
          <ContentThree>start</ContentThree>
          <Toggle>
            <span
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              onClick={toggleTheme}
            ></span>
            <Line>click here to toggle between dark and light theme</Line>
          </Toggle>
        </Content>
      </Wrapper>
    </Container>
  );
};

export default Body;
