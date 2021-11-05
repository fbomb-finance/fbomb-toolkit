import { Colors } from "../../theme/types";
import { Login } from "../WalletModal/types";

export interface Language {
  code: string;
  language: string;
}

export interface Profile {
  username?: string;
  image?: string;
  profileLink: string;
  noProfileLink: string;
  showPip?: boolean;
}

export interface PushedProps {
  isOpen: boolean;
  openNav: (isOpen: boolean) => void;
}

export interface NavTheme {
  background: string;
}

export interface LinkStatus {
  text: string;
  color: keyof Colors;
}

export interface MenuSubEntry {
  label: string;
  href: string;
  calloutClass?: string;
  status?: LinkStatus;
}

export interface MenuEntry {
  label: string;
  icon: string;
  items?: MenuSubEntry[];
  href?: string;
  calloutClass?: string;
  initialOpenState?: boolean;
  status?: LinkStatus;
  shortLabel?: string;
  isNew?: boolean;
}

export interface PanelProps {
  isDark: boolean;
  toggleTheme: (isDark: boolean) => void;
  bombPriceUsd?: number;
  links: Array<MenuEntry>;
}

export interface NavProps extends PanelProps {
  account?: string;
  login?: Login;
  profile?: Profile;
  logout?: () => void;
}
