import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { animated } from "react-spring";

export const WorkSection = styled.div`
  width: 100vw;
  /* position: absolute;
  top: 100vh;
  left: 0; */
  box-sizing: border-box;
`;

export const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  position: relative;
  left: 0;
  top: 0;
`;

export const Content = styled.div`
  /* padding-top: 4rem; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ContentOne = styled.span`
  flex: 0.5;
  color: #969b9c;
  padding: 4rem 0;
  &:after {
    content: ">";
  }
  &:before {
    content: "<";
  }
  font-weight: 400;

  ${(props) =>
    props.last &&
    css`
      &:after {
        content: ">";
      }
      &:before {
        content: "</";
      }
    `}
`;

export const DesignContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Title = styled.span`
  font-size: 4rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: #969b9c;
  @media (min-width: 1024px) {
    font-size: 10rem;
  }
`;

export const DesignBodyContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  @media (min-width: 1024px) {
    /* display: flex;
    justify-content: space-between; */
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 5rem;
    grid-row-gap: 5rem;
  }
`;

export const DesignBody = styled(animated.div)`
  margin: 3rem 0;
  @media (min-width: 1024px) {
    margin: 0;
  }
`;
export const Images = styled.div`
  width: 90%;
  margin: 0 0 0 auto;
  img {
    width: 100%;
  }
  @media (min-width: 1024px) {
    width: 50%;
    margin: 0 auto;
  }
`;
export const Info = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin-top: -10rem;
  margin-left: -3rem;
  span {
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    color: #969b9c;
    margin: 4px 0;
  }
  .bar {
    width: 50%;
    height: 3px;
    background: #969b9c;
  }
  @media (min-width: 1024px) {
    /* margin-top: -15rem; */
    margin-left: -5rem;
    span {
      font-size: 2.5rem;
    }
    .bar {
      height: 5px;
      width: 30%;
    }
  }
`;

export const AppContent = styled.div`
  flex-grow: 1;
  box-sizing: border-box;
  padding-top: 3rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    padding-top: 10rem;
  }
`;

export const AppBody = styled.div`
  flex-grow: 1;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 2rem;
  }
`;

export const Button = styled(motion.div)`
  width: 100%;
  box-sizing: border-box;
  height: 8rem;
  background: ${(props) => props.theme.bg};
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around;
  align-items: flex-start; */

  @media (min-width: 1024px) {
    height: 15rem;
    padding: 1.5rem;
  }
`;

export const ButtonTitle = styled.span`
  color: ${(props) => props.theme.text};
  flex-grow: 1;
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  display: block;
  @media (min-width: 1024px) {
    font-size: 2rem;
  }
`;

export const ButtonHeading = styled.span`
  color: ${(props) => props.theme.text};
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.6rem;
  text-align: center;
  flex-grow: 1;
  display: block;
  margin: 0 auto;
  line-height: 1;
  .break {
    font-size: 1rem;
  }
  @media (min-width: 1024px) {
    font-size: 3rem;
    .break {
      font-size: 1.5rem;
    }
  }
`;

// export const ButtonBody = styled.span`
//   color: ${(props) => props.theme.text};
//   font-family: "Poppins", sans-serif;
//   font-weight: 400;
//   font-size: 1rem;
//   text-align: center;
//   display: block;
//   margin: 0 auto;
//   flex-grow: 1;
//   @media (min-width: 1024px) {
//     font-size: 1.5rem;
//   }
// `;
