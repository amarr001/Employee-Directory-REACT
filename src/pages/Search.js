import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from '../components/SearchResults';



class Search extends Component {
  state = {
    search: "",
    results: [],
    error: ""
  };


  handleInputChange = event => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    API.getNames(this.state.search)
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.results);
        }
        this.setState({ results: res.data.results, error: "" });
      })
      .catch(err => this.setState({ error: err.message }));
  };
  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Name!</h1>
          <SearchForm
            value={this.state.search}
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
          />
          <ul>
          {this.state.results.map(({ picture, name, email}) => (
          <SearchResults picture={picture.thumbnail} 
            firstname={name.first} 
            lastname={name.last} 
            email={email} />
            ))}
        </ul>
        </Container>
        </div>
    );
  }
}

export default Search;
