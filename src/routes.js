// core components
import Dashboard from "views/admin/Dashboard.js";
import Icons from "views/admin/Icons.js";
import Maps from "views/admin/Maps.js";
import Profile from "views/admin/Profile.js";
import Tables from "views/admin/Tables.js";
import Projects from "views/admin/Projects"
import StaffManagement from "views/admin/StaffManagement"
import UserLoginScreen from "views/admin/UserLoginScreen"
import LightBoxPopUp from "views/admin/LightBoxPopUp"
import TopBars from "views/admin/TopBars"
import {House, AccountTree, People, GroupAdd, Update, Airplay, WebAsset, Remove, Redeem, Tv, Person, Palette, LocationOn, Grain, FormatListBulleted, Dns, FlashOn} from "@material-ui/icons"

var routes = [
  {
    divider: true,
  },
  {
    title: "Main",
  },
  {
    path: "/index",
    name: "Main Dashboard",
    icon: House,
    iconColor: "Primary",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/projects",
    name: "Projects",
    icon: AccountTree,
    iconColor: "WarningLight",
    component: Projects,
    layout: "/admin",
  },
  {
    path: "/staff-management",
    name: "Staff Management",
    icon: People,
    iconColor: "Primary",
    component: StaffManagement,
    layout: "/admin",
  },
  {
    divider: true,
  },
  {
    title: "Global Campaigns",
  },
  {
    path: "/user-login-screens",
    name: "User Login Screens",
    icon: GroupAdd,
    iconColor: "Info",
    component: UserLoginScreen,
    layout: "/admin",
  },
  {
    path: "/update-screen",
    name: "Update Screen(s)",
    icon: Airplay,
    iconColor: "ErrorLight",
    component: Profile,
    layout: "/admin",
  },
  {
    path: "/lightbox-popups",
    name: "LightBox Popups",
    icon: WebAsset,
    iconColor: "Info",
    component: LightBoxPopUp,
    layout: "/admin",
  },
  {
    path: "/top-bars",
    name: "Top Bars/Timers",
    icon: Remove,
    iconColor: "ErrorLight",
    component: TopBars,
    layout: "/admin",
  },
  {
    path: "/recommended-products",
    name: "Recommended Products",
    icon: Redeem,
    iconColor: "Info",
    component: Profile,
    layout: "/admin",
  },
  {
    divider: true,
  },
  {
    title: "Documentation",
  },
  {
    href:
      "https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard?ref=admui-admin-sidebar",
    name: "Getting started",
    icon: FlashOn,
  },
  {
    href:
      "https://www.creative-tim.com/learning-lab/material-ui/colors/argon-dashboard?ref=admui-admin-sidebar",
    name: "Foundation",
    icon: Palette,
  },
  {
    href:
      "https://www.creative-tim.com/learning-lab/material-ui/alerts/argon-dashboard?ref=admui-admin-sidebar",
    name: "Components",
    icon: Dns,
  },
];
export default routes;
// {
  //   href: "#pablo",
  //   name: "Upgrade to pro",
  //   icon: FlashOn,
  //   upgradeToPro: true,
  // },
  // {
  //   collap: true,
  //   path: "/icons",
  //   icon: Grain,
  //   iconColor: "Primary",
  //   component: Icons,
  //   layout: "/admin",
  //   name:"UI",
  //   name_ref:"ui"
  // },
  // {
  //   path: "/index",
  //   name: "Dashboard",
  //   icon: Tv,
  //   iconColor: "Primary",
  //   component: Dashboard,
  //   layout: "/admin",
  //   parentName: "ui"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: Grain,
  //   iconColor: "Primary",
  //   component: Icons,
  //   layout: "/admin",
  //   parentName: "ui"
  // },
   // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: LocationOn,
  //   iconColor: "Warning",
  //   component: Maps,
  //   layout: "/admin",
  // },
  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   icon: Person,
  //   iconColor: "WarningLight",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/tables",
  //   name: "Tables",
  //   icon: FormatListBulleted,
  //   iconColor: "Error",
  //   component: Tables,
  //   layout: "/admin",
  // },