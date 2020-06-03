import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

//styled components
import { Circle } from "../styles/scrollToTop";

const ScrollToTop = ({ onCursor }) => {
  const [visible, setVisible] = useState(false);
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    const height = window.innerHeight;
    if (position > height) {
      setVisible(!visible);
    } else if (position < height) {
      setVisible(false);
    }
  };
  console.log(visible);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      {visible && (
        <Circle
          onMouseEnter={() => onCursor("pointer")}
          onMouseLeave={onCursor}
        >
          <Link to="home" smooth={true} duration={1000}>
            Top
          </Link>
        </Circle>
      )}
    </>
  );
};

export default ScrollToTop;
