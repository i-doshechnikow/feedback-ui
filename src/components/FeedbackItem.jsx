import { useState } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";

function FeedbackItem(props) {
  const {
    item: { rating, text },
  } = props;

  return (
    <Card>
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
