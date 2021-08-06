import React from "react";
import styled from "styled-components";
import { PancakeRoundIcon } from "../../../components/Svg";
import Text from "../../../components/Text/Text";
import Skeleton from "../../../components/Skeleton/Skeleton";

interface Props {
  bombPriceUsd?: number;
}

const PriceLink = styled.a`
  display: flex;
  align-items: center;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const BombPrice: React.FC<Props> = ({ bombPriceUsd }) => {
  return bombPriceUsd ? (
    <PriceLink
      href="https://swap.fbomb.finance/#/swap?outputCurrency=0x8503eb4A136bDBeB323E37Aa6e0FA0C772228378"
      target="_blank"
    >
      <PancakeRoundIcon width="40px" mr="8px" />
      <Text color="textSubtle" bold>{`$${bombPriceUsd.toFixed(4)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(BombPrice);
