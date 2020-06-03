import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  /* position: relative;
  top: 0;
  left: 0;
  right: 0; */
  overflow-x: hidden;
  background: none;
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  width: 75%;
  margin: 0 auto;
  position: relative;
  top: 0rem;
  height: 100%;
  left: 0;
  @media (min-width: 1024px) {
    max-width: 75%;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding-top: 10rem;
  box-sizing: border-box;
`;

export const Flex = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const ContentOne = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding-left: 2.5rem;
  /* padding-top: 5rem; */
  @media (min-width: 1024px) {
    padding-left: 5rem;
  }
`;

export const ContentSubOne = styled(motion.h2)`
  font-size: 2.8rem;
  color: #969b9c;
  margin: 0;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  line-height: 1;

  ${(props) =>
    props.primary &&
    css`
      font-size: 4rem;
      font-weight: 700;
      color: ${(props) => props.theme.text};
    `}
  @media (min-width: 375px) {
    font-size: 3rem;
    ${(props) =>
      props.primary &&
      css`
        font-size: 4.5rem;
      `}
  }
  @media (min-width: 1024px) {
    font-size: 6rem;
    ${(props) =>
      props.primary &&
      css`
        font-size: 10rem;
      `}
  }
`;

export const ContentTwo = styled(motion.div)`
  padding-left: 2.5rem;
  /* padding-top: 5rem;
  padding-bottom: 5rem; */
  @media (min-width: 1024px) {
    padding-left: 5rem;
  }
`;

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const ContentSubTwo = styled(motion.h3)`
  font-size: 2rem;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  margin: 0;
  color: ${(props) => props.theme.text};
  span {
    line-height: 1;
    color: #fe5d26;
    font-weight: 700;
    margin: 0;
  }
  #cursor {
    border-left: 0.6rem solid #fe5d26;
    animation: ${blink} 0.7s steps(1) infinite;
  }
  @media (min-width: 375px) {
    font-size: 2.45rem;
  }
  @media (min-width: 1024px) {
    font-size: 5rem;
  }
`;

export const ContentBar = styled.div`
  margin-top: 1rem;
  height: 5px;
  width: 6rem;
  background: #fe5d26;
`;

export const ContentZero = styled.span`
  flex: 0.5;
  color: #969b9c;
  &:after {
    content: ">";
  }
  &:before {
    content: "<";
  }
  font-weight: 400;
  /* padding-bottom: 5rem; */
`;

export const ContentThree = styled.span`
  flex: 0.5;
  color: #969b9c;
  &:after {
    content: ">";
  }
  &:before {
    content: "</";
  }
  font-weight: 400;
  /* padding-bottom: 5rem; */
`;

export const Toggle = styled.div`
  flex: 0.3;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  span {
    height: 16px;
    width: 16px;
    display: inline-block;
    border-radius: 100%;
    background: #fe5d26;
    margin-right: 10px;
  }
`;

export const Line = styled.p`
  font-size: 10px;
  color: #969b9c;
  margin: 4px 0 0 0;
`;

export const Buttons = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
  button {
    background: #1a1a1a;
    outline: none;
    padding: 3rem 2rem;
    color: ${(props) => props.theme.text};
    border: none;
    margin-bottom: 1rem;
  }
  @media (min-width: 1024px) {
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    padding-left: 5rem;
    button {
      padding: 3rem 5rem;
      margin-right: 2rem;
    }
  }
`;
