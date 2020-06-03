import React, { useState } from "react";

//styled components
import { createGlobalStyle, ThemeProvider } from "styled-components";

//React components
import Header from "../components/Header";
import NavigationList from "./NavigationList";
import Body from "./HomePage/Body";
import Work from "./HomePage/Work";
import About from "../components/HomePage/About";

//custom cursor
import CustomCursor from "./CustomCursor";

//context
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext";
import Contact from "./HomePage/Contact";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

export const GlobalStyle = createGlobalStyle`
  * {
    text-decoration: none;
    box-sizing: border-box;
    cursor: none;
  }
  #root {
    height: 0;
  }

  html {
    font-size: 62.5%;
  }

  body{
    font-family: 'Montserrat', sans-serif;
    font-size: 1.6rem;
    overflow-x: hidden;
    overscroll-behavior: none;
    background: ${(props) => props.theme.background};
  }
`;

const Home = () => {
  const dispatch = useGlobalDispatchContext();
  const { cursorStyles, currentTheme } = useGlobalStateContext();

  const [hamburgerPosition, setHamburgerPosition] = useState({
    x: 0,
    y: 0,
  });
  const DarkTheme = {
    background: "#000",
    text: "#fff",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
    orange: "#fe5d26",
    bg: "#1A1A1A",
  };

  const LightTheme = {
    background: "#fff",
    text: "#000",
    left: `${hamburgerPosition.x}px`,
    top: `${hamburgerPosition.y}px`,
    orange: "#fe5d26",
    bg: "#E6E6E6",
  };

  const onCursor = (cursorType) => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false;
    dispatch({
      type: "CURSOR_TYPE",
      cursorType: cursorType,
    });
  };

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <ThemeProvider theme={currentTheme === "dark" ? DarkTheme : LightTheme}>
        <GlobalStyle />
        <CustomCursor toggleMenu={toggleMenu} />
        <ScrollToTop onCursor={onCursor} />
        <Header
          onCursor={onCursor}
          hamburgerPosition={hamburgerPosition}
          setHamburgerPosition={setHamburgerPosition}
          setToggleMenu={setToggleMenu}
          toggleMenu={toggleMenu}
        />
        <NavigationList
          onCursor={onCursor}
          toggleMenu={toggleMenu}
          setToggleMenu={setToggleMenu}
        />
        <Body onCursor={onCursor}></Body>
        <Work onCursor={onCursor} />
        <About onCursor={onCursor} />
        <Contact onCursor={onCursor} />
        <Footer />
      </ThemeProvider>
    </>
  );
};

export default Home;
