import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem(props) {
  const {
    item,
    item: { rating, text, id },
  } = props;
  const context = useContext(FeedbackContext);
  const { editFeedback, deleteFeedback } = context;
  return (
    <Card>
      <div className="num-display">{rating}</div>
      <button
        onClick={() => {
          deleteFeedback(id);
        }}
        className="close"
      >
        <FaTimes color="purple" />
      </button>
      <button
        onClick={() => {
          editFeedback(item);
        }}
        className="edit"
      >
        <FaEdit color="purple" />
      </button>
      <div className="text-display">{text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default FeedbackItem;
