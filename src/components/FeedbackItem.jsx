import { useState } from "react";

function FeedbackItem(props) {
  const { item } = props;

  return (
    <div className="card">
      <div className="num-display">{item.rating}</div>
      <div className="text-display">{item.text}</div>
    </div>
  );
}

export default FeedbackItem;
