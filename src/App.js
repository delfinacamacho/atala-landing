import React from "react";
import GlobalStyles from "./globalStyles";
import { Navbar, Hero, Footer } from "./Components";
import Features from "./Sections/Features/Features";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </>
  );
}

export default App;
