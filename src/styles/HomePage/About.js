import styled, { css, keyframes } from "styled-components";

export const AboutSection = styled.div`
  /* position: relative; */
  /* top: 350vh; */
  width: 100vw;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  background: #191919;
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

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`;

export const Code = styled.div`
  flex: 1;
  #cursor {
    border-right: 0.2rem solid white;
    animation: ${blink} 0.7s steps(1) infinite;
  }
`;

export const Line = styled.div`
  display: flex;
  line-height: 1.6;
  .number {
    color: #969b9c;
    margin-right: 1rem;
  }
`;
export const CodeLine = styled.div`
  &:after {
    content: "{";
    position: relative;
    left: 0.5rem;
    color: white;
  }
  .title {
    color: #007bff;
    margin-right: 0.5rem;
  }
  .subtitle {
    color: #20c997;
    &:after {
      content: " ( )";
      color: white;
    }
  }

  ${(props) =>
    props.two &&
    css`
      &:after {
        content: "";
      }
      .title {
        color: #969b9c;
        font-weight: 400;
        &::after {
          content: "";
        }
        &::before {
          content: "//";
        }
      }
    `}

  ${(props) =>
    props.three &&
    css`
      .subtitle {
        color: #007bff;
      }
    `}

  ${(props) =>
    props.four &&
    css`
      &:after {
        content: "";
      }
      .title {
        .Name {
          color: #ffc107;
        }
        .subName {
          color: #fd7e14;
        }
        .equal {
          color: ${(props) => props.theme.text};
        }
      }
    `}

  ${(props) =>
    props.five &&
    css`
      &:after {
        content: "";
      }
      .title {
        .Name {
          color: #ffc107;
        }
        .subName {
          color: #fd7e14;
        }
        .equal {
          color: ${(props) => props.theme.text};
        }
      }
    `}

  ${(props) =>
    props.six &&
    css`
      &:after {
        content: "}";
      }
      .title {
        margin-right: 0;
      }
    `}
  
  ${(props) =>
    props.seven &&
    css`
      .subtitle {
        color: #007bff;
      }
    `}

  ${(props) =>
    props.eight &&
    css`
      &:after {
        content: "";
      }
      .subtitle {
        color: #dc3545;
        &:after {
          content: "";
        }
      }
    `}

  ${(props) =>
    props.nine &&
    css`
      &:after {
        content: "{";
      }
      .title {
        margin-right: 0;
      }
    `}

  ${(props) =>
    props.ten &&
    css`
      &:after {
        content: "";
      }
      .subtitle {
        color: #fd7e14;
        .college {
          color: #ffc107;
        }
        &:after {
          content: "";
        }
      }
    `}

  ${(props) =>
    props.eleven &&
    css`
      &:after {
        content: "";
      }
      .subtitle {
        color: #fd7e14;
        .mainly {
          color: #ffc107;
        }
        &:after {
          content: "";
        }
      }
    `}

  ${(props) =>
    props.twelve &&
    css`
      &:after {
        content: "}";
      }
      .title {
        margin-right: 0;
      }
    `}

  ${(props) =>
    props.thirteen &&
    css`
      &:after {
        content: "}";
      }
      .title {
        margin-right: 0;
      }
    `}
    
  ${(props) =>
    props.fifteen &&
    css`
      &:after {
        content: "[";
      }
      .subtitle {
        color: #dc3545;
        &:after {
          content: "";
        }
      }
    `}

  ${(props) =>
    props.seventeen &&
    css`
      &:after {
        content: "]";
      }
      .title {
        margin-right: 0;
      }
    `}

  ${(props) =>
    props.twentysix &&
    css`
      &:after {
        content: "}";
      }
      .title {
        margin-right: 0;
      }
    `}
  
  ${(props) =>
    props.point &&
    css`
      &:after {
        content: "";
      }
    `}
`;
