import PropTypes from "prop-types";

function FeedbackStats(props) {
  const { feedback } = props;

  const averageRating = (
    feedback.reduce((acc, el) => {
      return acc + el.rating;
    }, 0) / feedback.length
  )
    .toFixed(1)
    .replace(/[.,]0$/, "");

  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average rating: {isNaN(averageRating) ? 0 : averageRating}</h4>
    </div>
  );
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array.isRequired,
};

export default FeedbackStats;
