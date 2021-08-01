import React from "react";
import styled, { keyframes } from "styled-components";
import BombIcon from "../Svg/Icons/Logo";
import { FallingBunniesProps } from "./types";

const bombFall = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, 0);
  }

  99% {
    opacity: 1;
    transform: translate(-50%, 50vh);
  }

  100% {
    opacity: 0;
    transform: translate(-50%, 50vh);
  }
`;

const boom = keyframes`
  0% {
    opacity: 0;
    background-color: #FFFFFF;
  }
  1% {
    opacity: 1;
    background-color: #FFFFFF;
  }
  35% {
    opacity: 1;
    background-color: #fcff36;
  }
  75% {
    opacity: 0.85;
    background-color: #d7762c;
  }
  100% {
    opacity: 0;
    background-color: #884613;
  }
`

const Boom = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  user-select: none;
  pointer-events: none;
  z-index: 99999;

  animation-name: ${boom};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-delay: 0.7s;
  animation-iteration-count: 1;
  animation-play-state: running;
`

const FallingBomb = styled(BombIcon)`
  animation: ${bombFall};
  animation-duration: 0.8s;
  animation-timing-function: linear;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  top: -20px;
  opacity: 0;
`

const FallingBunnies: React.FC<FallingBunniesProps> = ({
  size = 64
}) => {
  return (
    <Boom>
      <FallingBomb width={size} height={size} />
    </Boom>
  )
};

export default FallingBunnies;
