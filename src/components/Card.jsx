import React from "react";

export default class Card extends React.Component {
  render() {
    const { image, title, description, releaseDate, onClick } = this.props;
    return (
      <>
        <div
          className="card m-2"
          style={{ width: "18rem" }}
          onClick={onClick ? onClick : ""}
        >
          <img
            className="card-img-top"
            src={`http://image.tmdb.org/t/p/w185/${image}`}
            alt={`${title} poster`}
          />
          <div className="card-body">
            <h5 className="card-title mt-1">{title}</h5>
            <p className="card-text mt-1">{description}</p>
          </div>
          <footer className="blockquote-footer mt-2">
            Released in {releaseDate}
          </footer>
        </div>
      </>
    );
  }
}
