import { LinkStatus } from "./types";

export const status = {
  LIVE: <LinkStatus>{
    text: "LIVE",
    color: "failure",
  },
  SOON: <LinkStatus>{
    text: "SOON",
    color: "warning",
  },
  NEW: <LinkStatus>{
    text: "NEW",
    color: "success",
  },
};

export const links = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    items: [
      {
        label: "Exchange",
        href: "https://swap.fbomb.finance",
      },
      {
        label: "Liquidity",
        href: "https://swap.fbomb.finance/#/pool",
      },
    ],
  },
  {
    label: "Bombing Range",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "The Workshop",
    icon: "WorkshopIcon",
    href: "/staking",
  },
  {
    label: "More",
    icon: "MoreIcon",
    items: [
      {
        label: "Voting",
        href: "https://vote.fbomb.finance",
      },
      {
        label: "Github",
        href: "https://github.com/fbomb-finance",
      },
      {
        label: "Docs",
        href: "https://docs.fbomb.finance",
      },
    ],
  },
];

export const socials = [
  {
    label: "Telegram",
    icon: "TelegramIcon",
    href: "https://t.me/operafBomb",
  },
  {
    label: "Twitter",
    icon: "TwitterIcon",
    href: "https://twitter.com/fBombOpera",
  },
];

export const MENU_HEIGHT = 64;
export const MENU_ENTRY_HEIGHT = 48;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
