import React from "react";

class ContentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.onClick(this);
  };

  render() {
    return (
      <div className="column" onClick={this.onClick}>
        <div className="ui fluid item content-item">
          <div className="ui image">
            <img
              src={this.props.cont.images["Poster Art"].url}
              style={{ backgroundColor: "black" }}
            ></img>
          </div>
          <div className="content">{this.props.cont.title}</div>
        </div>
      </div>
    );
  }
}

export default ContentItem;
