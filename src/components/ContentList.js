import React from "react";
import ContentItem from "./ContentItem";

const ContentList = ({ content }) => {
  const renderedList = content.map((cont) => {
    return <ContentItem cont={cont} />;
  });
  return <div className="ui stackable seven column grid">{renderedList}</div>;
};

export default ContentList;
