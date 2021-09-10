import moment from "moment";

const apiKey = "e244ada1553937093a18263c9d2f0169";
const today = moment().format("YYYY-MM-DD");
const lastWeek = moment().subtract(7, "d").format("YYYY-MM-DD");

const getLatestMovies = () => {
    const movies = [];
    fetch(
            `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=${this.props.apiKey}`
        )
        .then((res) => res.json())
        .then((data) => {
            movies.push(data.results)
            return movies,
        });
}

const getPopularMovies = () => {
    const movies = [];
    fetch(
            "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" +
            apiKey
        )
        .then((res) => res.json())
        .then((data) => {
            movies.push(data.results)
            return movies
        });
}

const getMovie = (id) => {
    const movie = []
    fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`
        )
        .then((res) => res.json())
        .then((data) => {
            movie.push(data)
            return movie
        })
}