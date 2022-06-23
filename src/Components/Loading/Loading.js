import React from "react";

const Loading = () => {
  return (
    <div>
      <div class="d-flex justify-content-center align-items-center">
        <div
          class="spinner-border"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <div
          class="spinner-grow"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span class="visually-hidden">Loading...</span>
        </div>
        <h2 class="fw-bold">Loading...</h2>
      </div>
    </div>
  );
};

export default Loading;
