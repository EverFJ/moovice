import React from "react";
import Card from "./Card";

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favIDs: this.getStorage(),
    };
  }
  componentDidMount() {
    this.state.favIDs.map((elem) => this.getMovie(elem));
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
            {this.state.movies.length !== 0 &&
              this.state.movies.map((elem) => (
                <Card
                  image={elem.poster_path}
                  title={elem.title}
                  description={elem.overview}
                  releaseDate={elem.release_date}
                />
              ))}
          </div>
        </div>
      </>
    );
  }
}
