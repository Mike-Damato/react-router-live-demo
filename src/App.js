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
        <Route path="/browserrouter" component={BrowserRouter} />
        <Route path="/link" component={LinkNavLink} />
        <Route path="/switch-route" component={SwitchRoute} />
        <Route path="/resources" component={Resources} />
        <Route path="/route-props" component={RouteProps} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
