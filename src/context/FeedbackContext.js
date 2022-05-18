import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This is from context 1",
      rating: 10,
    },
    {
      id: 2,
      text: "This is from context 2",
      rating: 10,
    },
    {
      id: 3,
      text: "This is from context 3",
      rating: 10,
    },
  ]);
  //This global state is to track if the app is in "edit" mode;
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });
  //Standard CRUD
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  const deleteFeedback = (id) => {
    if (window.confirm("Are u sure?")) {
      setFeedback(feedback.filter((item) => item.id != id));
    }
  };

  const updateFeedback = (id, updItem) => {
    setFeedback(
      feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
    );
  };
  // set the APP to edit mode;
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
