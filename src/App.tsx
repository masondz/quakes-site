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
      <div className="flex flex-row justify-end">
        {" "}
        {/*puts nav at end*/}
        <Navbar>
          <ListItem>About</ListItem>
          <ListItem>Flavors</ListItem>
          <ListItem>Where to Buy</ListItem>
          <ListItem>Contact</ListItem>
        </Navbar>
      </div>
      <section aria-labelledby="hero-section" className="h-screen">
        <header id="hero-section flex justify-end">
          <h1 className="font-lilita text-7xl justify-end">Quakes</h1>
          <h2 className="right-96 font-lilita text-4xl">Ice Creamery</h2>
        </header>

        <div className="absolute w-96 h-96 rounded-full bg-purple-500 top-80 left-20 "></div>

        <img
          src="/iceCreamConeWCircle.png"
          className="opacity-35a object-center  
          absolute -left-8 bottom-40  border-b-8 divide-x border-dotted border-green-400"
        />
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
