import { createContext, useState } from "react";
import FeedbackData from "../data/FeedbackData";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

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

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  const cancelEdit = () => {
    setFeedbackEdit({ item: {}, edit: false });
  };

  const saveEditFeedback = (item) => {
    setFeedback(
      feedback.map((element) => {
        if (element.id === item.id) {
          return item;
        }
        return element;
      })
    );
    setFeedbackEdit({ item: {}, edit: false });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
        editFeedback,
        feedbackEdit,
        saveEditFeedback,
        cancelEdit,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
