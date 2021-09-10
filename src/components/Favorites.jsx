import React from "react";

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      favIDs: this.getStorage(),
    };
  }
  getStorage = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites"));
    console.log("getStorage favorites : ", favorites);
    return favorites;
  };

  render() {
    return (
      <>
        <h1>Favorites</h1>
      </>
    );
  }
}
