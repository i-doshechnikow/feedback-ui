import { useState } from "react";
import FeedbackList from "./components/FeedbackList";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="feedback ui" />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
