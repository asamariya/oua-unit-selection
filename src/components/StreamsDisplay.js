import React from "react";
import Subject from "./Subject";

const StreamsDisplay = ({ title, opSubjects, reqSubjects }) => {
  return (
    <div className="streams">
      <div className="stream-title py-2">
        <h4>{title}</h4>
      </div>
      {opSubjects.length > 0 && (
        <div className="opSubjects">
          <h5>Optional Subjects:</h5>
          {opSubjects.map((subject, index) => (
            <Subject subject={subject} key={index} />
          ))}
        </div>
      )}
      <div className="reqSubjects">
        <h5>Required Subjects:</h5>
        {reqSubjects.map((subject, index) => (
          <Subject subject={subject} key={index} />
        ))}
      </div>
    </div>
  );
};

export default StreamsDisplay;
