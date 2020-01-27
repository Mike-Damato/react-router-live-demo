import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className='container'>
      <img src="react-router.jpg" alt="react-router logo" />
      <div className="home-links">
        <Link to="/browserrouter">Browser Router</Link>
        <Link to="/switch-route">Switch & Route</Link>
        <Link to="/link">Link & NavLink</Link>
        <Link to="/route-props">Route props</Link>
      </div>
    </div>
  );
}

export default Home;
