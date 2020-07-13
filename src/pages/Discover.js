import React, { Component } from "react";
import API from "../utils/API";
import List from "../components/List";



class Discover extends Component {
  state = {
    results: []
  };

  componentDidMount() {
    this.loadEmployees()
  }

  loadEmployees = () => {
    API.getRandomEmployee()
      .then(res => { this.setState({
        results: res.data.results
      })
      console.log(this.state.results);} 
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <h1 className="text-center my-4">Meet our best people</h1>
        <ul>
          {this.state.results.map(({ picture, name, email}) => (
          <List picture={picture.thumbnail} 
            firstname={name.first} 
            lastname={name.last} 
            email={email} />
            ))}
        </ul>
    
      </div>
    );
  }
}

export default Discover;
