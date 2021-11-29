import React from "react";
import darkTheme from "../../../theme/dark";
import lightTheme from "../../../theme/light";
import Svg from "../Svg";
import { SvgProps } from "../types";

interface WordmarkProps extends SvgProps {
  darkMode?: boolean;
}

const Icon: React.FC<WordmarkProps> = (props) => {
  const accentColor = props.darkMode ? darkTheme.colors.primary : lightTheme.colors.primary
  return (
    <Svg viewBox="0 0 786.93 241.64" {...props}>
      <path d="M 63.694,31.847 A 31.847,31.847 0 0 1 31.847,63.694 31.847,31.847 0 0 1 0,31.847 31.847,31.847 0 0 1 31.847,0 31.847,31.847 0 0 1 63.694,31.847 Z" fill={accentColor} />
      <g fill="none" stroke={props.darkMode ? 'white' : 'black'}>
        <g stroke-width="20.19px">
          <path d="m31.847 120.44v-79.785" />
          <path d="m633.55 159.87v-138.54" />
          <path d="m162.82 159.9a71.643 71.643 0 0 1-71.643 71.643 71.643 71.643 0 0 1-71.643-71.643 71.643 71.643 0 0 1 71.643-71.643 71.643 71.643 0 0 1 71.643 71.643z" />
          <path d="m776.83 159.9a71.643 71.643 0 0 1-71.643 71.643 71.643 71.643 0 0 1-71.643-71.643 71.643 71.643 0 0 1 71.643-71.643 71.643 71.643 0 0 1 71.643 71.643z" />
        </g>
        <g stroke-width="20.2px">
          <path d="m338.43 159.9a71.643 71.643 0 0 1-71.643 71.643 71.643 71.643 0 0 1-71.643-71.643 71.643 71.643 0 0 1 71.643-71.643 71.643 71.643 0 0 1 71.643 71.643z" />
          <path d="m483.35 201.44v-56.083c0-31.56 25.584-57.145 57.145-57.145 31.56 0 57.145 25.585 57.145 57.145v86.187" />
          <path d="m369.06 231.54v-86.187c0-31.56 25.585-57.145 57.145-57.145h1e-3c31.56 0 57.145 25.585 57.145 57.145v56.083" />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
