import React from "react";
import Card from "./Card";

export default class PopularBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
      favorites: [],
    };
  }
  componentDidMount() {
    // console.log("mount");
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" +
        this.props.apiKey
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data.results);
        this.setState({
          movies: data.results,
        });
      });
  }

  handleCardClick = (id) => {
    if (!this.state.favorites.includes(id)) {
      this.setState({
        favorites: [...this.state.favorites, id],
        currentBattle: this.state.currentBattle + 1,
      });
    }
  };

  render() {
    const { movies, currentBattle, favorites } = this.state;
    console.log("movies", movies);
    console.log("favorites", favorites);

    return (
      <>
        <h1>PopularBattle</h1>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center">
            {movies.length !== 0 && (
              <Card
                image={movies[currentBattle].poster_path}
                title={movies[currentBattle].title}
                description={movies[currentBattle].overview}
                releaseDate={movies[currentBattle].release_date}
                id={movies[currentBattle].id}
                onClick={this.handleCardClick}
              />
            )}
            {movies.length !== 0 && (
              <Card
                image={movies[currentBattle + 1].poster_path}
                title={movies[currentBattle + 1].title}
                description={movies[currentBattle + 1].overview}
                releaseDate={movies[currentBattle + 1].release_date}
                id={movies[currentBattle + 1].id}
                onClick={this.handleCardClick}
              />
            )}
          </div>
        </div>
      </>
    );
  }
}
