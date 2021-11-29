import { MenuEntry } from ".";
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

export const links: MenuEntry[] = [
  {
    label: "Home",
    icon: "HomeIcon",
    href: "/",
  },
  {
    label: "Trade",
    icon: "TradeIcon",
    bombLabel: "swap",
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
    shortLabel: "Farm",
    bombLabel: "swap",
    icon: "FarmIcon",
    href: "/farms",
  },
  {
    label: "Minutes to Midnight",
    shortLabel: "MtM",
    bombLabel: "play",
    icon: "MtmIcon",
    href: "/manhattan",
  },
  {
    label: "The Workshop",
    shortLabel: "Stake",
    bombLabel: "swap",
    icon: "WorkshopIcon",
    href: "/staking",
    isNew: true,
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
      {
        label: "Blog",
        href: "https://medium.com/@fbombcommunity"
      }
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
export const MIN_MENU_HEIGHT = 46;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
