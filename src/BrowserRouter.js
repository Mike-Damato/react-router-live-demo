import React from "react";

function BrowserRouter() {
  return (
    <div className="container">
      <h1>Browser Router</h1>
      <ul>
        <li>It needs to be the parent of everything.</li>
        <li>
          When the url changes, the Router will make sure the expected component
          is displayed.
        </li>
      </ul>
      <img src="/browserrouter.png" alt="screenshot browser router" />
      <h2>Browser Router or Hash Router?</h2>
      <ul>
        <li>Browser Router uses <a href="https://developer.mozilla.org/en-US/docs/Web/API/History_API" target="_blank" rel="noopener noreferrer">history API</a> whichh is unavailable for legacy browsers.</li>
        <li>Hash Router has no limitation on supporter browser and its use cases are not limited to SPA.</li>
      </ul>
      <h2>Documentation</h2>
      <a
        href="https://reacttraining.com/react-router/web/api/BrowserRouter"
        target="_blank"
        rel="noopener noreferrer"
      >
        React training - Browser Router
      </a>
    </div>
  );
}

export default BrowserRouter;
