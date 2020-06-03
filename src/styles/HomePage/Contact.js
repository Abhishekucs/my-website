import styled, { css } from "styled-components";

export const ContactSection = styled.div`
  width: 100vw;
`;
export const Wrapper = styled.div`
  width: 75%;
  margin: 0 auto;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Title = styled.div`
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

export const Info = styled.div`
  flex: 1;
  span {
    font-weight: 700;
    font-size: 3rem;
    color: ${(props) => props.theme.text};
  }
`;
export const Details = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 0;
  width: 50%;
  justify-content: flex-start;
  a {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.orange};
    margin-left: 2rem;
  }
`;
export const Icon = styled.div`
  width: 30px;
  height: 30px;
  svg {
    width: 100%;
    height: 100%;
    path {
      fill: ${(props) => props.theme.text};
    }
  }
`;

export const Button = styled.div`
  width: 70%;
  flex: 1;
  padding: 4rem 0 0 0;
  a {
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${(props) => props.theme.text};
    height: 5rem;
    color: ${(props) => props.theme.background};
  }
  @media (min-width: 1024px) {
    width: 20%;
    a {
      font-weight: 600;
    }
  }
`;
