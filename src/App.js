import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";
import FeedbackData from "./data/FeedbackData";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  return (
    <>
      <Header text="feedback ui" />
      <div className="container">
        <h1>App</h1>
        {feedback.map((el) => (
          <FeedbackItem />
        ))}
      </div>
    </>
  );
};

export default App;
