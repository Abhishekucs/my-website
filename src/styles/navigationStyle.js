import styled from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  /* background: #fe5d26; */
  background: ${(props) => props.theme.text};
  z-index: 100;
`;

export const NavContainer = styled.div`
  position: relative;
  height: 100%;
  right: 0;
  left: 0;
  top: 0;
  width: 75%;
  margin: 0 auto;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  a {
    color: ${(props) => props.theme.background};
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
`;

export const CloseNav = styled.div`
  button {
    background: none;
    transform-origin: center;
    border: none;
    outline: none;

    span {
      height: 4px;
      width: 30px;
      display: block;
      background: ${(props) => props.theme.background};
      margin: 8px;
    }
  }
`;

export const NavHeader = styled.div`
  position: relative;
  top: 40px;
  height: 0px;
`;

export const NavList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  ul {
    margin: 0;
    padding: 0;
    li {
      list-style: none;
      font-size: 2.5rem;
      font-family: "Poppins", sans-serif;
      font-weight: 700;
      height: 8rem;
      line-height: 8rem;
      .link {
        color: ${(props) => props.theme.background};
        &::after {
          content: ">";
        }
        &::before {
          content: "<";
        }
      }
    }
  }
  @media (min-width: 360px) {
    ul {
      li {
        font-size: 3.5rem;
      }
    }
  }
  @media (min-width: 1024px) {
    ul {
      li {
        height: 15rem;
        font-size: 8rem;
      }
    }
  }
`;

export const NavFooter = styled.div``;
