import { useState } from "react";
import Card from "./shared/Card";

function FeedbackForm() {
  const [text, setText] = useState("");
  return (
    <Card>
      <form>
        <h2>How would you rate</h2>{" "}
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            onChange={(event) => {
              setText(event.target.value);
            }}
            value={text}
          />
          <button type="submit">Send</button>
        </div>
      </form>
    </Card>
  );
}

export default FeedbackForm;
