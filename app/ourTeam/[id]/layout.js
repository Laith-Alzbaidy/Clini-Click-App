import React from "react";
import Icon from "@/src/component/icon/icon";
const Layout = ({ children }) => {
  return (
    <>
      <div className="container1">
        {children}
        <Icon />
      </div>
    </>
  );
};

export default Layout;
