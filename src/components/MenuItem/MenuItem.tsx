import React from "react";
import { Link } from "react-router-dom";
import { LinkExternal } from "../Link";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  isDocs = false,
  ...props
}) => {
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      { !isDocs ? (     
        <StyledMenuItem as={Link} to={href} $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
        {children}
        </StyledMenuItem>
        ) : (
        <StyledMenuItem as="a" href={href} target="_blank" $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
        {children}
        </StyledMenuItem>
      )}
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
