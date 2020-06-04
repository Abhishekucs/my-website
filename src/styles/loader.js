import styled, { keyframes } from "styled-components";

export const LoadingAnimation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f4f7ff;
`;

const drawThick = keyframes`
  0% { stroke-dashoffset: 180 }
  100% { stroke-dashoffset: 0 }
`;
const drawDots = keyframes`
  0% { stroke-dashoffset: 60 }
  100% { stroke-dashoffset: 0 }
`;
const drawStatic = keyframes`
  0% { stroke-dashoffset: 8 }
  30% { stroke-dashoffset: 0 }
  100% { stroke-dashoffset: 8 }
`;
const rumble = keyframes`
  0% { transform: translate(-1px, -1px) }
  10% { transform: translate(0, 0) }
  15% { transform: translate(-1px, -1px) }
  35% { transform: translate(1px, 1px) }
  45% { transform: translate(-1px, -1px) }
  55% { transform: translate(1px, 1px) }
  65% { transform: translate(0, 0) }
  80% { transform: translate(1px, 1px) }
  100% { transform: translate(-1px, -1px) }
`;
const rotate3d = keyframes`
  0% { transform: rotate3d(1, -1, 0, 0) }
  30% { transform: rotate3d(1, -1, 0, 0deg) }
  50% { transform: rotate3d(1, -1, 0, 60deg) }
  100% { transform: rotate3d(1, -1, 0, 0) }
`;
const launch = keyframes`
  5% { transform: translate(0, 0) }
  8% { transform: translate(2px, -2px) }
  30% { transform: translate(-60px, 60px) }
  100% { transform: translate(0, 0) }
`;
const slideIn = keyframes`
  0% { transform: translate(-60px, 60px) }
  35% { transform: translate(-60px, 60px) }
  100% { transform: translate(0, 0) }
`;

export const Animation = styled.div`
  .loading {
    max-width: 70px;
    width: 100%;
    .background {
      fill: #102555;
    }
    .rotate {
      animation: ${rotate3d} 4s 1;
      transform-origin: center;
    }

    .rumble {
      animation: ${rumble} 1s infinite (4 / 3) s;
    }

    .arrow {
      animation: ${launch} 4s 1;
      fill: #fff;
    }

    .exhaust {
      animation: ${slideIn} 4s 1;
    }

    .gradient {
      stop {
        stop-color: #ffffff;
        stop-opacity: 0.2;
      }

      stop:last-child {
        stop-opacity: 0;
      }
    }

    .gradientBox {
      fill: url("#gradient");
    }

    .filteredGroup {
      filter: url("#stickyFilter");
    }

    .line {
      animation-iteration-count: infinite;
      stroke: #dde1ee;
      stroke-linecap: round;
    }

    .lineThick {
      animation-name: ${drawThick};
      animation-timing-function: linear;
    }

    .lineDots {
      animation-name: ${drawDots};
      animation-timing-function: linear;
      stroke-dasharray: 0, 30;
      stroke-width: 5.5;
    }

    .lineStatic {
      animation-name: ${drawStatic};
      animation-timing-function: ease;
      stroke-dasharray: 22;
      stroke-width: 8;
    }

    .line1 {
      animation-duration: 1.6s;
      stroke-dasharray: 8, 22, 3, 27, 16, 14;
      stroke-width: 4;
    }

    .line2 {
      animation-duration: 1.3s;
      stroke-dasharray: 18, 12, 10, 20, 3, 27;
      stroke-width: 6;
    }

    .line3 {
      animation-duration: 1.4s;
      stroke-dasharray: 3, 27, 10, 20, 20, 10;
      stroke-width: 4;
    }

    .line4 {
      animation-duration: 0.4s;
    }

    .line5 {
      animation-duration: 0.7s;
    }

    .line6 {
      animation-duration: 0.8s;
    }

    .line7 {
      animation-duration: 0.6s;
    }
  }
`;
