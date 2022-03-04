import { useState } from "react";
import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

const App = () => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 8,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio suscipit adipisci est quidem ea delectus praesentium similique aperiam facere?",
    },
    {
      id: 2,
      rating: 7,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio suscipit adipisci est quidem ea delectus praesentium similique aperiam facere?",
    },
    {
      id: 3,
      rating: 7,
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia odio suscipit adipisci est quidem ea delectus praesentium similique aperiam facere?",
    },
  ]);
  return (
    <>
      <Header text="feedback ui" />
      <div className="container">
        <h1>App</h1>
        <FeedbackItem />
      </div>
    </>
  );
};

export default App;
