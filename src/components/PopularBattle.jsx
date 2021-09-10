import React from "react";
import Card from "./Card";

export default class PopularBattle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
      favorites: JSON.parse(localStorage.getItem("favorites")) || [],
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
      let newFavorites = [...this.state.favorites];
      newFavorites.push(id);
      localStorage.setItem("favorites", JSON.stringify(newFavorites));
      this.setState({
        favorites: newFavorites,
        currentBattle: this.state.currentBattle + 2,
      });
    }
  };

  render() {
    const { movies, currentBattle, favorites } = this.state;
    console.log("movies", movies);
    console.log("favorites", favorites);
    console.log("currentBattle", currentBattle);
    console.log("local storage", localStorage);
    return (
      <>
        <h1>PopularBattle</h1>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center">
            {currentBattle > 18 && <h1>Vous avez parcouru tous les films</h1>}
            {movies.length !== 0 && currentBattle <= 18 && (
              <Card
                image={movies[currentBattle].poster_path}
                title={movies[currentBattle].title}
                description={movies[currentBattle].overview}
                releaseDate={movies[currentBattle].release_date}
                id={movies[currentBattle].id}
                onClick={this.handleCardClick}
              />
            )}
            {movies.length !== 0 && currentBattle <= 18 && (
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
