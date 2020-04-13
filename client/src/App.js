import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import LandingPage from "./pages/LandingPage.js";
import About from "./pages/About.js";
import NoMatch from "./pages/NoMatch.js";
import Experience from "./pages/Experience";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Wrapper from "./Components/Wrapper";

// FUTURE DEVELOPMENT
// =============================================
// Further integrate Material-UI components
  // https://material-ui.com/
// Get NoMatch page to work
// All pages in Wrapper, page title & subtitile design
// All pages, verify responsive layouts
// Could I combine about & services or experience & services?
// Add in accent colors places

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Wrapper>
            <Route exact path="/about" component={About} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/experience" component={Experience} />
            <Route exact path="/contact" component={Contact} />
          </Wrapper>
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router >
  );

};

export default App;
