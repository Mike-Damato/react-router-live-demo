import React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import BrowserRouter from "./BrowserRouter";
import LinkNavLink from "./LinkNavLink";
import SwitchRoute from "./SwitchRoute";
import Resources from "./Resources";
import RouteProps from "./RouteProps";
import FavoriteDessert from "./FavoriteDessert";

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/browserrouter" activeClassName="nav-selected">
          Browser Router
        </NavLink>
        <NavLink to="/switch-route" activeClassName="nav-selected">
          Switch & Route
        </NavLink>
        <NavLink to="/link" activeClassName="nav-selected">
          Link & NavLink
        </NavLink>
        <NavLink to="/route-props" activeClassName="nav-selected">
          Route Props
        </NavLink>
        <NavLink to="/resources" activeClassName="nav-selected">
          Resources
        </NavLink>
      </nav>
      
      <Switch>
        <Route path="/browserrouter">
          <BrowserRouter />
        </Route>
        <Route path="/link">
          <LinkNavLink />
        </Route>
        <Route path="/switch-route">
          <SwitchRoute />
        </Route>
        <Route path="/resources">
          <Resources />
        </Route>
        <Route path="/route-props">
          <RouteProps />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
