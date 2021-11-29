import React, { useState, useEffect, useRef } from "react";
import styled, { DefaultTheme } from "styled-components";
import throttle from "lodash/throttle";
import Overlay from "../../components/Overlay/Overlay";
import { useMatchBreakpoints } from "../../hooks";
import Logo from "./components/Logo";
import UserBlock from "./components/UserBlock";
import { NavProps } from "./types";
// import Avatar from "./components/Avatar";
import { MENU_HEIGHT, MIN_MENU_HEIGHT } from "./config";
import { FarmIcon, HomeIcon, TradeIcon, WorkshopIcon } from "./icons";
import NavTopLinks from "./components/NavTopLinks";
import { Flex, SvgProps } from "../..";
import ActionButton from "./components/ActionButton";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { Link, useLocation } from "react-router-dom";
import useBombMenu from "./components/BombMenu";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledTopNav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  transition: top 0.2s;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  background-color: ${({ theme }) => theme.isDark ? theme.colors.backgroundAlt : theme.colors.background};
  z-index: 20;
  transform: translate3d(0, 0, 0);
  box-shadow: ${({scrolled, theme}) => scrolled ? `1px 0 0 2px ${theme.colors.border}` : "none"};
  transition: 0.2s box-shadow;
`;

const StyledBottomNav = styled.div`
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  bottom: 0;
  width: 100%;
  height: 48px;
  background-color: ${({ theme }) => theme.nav.background};
  left: 0;
  box-shadow: 0 0 0 2px ${({theme}) => theme.colors.border};
  z-index: 1;
`

const BodyWrapper = styled.div<{ isMobile: boolean }>`
  position: relative;
  display: flex;
  padding-bottom: ${({isMobile}) => isMobile ? "54px" : "0"};
`;

const Inner = styled.div<{ isPushed: boolean;}>`
  flex-grow: 1;
  margin-top: ${MENU_HEIGHT}px;
  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate3d(0, 0, 0);
  max-width: 100%;
`;

const MobileOnlyOverlay = styled(Overlay)`
  position: fixed;
  height: 100%;

  ${({ theme }) => theme.mediaQueries.nav} {
    display: none;
  }
`;

const StyledIconLink = styled(Link)`
  display: flex;

  svg {
    box-sizing: initial;
    padding: 0 12px;
  }
`

const NavEntry: React.FC<{href: string, icon: React.FC<SvgProps>}> = ({href, icon}) => {
  const Icon = icon;
  return (
    <StyledIconLink to={href}>
      <Icon width="24px" />
    </StyledIconLink>
  )
}

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
  const refPrevOffset = useRef(window.pageYOffset);
  const [menuHeight, setMenuHeight] = useState(MENU_HEIGHT);
  const {
    bombMenuRef,
    bombMenu,
    bombMenuVisible
  } = useBombMenu({toggleTheme, links});
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentOffset = window.pageYOffset;
      setMenuHeight(currentOffset > MENU_HEIGHT - MIN_MENU_HEIGHT ? MIN_MENU_HEIGHT : MENU_HEIGHT - currentOffset)
      
      refPrevOffset.current = currentOffset;
    };
    const throttledHandleScroll = throttle(handleScroll, 20);

    window.addEventListener("scroll", throttledHandleScroll);
    return () => {
      window.removeEventListener("scroll", throttledHandleScroll);
    };
  }, []);

  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
      <StyledTopNav scrolled={menuHeight === MIN_MENU_HEIGHT} style={{
        height: `${menuHeight}px`
      }}>
        <Logo
          isDark={isDark}
          href={homeLink?.href ?? "/"}
          text={links.find(link => link.href === location.pathname || link?.items?.some(item => item.href === location.pathname))?.bombLabel ?? ''}
        />
        {!!login && !!logout ? (
          <Flex alignItems="center">
            {!isMobile && (
              <NavTopLinks links={links}/>
            )}
            <UserBlock account={account} login={login} logout={logout} />
            {!isMobile && <div style={{margin: "0 8px 0 12px"}}><ThemeSwitcher isDark={isDark} toggleTheme={toggleTheme}/></div>}
            {/* profile && <Avatar profile={profile} /> */}
          </Flex>
        ) : <Flex/>}
      </StyledTopNav>
      {isMobile && (
        <StyledBottomNav>
          <NavEntry icon={HomeIcon} href="/home"/>
          <NavEntry icon={TradeIcon} href="/swap"/>
          <ActionButton ref={bombMenuRef} />
          {bombMenuVisible && bombMenu}
          <NavEntry icon={FarmIcon} href="/farm"/>
          <NavEntry icon={WorkshopIcon} href="/stake"/>
        </StyledBottomNav>
      )}
      
      <BodyWrapper isMobile={isMobile}>
        <Inner isPushed={false}>
          {children}
        </Inner>
      </BodyWrapper>      
    </Wrapper>
  );
};

export default Menu;
