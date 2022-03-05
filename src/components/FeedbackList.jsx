import FeedbackItem from "./FeedbackItem";

function FeedbackList(props) {
  const { feedback } = props;
  if (!feedback || feedback.length === 0) {
    return <p>No data</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item, id) => (
        <FeedbackItem key={id} item={item} />
      ))}
    </div>
  );
}

export default FeedbackList;
