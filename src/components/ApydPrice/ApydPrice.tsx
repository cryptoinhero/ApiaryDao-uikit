import React from "react";
import styled from "styled-components";
import { LogoIcon } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  apydPriceUsd?: number;
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

const ApydPrice: React.FC<Props> = ({ apydPriceUsd, color = "textSubtle" }) => {
  return apydPriceUsd ? (
    <PriceLink
      href="https://pancakeswap.finance/swap?outputCurrency=0xc5310dc104473f5e0dd025f1862bb697b3912296"
      target="_blank"
    >
      <LogoIcon width="28px" mr="8px" />
      <Text color={color} bold>{`$${apydPriceUsd.toFixed(3)}`}</Text>
    </PriceLink>
  ) : (
    <Skeleton width={80} height={28} />
  );
};

export default React.memo(ApydPrice);
