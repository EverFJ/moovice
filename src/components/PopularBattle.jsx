import React from "react";
import Card from "./Card";

export default class PopularBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
    };
  }
  componentDidMount() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" +
        this.props.apiKey
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          movies: data.results,
        })
      );
  }

  handleCardClick = (e) => {};

  render() {
    const { movies, currentBattle } = this.state;
    console.log("movies", this.state.movies);
    // console.log("movies", this.props);

    return (
      <>
        <h1>PopularBattle</h1>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center">
            <Card
              image={movies[currentBattle].poster_path}
              title={movies[currentBattle].title}
              description={movies[currentBattle].overview}
              releaseDate={movies[currentBattle].release_date}
              onClick={this.handleCardClick}
            />
            <Card
              image={movies[currentBattle + 1].poster_path}
              title={movies[currentBattle + 1].title}
              description={movies[currentBattle + 1].overview}
              releaseDate={movies[currentBattle + 1].release_date}
              onClick={this.handleCardClick}
            />
          </div>
        </div>
      </>
    );
  }
}
