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
      <section
        aria-labelledby="hero-section"
        className="border-2 border-red-400 h-96"
      >
        <header id="hero-section">
          <h1 className="absolute font-lilita text-7xl">Quakes</h1>
          <h2 className="absolute font-lilita text-4xl">Ice Creamery</h2>
          <img
            src="/quakesCone.jpg"
            className="opacity-35a object-center scale-125"
          />
        </header>
      </section>
      <section className="border-2 border-purple-500">Our Flavors</section>
      <section className="border-2 border-purple-500">Where to find us</section>
      <section className="border-2 border-purple-500">Our Story</section>
      <section className="border-2 border-purple-500">Contact Us!</section>
      <footer className="border-2 border-purple-500">legalese</footer>
    </div>
  );
}

export default App;
