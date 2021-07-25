import { Colors } from "./types";

export const baseColors = {
  failure: "#ff5050",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#2e49ff",
  success: "#23e05c",
  warning: "#ff9325",
};

export const additionalColors = {
  fantom: "#1969ff",
  overlay: "#343434",
};

export const lightColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "#3055ff",
  background: "#FFFFFF",
  backgroundDisabled: "#E9EAEB",
  backgroundAlt: "#FFFFFF",
  cardBorder: "#E7E3EB",
  contrast: "#1b130c",
  dropdown: "#F6F6F6",
  dropdownDeep: "#EEEEEE",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  inputSecondary: "#d7d7d7",
  tertiary: "#EFF4F5",
  text: "#000000",
  textDisabled: "#BDC2C4",
  textSubtle: "#505050",
  disabled: "#E9EAEB",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E5FDFF 0%, #F3EFFF 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #F3EFFF 0%, #E5FDFF 100%)",
    cardHeader: "linear-gradient(111.68deg, #F2ECF2 0%, #E8F2F6 100%)",
    blue: "linear-gradient(180deg, #A7E8F1 0%, #94E1F2 100%)",
    violet: "linear-gradient(180deg, #E2C9FB 0%, #CDB8FA 100%)",
    violetAlt: "linear-gradient(180deg, #CBD7EF 0%, #9A9FD0 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...additionalColors,
  primary: "#FF8B1D",
  secondary: "#ffb46a",
  background: "#0a0906",
  backgroundDisabled: "#4a4a4a",
  backgroundAlt: "#150f0a",
  cardBorder: "#383241",
  contrast: "#FFFFFF",
  dropdown: "#1E1D20",
  dropdownDeep: "#100C18",
  invertedContrast: "#1b130c",
  input: "#150f0a",
  inputSecondary: "#372b1b",
  primaryDark: "#0098A1",
  tertiary: "#252525",
  text: "#F4EEFF",
  textDisabled: "#a3a3a3",
  textSubtle: "#DDDDDD",
  disabled: "#524B63",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #2a4354 100%)",
    inverseBubblegum: "linear-gradient(139.73deg, #2a4354 0%, #313D5C 100%)",
    cardHeader: "linear-gradient(166.77deg, #4d4032 0%, #574e2c 100%)",
    blue: "linear-gradient(180deg, #00707F 0%, #19778C 100%)",
    violet: "linear-gradient(180deg, #6C4999 0%, #6D4DB2 100%)",
    violetAlt: "linear-gradient(180deg, #434575 0%, #66578D 100%)",
    gold: "linear-gradient(180deg, #FFD800 0%, #FDAB32 100%)",
  },
};
