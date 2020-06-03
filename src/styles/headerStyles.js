import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const HeaderNav = styled(motion.div)`
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  top: 40px;
  z-index: 99;
`;

export const Container = styled.div`
  position: relative;
  right: 0;
  left: 0;
  top: 0;
  width: 75%;
  margin: 0 auto;
  /* padding: 4rem 3rem 0 3rem; */
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;

  ${((props) => props.spacebetween,
  css`
    justify-content: space-between;
  `)}
`;

export const Logo = styled.div`
  a {
    color: ${(props) => props.theme.text};
    font-size: 1.5rem;
    font-weight: 600;
    text-decoration: none;
  }
  a:before {
    content: "<";
  }
  a:after {
    content: " />";
  }
  @media (min-width: 1024px) {
  }
`;

export const Hamburger = styled.div`
  button {
    background: none;
    transform-origin: center;
    border: none;
    outline: none;
    padding: 0;
    span {
      height: 4px;
      width: 30px;
      display: block;
      background: ${(props) => props.theme.text};
      margin: 8px 0;
    }
  }
  @media (min-width: 1024px) {
  }
`;
