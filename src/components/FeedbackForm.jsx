import { useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FeedbackContext from "../context/FeedbackContext";
import RatingSelect from "./RatingSelect";
import Button from "./shared/Button";
import Card from "./shared/Card";

function FeedbackForm() {
  const context = useContext(FeedbackContext);

  const {
    addFeedback,
    feedbackEdit: { edit, item },
    feedbackEdit,
    saveEditFeedback,
    cancelEdit,
  } = context;

  useEffect(() => {
    if (edit) {
      setBtnDisabled(false);
      setText(item.text);
      setRating(item.rating);
    }
  }, [feedbackEdit]);

  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const handleTextChange = (event) => {
    const eventValue = event.target.value;
    if (eventValue === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (eventValue !== "" && eventValue.trim().length <= 10) {
      setMessage("Text must be at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(eventValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
        id: uuidv4(),
      };

      if (edit) {
        saveEditFeedback({ id: item.id, rating, text });
      } else {
        addFeedback(newFeedback);
      }
      setText("");
      setRating(10);
      setBtnDisabled(true);
    }
  };

  const handleCancel = () => {
    cancelEdit();
    setText("");
    setRating(10);
    setBtnDisabled(true);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate</h2>
        <RatingSelect
          select={(rating) => setRating(rating)}
          selected={rating}
        />
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={handleTextChange}
            value={text}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            {edit ? "Update" : "Send"}
          </Button>
          {edit && (
            <Button
              version="secondary"
              handleClick={() => {
                handleCancel();
              }}
            >
              Cancel
            </Button>
          )}
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
