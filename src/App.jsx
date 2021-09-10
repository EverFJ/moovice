import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Weekly from "./components/Weekly";
import WeeklyBattle from "./components/WeeklyBattle";
import Popular from "./components/Popular";
import PopularBattle from "./components/PopularBattle";
import Error404 from "./components/Error404";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";

export default class App extends React.Component {
  render() {
    const apiKey = "e244ada1553937093a18263c9d2f0169";
    const request = "https://api.themoviedb.org/3/movie/550?api_key=";
    return (
      <>
        <BrowserRouter>
          <Navbar />
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
            <Route exact path="/favorites">
              <Favorites apiKey={apiKey} />
            </Route>
            <Route path="*" component={Error404} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
