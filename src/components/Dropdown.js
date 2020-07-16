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
  onOptionChange = (event) => {
    this.props.onOptionChange(event);
  };

  render() {
    return (
      <div>
        <div className="ui form">
          <div className="field">
            <div className="ui selection dropdown visible active">
              <i className="dropdown icon"></i>
              <div className="text">Sort By</div>
              <div className="menu visible transition">
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
