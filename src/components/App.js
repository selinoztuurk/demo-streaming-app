import React from "react";
import SearchBar from "./SearchBar";
import content from "../feed/sample.json";
import ContentList from "./ContentList";

class App extends React.Component {
  state = { content: [], errorMessage: "" };

  onTermSubmit = (term) => {
    const response = content.entries.filter((entry) => {
      return entry.title.toLowerCase().includes(term.toLowerCase());
    });
    console.log(response);
    console.log(term);
    this.setState({ content: response });
  };

  onTermChange = (term) => {
    if (term.length > 2) {
      const response = content.entries.filter((entry) => {
        return entry.title.toLowerCase().includes(term.toLowerCase());
      });
      console.log(response);
      console.log(term);
      this.setState({ content: response });
    }
  };

  renderContent() {
    if (this.state.errorMessage && this.state.content.length == 0) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.content.length >= 0) {
      return (
        <div className="ui container">
          <SearchBar
            onFormSubmit={this.onTermSubmit}
            onInputChange={this.onTermChange}
          />
          <ContentList content={this.state.content} />
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
