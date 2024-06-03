import React from "react";
import { Fragment } from "react";

export const Navbar = ({ children }) => {
  return (
    <div
      className="flex flex-row lg:justify-around justify-evenly w-2/3 min-w-80
    md:text-4xl text-xl my-3"
    >
      {children}
    </div>
  );
};

export const ListItem = ({ children }) => {
  return <a className="text-black flex font-nerko underline">{children}</a>;
};
