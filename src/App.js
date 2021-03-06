import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutLinkIcon from "./components/AboutLinkIcon";

import FeedbackForm from "./components/FeedbackForm";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import Header from "./components/Header";
import { FeedbackProvider } from "./context/FeedbackContext";
import AboutPage from "./pages/AboutPage";

const App = () => {
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
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
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
