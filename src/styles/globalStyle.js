import styled from "styled-components";

export const Cursor = styled.div`
  cursor: pointer !important;
  @media (min-width: 1024px) {
    position: fixed;
    top: 40rem;
    left: 40rem;
    width: 32px;
    height: 32px;
    background: #fe5d26;
    border-radius: 100%;
    transform: translate(-50%, -50%);
    transition: all 0.2s ease-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events: none;
    z-index: 999;
    &.pointer {
      border: 4px solid ${(props) => props.theme.orange} !important;
    }
    &.hovered {
      background: transparent !important;
      width: 56px;
      height: 56px;
      border: 4px solid #ea281e;
      border: 4px solid #ea281e;
    }
    &.locked {
      background: transparent !important;
      width: 56px;
      height: 56px;
      border: 4px solid ${(props) => props.theme.text} !important;
      top: ${(props) => props.theme.top} !important;
      left: ${(props) => props.theme.left} !important;
    }
    &.nav-open {
      background: ${(props) => props.theme.orange};
      /* background: #fe5d26; */
    }
    &.nav-open,
    &.locked {
      border: 4px solid ${(props) => props.theme.orange} !important;
    }
  }
`;
