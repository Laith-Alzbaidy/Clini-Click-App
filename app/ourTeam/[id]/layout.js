import React from "react";
import Icon from "@/src/component/icon/icon";
const Layout = ({ children }) => {
  return (
    <>
      {children}
      <Icon />
    </>
  );
};

export default Layout;
