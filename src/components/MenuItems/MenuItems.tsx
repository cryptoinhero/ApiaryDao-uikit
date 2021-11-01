import React from "react";
import { Flex } from "../Box";
import isTouchDevice from "../../util/isTouchDevice";
import DropdownMenu from "../DropdownMenu/DropdownMenu";
import MenuItem from "../MenuItem/MenuItem";
import IconComponent from "../Svg/IconComponent";
import { MenuItemsProps } from "./types";

const MenuItems: React.FC<MenuItemsProps> = ({ items = [], activeItem, activeSubItem, ...props }) => {
  return (
    <Flex {...props}>
      {items.map(({ label, items: menuItems = [], href, icon = "" }) => {
        const statusColor = menuItems?.find((menuItem) => menuItem.status !== undefined)?.status?.color;
        const isActive = activeItem === href;
        const isLogo = label === "Logo";
        return (
          <DropdownMenu key={`${label}#${href}#${icon}`} items={menuItems} py={1} activeItem={activeSubItem}>
            <MenuItem
              href={isTouchDevice() && menuItems && menuItems.length > 0 ? "" : href}
              isActive={isActive}
              statusColor={statusColor}
            >
              {isLogo ? (<IconComponent width="60" height="60" iconName={icon} color={isActive ? "secondary" : "textSubtle"} />) : label}
            </MenuItem>
          </DropdownMenu>
        );
      })}
    </Flex>
  );
};

export default MenuItems;
