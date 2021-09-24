// core components
import Dashboard from "views/admin/Dashboard.js";
import Icons from "views/admin/Icons.js";
import Maps from "views/admin/Maps.js";
import Profile from "views/admin/Profile.js";
import Tables from "views/admin/Tables.js";
import Requests from "views/admin/Requests"
import Fans from "views/admin/Fans"
import Creators from "views/admin/Creators"
import UserLoginScreen from "views/admin/UserLoginScreen"
import LightBoxPopUp from "views/admin/LightBoxPopUp"
import TopBars from "views/admin/TopBars"
import {House, AccountTree, People, GroupAdd, Update, 
  Airplay, WebAsset, Remove, Redeem, Tv, Person, Palette, 
  LocationOn, Grain, FormatListBulleted, Dns, FlashOn,
} from "@material-ui/icons"
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';

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
    path: "/request",
    name: "Become a creator",
    icon: AccountTree,
    iconColor: "WarningLight",
    component: Requests,
    layout: "/admin",
  },
  {
    path: "/fans",
    name: "Fans",
    icon: People,
    iconColor: "Info",
    component: Fans,
    layout: "/admin",
  },
  {
    path: "/creators",
    name: "Creators",
    icon: PeopleOutlineIcon,
    iconColor: "Error",
    component: Creators,
    layout: "/admin",
  },
  // {
  //   divider: true,
  // },
  // {
  //   title: "Global Campaigns",
  // },
  // {
  //   path: "/user-login-screens",
  //   name: "User Login Screens",
  //   icon: GroupAdd,
  //   iconColor: "Info",
  //   component: UserLoginScreen,
  //   layout: "/admin",
  // },
  // {
  //   path: "/update-screen",
  //   name: "Update Screen(s)",
  //   icon: Airplay,
  //   iconColor: "ErrorLight",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   path: "/lightbox-popups",
  //   name: "LightBox Popups",
  //   icon: WebAsset,
  //   iconColor: "Info",
  //   component: LightBoxPopUp,
  //   layout: "/admin",
  // },
  // {
  //   path: "/top-bars",
  //   name: "Top Bars/Timers",
  //   icon: Remove,
  //   iconColor: "ErrorLight",
  //   component: TopBars,
  //   layout: "/admin",
  // },
  // {
  //   path: "/recommended-products",
  //   name: "Recommended Products",
  //   icon: Redeem,
  //   iconColor: "Info",
  //   component: Profile,
  //   layout: "/admin",
  // },
  // {
  //   divider: true,
  // },
  // {
  //   title: "Documentation",
  // },
  // {
  //   href:
  //     "https://www.creative-tim.com/learning-lab/material-ui/overview/argon-dashboard?ref=admui-admin-sidebar",
  //   name: "Getting started",
  //   icon: FlashOn,
  // },
  // {
  //   href:
  //     "https://www.creative-tim.com/learning-lab/material-ui/colors/argon-dashboard?ref=admui-admin-sidebar",
  //   name: "Foundation",
  //   icon: Palette,
  // },
  // {
  //   href:
  //     "https://www.creative-tim.com/learning-lab/material-ui/alerts/argon-dashboard?ref=admui-admin-sidebar",
  //   name: "Components",
  //   icon: Dns,
  // },
];
export default routes;