import React, { Component } from "react";
import API from "../utils/API";
import Card from "../components/Card";

class Discover extends Component {
  state = {
    picture: ""
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadEmployess()
  }

  loadEmployess = () => {
    API.getRandomEmployee();
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Meet our best people</h1>
        <Card picture={this.state.picture} />
      </div>
    );
  }
}

export default Discover;
