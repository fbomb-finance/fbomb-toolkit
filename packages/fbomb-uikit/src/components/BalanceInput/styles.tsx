import styled from "styled-components";
import Box from "../Box/Box";
import Input from "../Input/Input";
import { BalanceInputProps } from "./types";

export const StyledBalanceInput = styled(Box)<{ isWarning: BalanceInputProps["isWarning"] }>`
  border: solid 2px ${({ theme }) => theme.colors.border};
  padding: 8px 16px;
`;

export const StyledInput = styled(Input)`
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  padding-left: 0;
  padding-right: 0;
  text-align: right;
  border-bottom: solid 1px ${({ theme }) => theme.colors.inputSecondary};

  ::placeholder {
    color: ${({ theme }) => theme.colors.textSubtle};
  }

  &:focus:not(:disabled) {
    box-shadow: none;
  }
`;
