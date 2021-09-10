import React from "react";
import Card from "./Card";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      page: 20,
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

  handleMoreClick = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&page=" +
        this.state.page +
        "&api_key=" +
        this.props.apiKey
    )
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          movies: data.results,
        })
      );
    let page = this.state.page + 1;
    this.setState({
      page: page,
    });
  };

  render() {
    // console.log("movies", this.state.movies);
    return (
      <>
        <h1>PopularBattle</h1>

        <div className="container">
          <div className="d-flex flex-wrap justify-content-evenly mt-4">
            {this.state.movies.map((elem) => (
              <Card
                image={elem.poster_path}
                title={elem.title}
                description={elem.overview}
                releaseDate={elem.release_date}
              />
            ))}
          </div>
          <button
            className="btn btn-primary m-2"
            onClick={this.handleMoreClick}
          >
            Get more
          </button>
        </div>
      </>
    );
  }
}
