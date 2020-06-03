import React, { useRef } from "react";
import { Link } from "react-router-dom";

//styled components
import {
  HeaderNav,
  Container,
  Flex,
  Hamburger,
  Logo,
} from "../styles/headerStyles";

//hooks
import useElementPosition from "../hooks/useElementPosition";

const Header = ({
  onCursor,
  setHamburgerPosition,
  setToggleMenu,
  toggleMenu,
}) => {
  const hamburger = useRef(null);
  const position = useElementPosition(hamburger);

  const menuHover = () => {
    onCursor("locked");
    setHamburgerPosition({ x: position.x, y: position.y + 40 });
  };

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -40, opacity: 0 }}
      transition={{
        duration: 1,
        ease: [0.6, 0.05, -0.01, 0.9],
      }}
    >
      <Container>
        <Flex spacebetween>
          <Logo>
            <Link
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={onCursor}
              to="/"
            >
              ABHISHEK
            </Link>
          </Logo>
          <Hamburger
            ref={hamburger}
            onMouseEnter={menuHover}
            onMouseLeave={onCursor}
            onClick={() => {
              setToggleMenu(!toggleMenu);
            }}
          >
            <button>
              <span></span>
              <span></span>
            </button>
          </Hamburger>
        </Flex>
      </Container>
    </HeaderNav>
  );
};

export default Header;
