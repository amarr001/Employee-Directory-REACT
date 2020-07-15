import React from "react";

class SearchResults extends React.Component {
    render() {
        return (
            <div className="row mb-2">
                <div className="col-md-2"><img alt="User" src={this.props.picture}></img></div>
                <div className="col-md-2"><h5>{this.props.firstname}</h5></div>
                <div className="col-md-2"><h5>{this.props.lastname}</h5></div>
                <div className="col-md-2"><p>{this.props.email}</p></div>
            </div>
        )
    }
  }

export default SearchResults;
