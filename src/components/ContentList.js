import React from "react";
import ContentItem from "./ContentItem";

const ContentList = ({ content }) => {
  const renderedList = content.map((cont) => {
    return <ContentItem key={cont.title} cont={cont} />;
  });
  return (
    <div className="ui container">
      <div className="ui stackable seven column grid">{renderedList}</div>;
    </div>
  );
};

export default ContentList;
