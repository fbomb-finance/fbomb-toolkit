import React from "react";
import styled, { keyframes } from "styled-components";
import BombIcon from "./BombIcon";
import WavesIcon from "./WavesIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(WavesIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingPanIcon = styled(BombIcon)`
  transform: translate3d(0, 0, 0);
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      <RotatingPancakeIcon width={`${size}px`} />
      <FloatingPanIcon width={`${size}px`} />
    </Container>
  );
};

export default Spinner;
