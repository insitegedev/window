import React from "react";

export const Pagination = ({ length, active }) => {
  return (
    <div className="pagination flex centered">
      {Array.from({ length: length }).map((num, i) => {
        return (
          <button
            className="num"
            style={{
              opacity: active === i + 1 ? "1" : "0.5",
              color: "#334E60",
              margin: " 0 5px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            {i + 1}
          </button>
        );
      })}
    </div>
  );
};
