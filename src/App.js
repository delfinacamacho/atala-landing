import React from "react";
import GlobalStyles from "./globalStyles";
import { Navbar, Hero, Footer } from "./Components";
import Features from "./Sections/Features";
import Credentials from "./Sections/Credentials";
import Download from "./Sections/Download";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Features />
      <Credentials />
      <Download />
      <Footer />
    </>
  );
}

export default App;
