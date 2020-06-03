import styled from "styled-components";

export const FooterSection = styled.div`
  width: 100vw;
`;
export const Container = styled.div`
  width: 75%;
  margin: 0 auto;
  padding-bottom: 1rem;
  span {
    color: ${(props) => props.theme.text};
    font-size: 1.3rem;
  }
  .symbol {
    &::after {
      content: " </> ";
    }
  }
`;
