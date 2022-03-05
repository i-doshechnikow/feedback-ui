import { useState } from "react";

function FeedbackItem(props) {
  const {
    item: { rating, text },
  } = props;

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </div>
  );
}

export default FeedbackItem;
