import React from "react";
import Card from "./Card";
import moment from "moment";
import { getLatestMovies } from "../utils/network.js";

const today = moment().format("YYYY-MM-DD");
const lastWeek = moment().subtract(7, "d").format("YYYY-MM-DD");

export default class Popular extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
  }

  // componentDidMount() {
  //   fetch(
  //     `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=${this.props.apiKey}`
  //   )
  //     .then((res) => res.json())
  //     .then((data) =>
  //       this.setState({
  //         movies: data.results,
  //       })
  //     );
  // }

  // componentDidMount() {
  //   const movies = getLatestMovies();
  //   this.setState({
  //     movies: movies,
  //   });
  // }

  render() {
    // console.log("movies", this.state.movies);
    getLatestMovies();
    return (
      <>
        <h1>Weekly</h1>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-evenly mt-4">
            {this.state.movies.map((elem) => (
              <Card
                image={elem.poster_path}
                title={elem.title}
                description={elem.overview}
                releaseDate={elem.release_date}
                onClick={() => {}}
              />
            ))}
          </div>
        </div>
      </>
    );
  }
}
