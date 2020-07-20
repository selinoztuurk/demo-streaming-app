import React from "react";
import ContentItem from "./ContentItem";

const ContentList = ({ content, onClick }) => {
  const renderedList = content.map((cont) => {
    return <ContentItem key={cont.title} cont={cont} onClick={onClick} />;
  });
  return (
    <div
      className="ui container"
      style={{ marginTop: "1rem", marginBottom: "1rem" }}
    >
      <div className="ui stackable seven column grid">{renderedList}</div>
    </div>
  );
};

export default ContentList;
