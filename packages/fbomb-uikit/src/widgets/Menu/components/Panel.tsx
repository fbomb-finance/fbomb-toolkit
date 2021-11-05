import React from "react";
import styled from "styled-components";
import PanelBody from "./PanelBody";
import PanelFooter from "./PanelFooter";
import { SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "../config";
import { PanelProps, PushedProps } from "../types";

interface Props extends PanelProps, PushedProps {
  showMenu: boolean;
  isMobile: boolean;
}

const StyledPopupPanel = styled.div<{ isOpen: boolean; showMenu: boolean }>`
  position: fixed;
  padding-top: ${({ showMenu }) => (showMenu ? "80px" : 0)};
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.nav.background};
  width: ${({ isOpen }) => (isOpen ? `${SIDEBAR_WIDTH_FULL}px` : 0)};
  height: 100%;
  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  border-right: ${({ isOpen }) => (isOpen ? "2px solid rgba(133, 133, 133, 0.1)" : 0)};
  z-index: 11;
  overflow: ${({ isOpen }) => (isOpen ? "initial" : "hidden")};
  transform: translate3d(0, 0, 0);
  ${({ isOpen }) => !isOpen && "white-space: nowrap;"};

  ${({ theme }) => theme.mediaQueries.nav} {
    border-right: none;
    box-shadow: -6px 1px 6px 9px rgba(0, 0, 0, 20%);
    width: ${({ isOpen }) => `${isOpen ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
  }
`;

const PopupPanel: React.FC<Props> = (props) => {
  const { isOpen, showMenu } = props;
  return (
    <StyledPopupPanel isOpen={isOpen} showMenu={showMenu}>
      <PanelBody {...props} />
      <PanelFooter {...props} />
    </StyledPopupPanel>
  );
};

export default PopupPanel;
