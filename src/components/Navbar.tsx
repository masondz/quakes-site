import React from "react";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-row lg:justify-around justify-evenly w-2/3 min-w-80
    md:text-4xl text-xl my-3"
    >
      {children}
    </div>
  );
};

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <a className="text-black flex font-lilita underline">{children}</a>;
};
