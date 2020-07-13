import React, { Component } from "react";
import API from "../utils/API";


class Discover extends Component {
  state = {
    result: []
  };

  // When the component mounts, load the next dog to be displayed
  componentDidMount() {
    this.loadEmployees()
  }

  loadEmployees = () => {
    API.getRandomEmployee()
      .then(res =>
        this.setState({
          result: res.data.message
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Meet our best people</h1>
       <div>{this.state.result}</div>
    
      </div>
    );
  }
}

export default Discover;
