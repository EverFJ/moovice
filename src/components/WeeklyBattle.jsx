import React from "react";
import Card from "./Card";
import moment from "moment";

const today = moment().format("YYYY-MM-DD");
const lastWeek = moment().subtract(7, "d").format("YYYY-MM-DD");

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      currentBattle: 0,
      favorites: [],
    };
  }

  componentDidMount() {
    fetch(
      `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=${this.props.apiKey}`
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          movies: data.results,
        })
      );
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
        <h1>WeeklyBattle</h1>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-evenly mt-4">
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
