// icons
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import React from "react";
import Nav_csr from "./Nav_csr";

// nav data
export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/Pages/AboutMe", icon: <HiUser /> },
  { name: "Projects", path: "/Pages/Projects", icon: <HiRectangleGroup /> },

  {
    name: "Contact",
    path: "/Pages/Contact",
    icon: <HiEnvelope />,
  },
];

const Nav = () => {
  return (
    <nav
      className=" flex flex-col items-centre xl:justify-center
     gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] 
    z-50 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen "
    > 
      <Nav_csr navData={navData} />
    </nav>
  );
};

export default Nav;
