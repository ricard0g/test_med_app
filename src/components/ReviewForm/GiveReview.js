// Following code has been commented with appropriate comments for your reference.
import React, { useState } from "react";
import "./GiveReview.css";
import Popup from "reactjs-popup";

// Function component for giving reviews
function GiveReviews({
  formData,
  setFormData,
  submittedMessage,
  setSubmittedMessage,
  doctor
}) {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
      setFormData({ ...formData, doctor: doctor ,[e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData.review);
    setFormData({
      name: "",
      review: "",
      rating: 0,
    });
    // Check if all required fields are filled before submission
    if (formData.name && formData.review && formData.rating > 0) {
      setShowWarning(false);
    } else {
      setShowWarning(true);
    }
  };

  return (
    <div>
      {!showForm ? (
        // Display button to open the form
        <button className="click-button" onClick={handleButtonClick}>
          Click Here
        </button>
      ) : (
        // Display form for giving feedback
        <Popup
          contentStyle={{
            backgroundColor: "#FFFFFE",
            padding: "2vw",
            borderRadius: "10px",
          }}
          trigger={
            <button className="click-button" onClick={handleButtonClick}>
              Click Here
            </button>
          }
          modal
          open={showForm}
          onClose={() => setShowForm(false)}
        >
          <form onSubmit={handleSubmit}>
            <h2>Give Your Feedback</h2>
            {/* Display warning message if not all fields are filled */}
            {showWarning && (
              <p className="warning">Please fill out all fields.</p>
            )}
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="review">Review:</label>
              <textarea
                id="review"
                name="review"
                value={formData.review}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="rating">Rating:</label>
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                onChange={(e) =>
                  setFormData({ ...formData, rating: e.target.value })
                }
              />
              <span>{formData.rating}</span>
            </div>
            {/* Submit button for form submission */}
            <button type="submit">Submit</button>
          </form>
        </Popup>
      )}
    </div>
  );
}

export default GiveReviews;
