import React from "react";
import { Link } from "react-scroll";

//framer motion
import { motion, AnimatePresence } from "framer-motion";

//styled components
import {
  Nav,
  NavContainer,
  Flex,
  CloseNav,
  NavHeader,
  NavList,
  NavFooter,
} from "../styles/navigationStyle";

const navRoutes = [
  { id: 1, title: "ABOUT", path: "about" },
  { id: 2, title: "WORK", path: "work" },
  { id: 3, title: "CONTACT", path: "contact" },
];

const NavigationList = ({ toggleMenu, setToggleMenu, onCursor }) => {
  return (
    <>
      <AnimatePresence>
        {toggleMenu && (
          <Nav
            initial={{ x: "-100%" }}
            animate={{ x: toggleMenu ? 0 : "-100%" }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] }}
          >
            <NavContainer>
              <NavHeader>
                <Flex>
                  <Link
                    onMouseEnter={() => onCursor("pointer")}
                    onMouseLeave={onCursor}
                    to="home"
                    onClick={() => setToggleMenu(!toggleMenu)}
                  >
                    ABHISHEK
                  </Link>
                  <CloseNav
                    onClick={() => setToggleMenu(!toggleMenu)}
                    onMouseEnter={() => onCursor("locked")}
                    onMouseLeave={onCursor}
                  >
                    <button>
                      <span></span>
                      <span></span>
                    </button>
                  </CloseNav>
                </Flex>
              </NavHeader>
              <NavList>
                <ul>
                  {navRoutes.map((route) => (
                    <motion.li
                      key={route.id}
                      onMouseEnter={() => onCursor("pointer")}
                      onMouseLeave={onCursor}
                      whileHover={{
                        scale: 1.2,
                        transition: {
                          duration: 0.5,
                        },
                      }}
                    >
                      <Link
                        className="link"
                        to={route.path}
                        smooth={true}
                        delay={1000}
                        onClick={() => setToggleMenu(!toggleMenu)}
                      >
                        {route.title}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </NavList>
              <NavFooter></NavFooter>
            </NavContainer>
          </Nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationList;
