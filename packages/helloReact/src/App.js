import React from "react";
import { Switch, Route, Router, Link } from "react-router-dom";

const rootRouter = () => <div>Hello React Route Main!</div>;
const routeA = () => <div>Hello React Route Task!</div>;
const routeB = () => <div>Hello React Route About!</div>;

// window.appName = "App Name";

export default ({ history }) => {
  return (
    <div style={{ border: "3px solid purple", margin: 5, padding: 4 }}>
      React App Works!
      <br />
      <Router history={history}>
        <br />
        <div style={{ display: "flex", gap: 8 }}>
          <Link to="/react">React Main</Link>
          <br />
          <Link to="/react/task">React Task</Link>
          <br />
          <Link to="/react/about">React About</Link>
          <br />
          <a href="/">Move to Vue App!</a>
        </div>
        <br />
        <br />
        <Switch>
          <Route exact path="/react" component={rootRouter} />
          <Route path="/react/task" component={routeA} />
          <Route path="/react/about" component={routeB} />
        </Switch>
      </Router>
    </div>
  );
};
