import React from "react";
import Card from "./Card";

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
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

  render() {
    // console.log(this.props);
    console.log("movies", this.state.movies);
    return (
      <div className="container">
        <div className="d-flex flex-wrap justify-content-center">
          {this.state.movies.map((elem) => (
            <Card
              image={elem.poster_path}
              title={elem.title}
              description={elem.overview}
              releaseDate={elem.release_date}
            />
          ))}
        </div>
      </div>
    );
  }
}
