import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import PopupPanel from "./components/Panel";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
// import Avatar from "./components/Avatar";
import { MENU_HEIGHT, SIDEBAR_WIDTH_REDUCED, SIDEBAR_WIDTH_FULL } from "./config";
import { FarmIcon, HomeIcon, TradeIcon, WorkshopIcon } from "./icons";
import NavTopLinks from "./components/NavTopLinks";
import { Flex } from "../..";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTopNav = styled.nav<{ showMenu: boolean }>`
  position: fixed;
  top: ${({ showMenu }) => (showMenu ? 0 : `-${MENU_HEIGHT}px`)};
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: ${MENU_HEIGHT}px;
  background-color: ${({ theme }) => theme.nav.background};
  z-index: 20;
  transform: translate3d(0, 0, 0);
  box-shadow: -3px 1px 6px 3px rgba(0, 0, 0, 20%);
`;

const StyledBottomNav = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-around;
  bottom: 0;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.nav.background};
`

const BodyWrapper = styled.div`
  position: relative;
  display: flex;
`;

const Inner = styled.div<{ isPushed: boolean; showMenu: boolean }>`
  flex-grow: 1;
  margin-top: ${({ showMenu }) => (showMenu ? `${MENU_HEIGHT}px` : 0)};
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    margin-left: ${({ isPushed }) => `${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px`};
    max-width: ${({ isPushed }) => `calc(100% - ${isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED}px)`};
  }
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  bombPriceUsd,
  links,
  //  profile,
  children,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isOpen, setOpen] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      // const isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
      // const isTopOfPage = currentOffset === 0;
      // Always show the menu when user reach the top
      setShowMenu(true);
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 200);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledTopNav showMenu={showMenu}>
        <Logo
          withText
          isDark={isDark}
          href={homeLink?.href ?? "/"}
        />
        {!isMobile && (
          <NavTopLinks links={links}/>
        )}
        {!!login && !!logout && (
          <Flex>
            <UserBlock account={account} login={login} logout={logout} />
            {/* profile && <Avatar profile={profile} /> */}
          </Flex>
        )}
        <PopupPanel
          isOpen={isOpen}
          isMobile={isMobile}
          showMenu={showMenu}
          isDark={isDark}
          toggleTheme={toggleTheme}
          bombPriceUsd={bombPriceUsd}
          openNav={setOpen}
          links={links}
        />
      </StyledTopNav>
      <BodyWrapper>
        <Inner isPushed={isOpen} showMenu={showMenu}>
          {children}
        </Inner>
        <MobileOnlyOverlay show={isOpen} onClick={() => setOpen(false)} role="presentation" />
      </BodyWrapper>
      {isMobile && (
        <StyledBottomNav>
          <HomeIcon width="28px"/>
          <TradeIcon width="28px"/>
          <div/>
          <FarmIcon width="28px"/>
          <WorkshopIcon width="28px"/>
        </StyledBottomNav>
      )}
      
    </Wrapper>
  );
};

export default Menu;
