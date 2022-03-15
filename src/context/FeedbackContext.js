import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 8,
      text: "for context",
    },
  ]);

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id) => {
    setFeedback(
      feedback.filter((el) => {
        return id !== el.id;
      })
    );
  };

  return (
    <FeedbackContext.Provider value={{ feedback, addFeedback, deleteFeedback }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
