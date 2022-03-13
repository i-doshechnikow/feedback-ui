import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

function FeedbackList(props) {
  const { feedback, handleDelete } = props;
  if (!feedback || feedback.length === 0) {
    return <p>No data</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item, id) => (
        <FeedbackItem key={id} item={item} handleDelete={handleDelete} />
      ))}
    </div>
  );
}

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
