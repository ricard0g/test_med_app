// Following code has been commented with appropriate comments for your reference.
import React, { useState } from "react";
import "./GiveReview.css";
import Popup from "reactjs-popup";

// Function component for giving reviews
function GiveReviews({ doctor, index }) {
  // State variables using useState hook
  const [showForm, setShowForm] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    review: "",
    rating: 0,
  });
  const [submittedMessage, setSubmittedMessage] = useState("");

  // Function to handle button click event
  const handleButtonClick = () => {
    setShowForm(true);
  };

  // Function to handle form input changes
  const handleChange = (e) => {
    // Update the form data based on user input
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedMessage(formData);
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
    <>
      <tr key={index}>
        <td>{index}</td>
        <td>{doctor.name}</td>
        <td>{doctor.speciality}</td>
        <td>
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
        </td>
        <td>
          {submittedMessage.review && (
            <div>
              <p>{submittedMessage.review}</p>
            </div>
          )}
        </td>
      </tr>
    </>
  );
}

export default GiveReviews;
