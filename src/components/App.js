import React from "react";
import SearchBar from "./SearchBar";
import content from "../feed/sample.json";
import initContent from "../feed/init.json";
import ContentList from "./ContentList";
import Dropdown from "./Dropdown";

class App extends React.Component {
  state = {
    contentDisplay: initContent,
    option: "",
    errorMessage: "",
    programType: "",
  };

  onTermSubmit = (term) => {
    const response = content.entries.filter((entry) => {
      return (
        entry.title.toLowerCase().includes(term.toLowerCase()) &&
        entry.programType == this.state.programType
      );
    });
    console.log(response);
    console.log(term);
    this.setState({ contentDisplay: response });
  };

  onTermChange = (term) => {
    if (term.length > 2) {
      const response = content.entries.filter((entry) => {
        return (
          entry.title.toLowerCase().includes(term.toLowerCase()) &&
          entry.programType == this.state.programType
        );
      });
      console.log(response);
      console.log(term);
      this.setState({ contentDisplay: response });
    }
  };

  sortByTitle = (a, b) => {
    var nameA = a.title.toUpperCase(); // ignore upper and lowercase
    var nameB = b.title.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  };

  sortByYear = (a, b) => {
    var yearA = a.releaseYear;
    var yearB = b.releaseYear;
    if (yearA < yearB) {
      return -1;
    }
    if (yearA > yearB) {
      return 1;
    }
    return 0;
  };

  onOptionChange = (option) => {
    if (option === "ya") {
      const response = this.state.contentDisplay.sort(this.sortByYear);
      this.setState({ contentDisplay: response });
    } else if (option === "yd") {
      const response = this.state.contentDisplay
        .sort(this.sortByYear)
        .reverse();
      this.setState({ contentDisplay: response });
    } else if (option === "ta") {
      const response = this.state.contentDisplay.sort(this.sortByTitle);
      this.setState({ contentDisplay: response });
    } else if (option === "td") {
      const response = this.state.contentDisplay
        .sort(this.sortByTitle)
        .reverse();
      this.setState({ contentDisplay: response });
    } else {
      console.log(option);
    }
  };

  onProgramTypeClick = (programType) => {
    console.log(programType.props.cont.title);
    var response;
    if (programType.props.cont.title == "Movies") {
      response = content.entries
        .filter((d) => d.programType == "movie")
        .slice(0, 21);
      this.setState({ programType: "movie" });
    } else if (programType.props.cont.title == "Series") {
      response = content.entries
        .filter((d) => d.programType == "series")
        .slice(0, 21);
      this.setState({ programType: "series" });
    }
    this.setState({ contentDisplay: response });
  };

  renderContent() {
    if (this.state.errorMessage && this.state.contentDisplay.length == 0) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.contentDisplay.length >= 0) {
      return (
        <div className="ui container">
          <SearchBar
            onFormSubmit={this.onTermSubmit}
            onInputChange={this.onTermChange}
          />
          <Dropdown onOptionChange={this.onOptionChange} />
          <ContentList
            content={this.state.contentDisplay}
            onClick={this.onProgramTypeClick}
          />
        </div>
      );
    }
    return <div>Loading...</div>;
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default App;
