import { noop } from "lodash";
import { DropdownMenuItems, DropdownMenuItemType } from "../../components/DropdownMenu/types";
import { MenuItemsType } from "../../components/MenuItems/types";
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

export const links: MenuItemsType[] = [
  {
    label: "Home",
    href: "/",
    icon: "Home",
    items: [
      // {
      //   label: "Exchange",
      //   href: "https://exchange.pancakeswap.finance",
      // },
      // {
      //   label: "Liquidity",
      //   href: "https://exchange.pancakeswap.finance/#/pool",
      // },
    ],
  },
  {
    label: "DAO Pool",
    href: "/",
    icon: "Home",
    items: [],
  },
  {
    label: "Farms",
    href: "/",
    icon: "Home",
    items: [],
  },
  {
    label: "Honeypot",
    href: "/",
    icon: "Home",
    items: [],
  },
  {
    label: "Logo",
    href: "/home",
    icon: "Logo",
    items: [],
  },
  {
    label: "Vaults",
    href: "/",
    icon: "Home",
    items: [],
  },
  {
    label: "BTCB",
    href: "/",
    icon: "Home",
    items: [],
  },
  {
    label: "Docs",
    href: "https://apiarydao.gitbook.io/apiarydao/",
    icon: "Home",
    items: [],
  },
];

export const bottomlinks: MenuItemsType[] = [
  {
    label: "Home",
    href: "/",
    icon: "Home",
    items: [
      // {
      //   label: "Exchange",
      //   href: "https://exchange.pancakeswap.finance",
      // },
      // {
      //   label: "Liquidity",
      //   href: "https://exchange.pancakeswap.finance/#/pool",
      // },
    ],
  },
  {
    label: "Earn",
    href: "/",
    icon: "Earn",
    items: [
      {
        label: "DAO Pool",
        href: "/",
      },
      {
        label: "Farms",
        href: "/",
      },
      {
        label: "Honeypot",
        href: "/",
      },
    ],
  },
  // {
  //   label: "Farms",
  //   href: "/",
  //   icon: "Home",
  //   items: [],
  // },
  // {
  //   label: "Honeypot",
  //   href: "/",
  //   icon: "Home",
  //   items: [],
  // },
  {
    label: "Vaults",
    href: "/",
    icon: "Vault",
    items: [
      {
        label: "Vaults",
        href: "/",
      },
      {
        label: "BTC",
        href: "/",
      },
    ],
  },
 
  {
    label: "Docs",
    href: "https://apiarydao.gitbook.io/apiarydao/",
    icon: "Docs",
    showItemsOnMobile: false,
    items: [],
  },
];

export const userMenulinks: DropdownMenuItems[] = [
  {
    label: "Wallet",
    onClick: noop,
    type: DropdownMenuItemType.BUTTON,
  },
  {
    label: "Transactions",
    type: DropdownMenuItemType.BUTTON,
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Dashboard",
  },
  {
    type: DropdownMenuItemType.BUTTON,
    disabled: true,
    label: "Portfolio",
  },
  {
    label: "Profile",
    href: "/profile",
  },
  {
    type: DropdownMenuItemType.EXTERNAL_LINK,
    href: "https://pancakeswap.finance",
    label: "Link",
  },
  {
    type: DropdownMenuItemType.DIVIDER,
  },
  {
    type: DropdownMenuItemType.BUTTON,
    onClick: noop,
    label: "Disconnect",
  },
];

export const MENU_HEIGHT = 128;
export const MENU_ENTRY_HEIGHT = 48;
export const MOBILE_MENU_HEIGHT = 44;
export const SIDEBAR_WIDTH_FULL = 240;
export const SIDEBAR_WIDTH_REDUCED = 56;
