import React, { Component } from "react";
import API from "../utils/API";
import List from "../components/List";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
let allEmployees = [];

class Discover extends Component {
  state = {
    results: [],
    search: ""
  };

  componentDidMount() {
    this.loadEmployees();
  }

  loadEmployees = () => {
    API.getRandomEmployee()
      .then((res) => {
        this.setState({
          results: res.data.results,
        });

        // Creating a copy of the results array using the spread operator
        allEmployees = [...res.data.results]; 

        console.log(allEmployees);
        console.log(this.state.results);
      })
      .catch((err) => console.log(err));
  };

  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let searchEmployeebyFirstName = [...allEmployees].filter(employee => employee.name.first === this.state.search)
    if(searchEmployeebyFirstName) {
    this.setState({results: searchEmployeebyFirstName})
  } alert("There are no employees with this name");
  }


  render() {
    return (
      <div>
        <h1 className="text-center my-4">Meet our best people</h1>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center"></h1>
          <SearchForm
            value={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
        </Container>
        <ul>
          {this.state.results.map(({ picture, name, email }) => (
            <li>
            <List
              picture={picture.thumbnail}
              firstname={name.first}
              lastname={name.last}
              email={email}
            />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Discover;
