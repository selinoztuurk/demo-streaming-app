import React from "react";

const sortingOptions = [
  {
    label: "Year (Ascending)",
    value: "ya",
  },
  {
    label: "Year (Descending)",
    value: "yd",
  },
  {
    label: "Title (Ascending)",
    value: "ta",
  },
  {
    label: "Title (Descending)",
    value: "td",
  },
];

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { open: false };
  }
  onOptionChange = (event) => {
    this.props.onOptionChange(event);
  };

  toggle() {
    const currentState = this.state.open;
    this.setState({ open: !currentState });
  }

  active = () => {
    if (this.props.title == "Titles") return "none";
    else return "block";
  };

  render() {
    return (
      <div>
        <div
          className="ui form shadow-lg"
          style={{ display: this.active(), marginTop: "1rem", width: "30%" }}
        >
          <div className="field">
            <div
              onClick={this.toggle}
              className={`ui selection dropdown ${
                this.state.open ? "visible active" : ""
              }`}
            >
              <i className="dropdown icon"></i>
              <div className="text">Sort By</div>
              <div
                className={`menu ${
                  this.state.open ? "visible transition" : ""
                }`}
              >
                <div
                  key={sortingOptions[0].value}
                  className="item"
                  onClick={() => this.onOptionChange(sortingOptions[0].value)}
                >
                  {sortingOptions[0].label}
                </div>
                <div
                  key={sortingOptions[1].value}
                  className="item"
                  onClick={() => this.onOptionChange(sortingOptions[1].value)}
                >
                  {sortingOptions[1].label}
                </div>
                <div
                  key={sortingOptions[2].value}
                  className="item"
                  onClick={() => this.onOptionChange(sortingOptions[2].value)}
                >
                  {sortingOptions[2].label}
                </div>
                <div
                  key={sortingOptions[3].value}
                  className="item"
                  onClick={() => this.onOptionChange(sortingOptions[3].value)}
                >
                  {sortingOptions[3].label}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Dropdown;
