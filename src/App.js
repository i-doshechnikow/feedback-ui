import FeedbackItem from "./components/FeedbackItem";
import Header from "./components/Header";

const App = () => {
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
