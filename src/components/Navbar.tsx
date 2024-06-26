import React from "react";

export const Navbar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex flex-row lg:justify-around justify-evenly w-2/3 min-w-80 items-center
    md:text-4xl text-xl my-3 bg-white h-16 mt-0 fixed before:w-10 before:bg-white before:rounded-es-full "
    >
      {children}
    </div>
  );
};

export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <a className="text-black flex font-lilita underline">{children}</a>;
};
