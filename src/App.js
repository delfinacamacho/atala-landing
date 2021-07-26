import React from "react";
import GlobalStyles from "./globalStyles";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, Footer } from "./Components";
import Home  from './Pages/HomePage/Home';

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
