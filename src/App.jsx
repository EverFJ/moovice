import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import Popular from "./components/Popular";
import PopularBattle from "./components/PopularBattle";
import Error404 from "./components/Error404";

export default class App extends React.Component {
  render() {
    const apiKey = "e244ada1553937093a18263c9d2f0169";
    const request = "https://api.themoviedb.org/3/movie/550?api_key=";
    return (
      <>
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">
              Moovice
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">
                    Home
                    {/* <span className="sr-only">(current)</span> */}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/weekly">
                    Weekly
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/weekly-battle">
                    Weekly Battle
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/popular">
                    Popular
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/popular-battle">
                    Popular Battle
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/weekly" component={Weekly} />
            <Route exact path="/weekly-battle" component={WeeklyBattle} />
            <Route exact path="/popular">
              <Popular apiKey={apiKey} />
            </Route>
            <Route exact path="/popular-battle">
              <PopularBattle apiKey={apiKey} />
            </Route>
            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
