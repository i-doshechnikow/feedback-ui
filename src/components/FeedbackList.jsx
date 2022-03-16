import FeedbackItem from "./FeedbackItem";
import { motion } from "framer-motion";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackList() {
  const context = useContext(FeedbackContext);
  const { feedback } = context;
  if (!feedback || feedback.length === 0) {
    return <p>No data</p>;
  }

  return (
    <div className="feedback-list">
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
          <FeedbackItem item={item} />
        </motion.div>
      ))}
    </div>
  );
}

export default FeedbackList;
