import Hero from "./components/hero";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Nav from "./components/nav";
import { useState } from "react";

export const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <div data-theme={darkTheme ? "dark" : "lofi"}>
      <Nav toggleTheme={toggleTheme} />
      <Hero />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};
