import { response } from "express";
import React from "react";
import { useState, useEffect } from "react";
import "./Feedback.css";

const Feedback = () => {
  console.log("hello Feedback");
  const [feedback, setFeedback] = useState([]);

  useEffect(async () => {
    // make async call
    const data = await axios.get("http://mspiggygraceshopper.onrender.com/api/contact");
    console.log(data.data);
    setFeedback((prev) => {
      return [...data.data];
    })();
  }, []);

  // const response = await fetch("/api/contact");
  // const Feedbackjson = await response.json();
  // console.log("contcat inside feedback", Feedbackjson);

  // setFeedback(Feedbackjson.data);

  return (
    <div className="new">
      {feedback && (
        <>
          <div className="card">
            <h1>Name: {feedback.name}</h1>
            <p>Email: {feedback.email}</p>
            <p>Message: {feedback.message}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default Feedback;
