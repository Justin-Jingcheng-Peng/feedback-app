import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";
function RatingSelect({ select }) {
  const [rating, setRating] = useState(10);
  const [selected, setSelected] = useState(10);
  const { addFeedback, feedbackEdit } = useContext(FeedbackContext);
  useEffect(() => {
    setSelected(feedbackEdit.item.rating);
  }, [feedbackEdit]);
  const handleChange = (e) => {
    select(+e.currentTarget.value);
    setSelected(+e.currentTarget.value);
    setRating(+e.currentTarget.value);
  };

  // NOTE: simplified with iteration
  return (
    <ul className="rating">
      <h2>{rating}</h2>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
  );
}

export default RatingSelect;
