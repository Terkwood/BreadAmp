import { FunctionalComponent, h } from "preact";
import { Route, Router, RouterOnChangeArgs } from "preact-router";

import Header from "./header";
import Home from "../routes/home";
import Songs from "../routes/songs";
import NotFoundPage from "../routes/notfound";

import "98.css";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
if ((module as any).hot) {
  // tslint:disable-next-line:no-var-requires
  require("preact/debug");
}

const App: FunctionalComponent = () => {
  let currentUrl: string;
  /** Gets fired when the route changes.
    *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
    *	@param {string} event.url	The newly routed URL
    */
  const handleRoute = (e: RouterOnChangeArgs) => {
    currentUrl = e.url;
  };

  return (
    <div id="app" style={{ width: 300 }} className="window">
      <Header />
      <Router onChange={handleRoute}>
        <Route path="/" component={Home} />
        <Route path="/songs" component={Songs} />
        <NotFoundPage default />
      </Router>
    </div>
  );
};

export default App;
