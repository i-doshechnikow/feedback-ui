import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";

function FeedbackList(props) {
  const { feedback, handleDelete } = props;
  if (!feedback || feedback.length === 0) {
    return <p>No data</p>;
  }

  return (
    <div className="feedback-list">
      {/* <AnimatePresence> */}
      {feedback.map((item, id) => (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          key={id}
        >
          <FeedbackItem item={item} handleDelete={handleDelete} />
        </motion.div>
      ))}
      {/* </AnimatePresence> */}
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
