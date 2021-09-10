import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import { getMovie } from "../utils/network.js";

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favIDs: this.getStorage() || [],
    };
  }
  componentDidMount() {
    this.state.favIDs.forEach((elem) => this.getMovie(elem));
  }

  getStorage = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    return favorites;
  };

  getMovie = (id) => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${this.props.apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        this.setState({ movies: [...this.state.movies, data] });
      });
  };

  render() {
    console.log("this.state.movies", this.state.movies);
    return (
      <>
        <h1>Favorites</h1>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-evenly mt-4">
            {this.state.movies.length !== 0 ? (
              this.state.movies.map((elem) => (
                <Card
                  image={elem.poster_path}
                  title={elem.title}
                  description={elem.overview}
                  releaseDate={elem.release_date}
                />
              ))
            ) : (
              <p>
                You haven't favorited any movie yet ! (Go to{" "}
                <Link to="/weekly-battle">Weekly Battle</Link> or{" "}
                <Link to="/popular-battle">Popular Battle</Link>)
              </p>
            )}
          </div>
        </div>
      </>
    );
  }
}
