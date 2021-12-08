import styled from "styled-components";

export const Arrow = styled.div`
  &,
  &::after {
    position: absolute;
    width: 16px;
    height: 16px;
    z-index: -100;
  }

  &::after {
    content: "";
    background: ${({ theme }) => theme.colors.background};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border} inset;
  }

  & {
    height: 11px;
    overflow: hidden;
  }
`;

export const StyledTooltip = styled.div<{$maxWidth?: number}>`
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  max-width: ${({$maxWidth}) => $maxWidth ?? '320'}px;
  z-index: 101;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.border} inset;

  // lord have mercy, but those are really important

  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -8px;
    &::after {
      transform: translate(0, -8px) rotate(45deg) !important;
    }
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -8px;
    &::after {
      transform: translate(0, 3px) rotate(45deg) !important;
    }
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -8px;
    transform: translate(3px, 22px) rotate(90deg) !important;
    &::after {
      transform: translate(0, 3px) rotate(45deg) !important;
    }
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -8px;
    transform: translate(-3px, 24px) rotate(270deg) !important;
    &::after {
      transform: translate(0, 3px) rotate(45deg) !important;
    }
  }
`;
