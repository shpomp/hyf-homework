import React from "react";

function Border({ children }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Border;
