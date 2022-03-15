import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutLinkIcon from "./components/AboutLinkIcon";

import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";
import FeedbackData from "./data/FeedbackData";
import AboutPage from "./pages/AboutPage";

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  const deleteFeedback = (id) => {
    setFeedback(
      feedback.filter((el) => {
        return id !== el.id;
      })
    );
  };

  const addFeedback = (newFeedback) => {
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackProvider>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm handleAdd={addFeedback} />
                  <FeedbackStats feedback={feedback} />
                  <FeedbackList
                    feedback={feedback}
                    handleDelete={deleteFeedback}
                  />
                </>
              }
            />
            <Route path="about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutLinkIcon />
      </BrowserRouter>
    </FeedbackProvider>
  );
};

export default App;
