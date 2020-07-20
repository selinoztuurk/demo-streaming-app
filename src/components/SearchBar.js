import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  active = () => {
    if (this.props.title == "Titles") return "none";
    else return "block";
  };

  onInputChange = (event) => {
    this.props.onInputChange(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div
        className="searchbar shadow-lg"
        style={{ display: this.active(), marginTop: "1rem", width: "30%" }}
      >
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
