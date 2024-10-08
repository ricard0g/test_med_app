import React, { useEffect, useState } from "react";
import "./ReviewForm.css";
import GiveReview from "./GiveReview.js";

export default function ReviewForm() {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = async () => {
    try {
      const response = await fetch(
        "https://api.npoint.io/9a5543d36f1460da2f63"
      );

      if (response) {
        const jsonResponse = await response.json();

        setDoctors(
          jsonResponse.map((doctor) => {
            return {
              name: doctor.name,
              speciality: doctor.speciality,
            };
          })
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="reviews-container">
        <h2 className="reviews-title">Reviews</h2>
        <table className="reviews-table">
          <thead>
            <tr>
              <th scope="col">Serial Number</th>
              <th scope="col">Doctor Name</th>
              <th scope="col">Doctor speciality</th>
              <th scope="col">Provide Feedback</th>
              <th scope="col">Review Given</th>
            </tr>
          </thead>
          <tbody>
            {doctors.map((doctor, index) => {
              return (
                <GiveReview
                  doctor={doctor}
                  index={index}
                />
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}
