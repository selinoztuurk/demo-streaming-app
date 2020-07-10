import React from "react";

const ContentItem = ({ cont }) => {
  return (
    <div className="column">
      <div className="ui fluid item content-item">
        <div className="ui image">
          <img src={cont.images["Poster Art"].url}></img>
        </div>
        <div className="content">{cont.title}</div>
      </div>
    </div>
  );
};

export default ContentItem;
