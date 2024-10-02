"use client";
import React from "react";

const error = ({ error, reset }: { error: any; reset: any }) => {
  return (
    <div>
      <h1>{error.message}</h1>
      <button onClick={() => reset()} className="btn btn-active btn-primary">
        Primary
      </button>
    </div>
  );
};

export default error;
