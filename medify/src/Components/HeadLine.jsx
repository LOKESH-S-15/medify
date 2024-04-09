import React from "react";

const HeadLine = () => {
  return (
    <div
      style={{
        background: "#2AA7FF",
        width: "100%",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "5px",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "12px", margin: "0" }}>
        {" "}
        The health and well-being of our patients and their health care team
        will always be our priority, so we follow the best practices for
        cleanliness.
      </h1>
    </div>
  );
};

export default HeadLine;
