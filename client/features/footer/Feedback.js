import React from "react";
import contact from "./Contact";
import { useState, useEffect } from "react";
import "../footer/Feedback.css";
import { useNavigate } from "react-router-dom";

const Feedback = () => {
  const navigate = useNavigate();
  // return <div>Refund Page</div>;
  console.log("hello Feedback");

  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/contact");
      const json = await response.json();
      setFeedback(json);
    }

    fetchData();
  }, []);

  console.log("jasonnn", feedback);

  return (
    <>
      {feedback.map((comp) => {
        console.log(comp);

        return (
          <div className="feedback-card">
            <h1>Name: {comp.name}</h1>
            <p>Email: {comp.email}</p>
            <p>Message: {comp.message}</p>
            <button>Delete</button>
            
          </div>
         
        );
      })}
    </>
  );
};
export default Feedback;
