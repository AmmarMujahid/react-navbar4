import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Contact from "./pages/Contact";

const pages = {
  home: <Home />,
  blog: <Blog />,
  about: <About />,
  contact: <Contact />,
};

export default function Route() {
  const [activePage, setActivePage] = useState("home");

  return (
    <div>
      {/* --------- Navbar --------- */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      {/* --------- Pages --------- */}
      <div>{pages[activePage]}</div>
    </div>
  );
}
