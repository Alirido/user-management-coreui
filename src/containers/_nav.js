import React from "react";
import CIcon from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    // to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "Temporary disabled",
    },
    addLinkClass: "c-disabled",
    disabled: true,
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["User Management"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Users",
    to: "/users",
    icon: "cil-people",
  },
  {
    _tag: "CSidebarNavDivider",
    className: "m-2",
  },
];

export default _nav;
