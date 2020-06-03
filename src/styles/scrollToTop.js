import styled from "styled-components";
import { motion } from "framer-motion";

export const Circle = styled(motion.div)`
  position: fixed;
  top: 90vh;
  right: 12.5%;
  background: ${(props) => props.theme.text};
  border-radius: 100%;
  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 998;
  span {
    margin: 0 auto;
    color: ${(props) => props.theme.background};
    font-family: "Poppins", sans-serif;
    font-weight: 700;
  }
`;
