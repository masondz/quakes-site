import { useState } from "react";
import { Navbar, ListItem } from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  /* <seciont> needs a <header>, section also needs either:
  "aria-labelledby, aria-label, or title. Header should have an <id>
  for scrolling purposes

  Ex. <section aria-labelledby="my-section">
        <header id="my-section>
          <h2>Welcome</h2>
          <p>We're welcoming you!</P>
        </header>
        <p>Other stuff releated to section</p>"
      </section>

      need about, flavors, where to buy, contact
  " */

  return (
    <div>
      <section
        aria-labelledby="hero-section"
        className="h-screen flex justify-end "
      >
        <header
          id="hero-section"
          className="w-screen flex justify-end bg-purple-900 "
        >
          <div className="h-[56px] bg-white absolute w-full"></div>
          <img
            src="/iceCreamConeWCircle.png"
            className="absolute -left-8 bottom-0 h-screen border-b-[2rem]  divide-x border-dotted border-green-400 shrink-1"
          />
          <div className="z-2 w-content rotate-2 h-screen flex-col pr-4 w-1/2">
            <p className=" rounded-[4rem] h-fit font-lilita text-[14rem] text-green-400 leading-tight mt-10">
              Quakes
            </p>
            <p className="right-96  font-lilita leading-none text-[6rem] text-green-400 rounded-lg">
              Ice Creamery
            </p>
            <p className="font-lilita text-[2.5rem] text-green-400 leading-loose mt-24 w-[90%] -rotate-2">Quakes Ice Creamery serves <span className="text-white">frozen custard</span> and other treats on the Mississippi Coast and beyond.</p>
          </div>
          <div className="flex flex-row justify-end fixed z-100 h-16 ">
            {" "}
            {/*puts nav at end*/}
            <Navbar>
              <ListItem>About</ListItem>
              <ListItem>Flavors</ListItem>
              <ListItem>Where to Buy</ListItem>
              <ListItem>Contact</ListItem>
            </Navbar>
          </div>
        </header>
        {/* <div className="absolute w-96 h-96 rounded-full bg-purple-500 top-80 left-20 "></div> */}
      </section>
      {/* <section className="border-2 border-purple-500">Our Flavors</section>
      <section className="border-2 border-purple-500">Where to find us</section>
      <section className="border-2 border-purple-500">Our Story</section>
      <section className="border-2 border-purple-500">Contact Us!</section>
      <footer className="border-2 border-purple-500">legalese</footer> */}
    </div>
  );
}

export default App;
