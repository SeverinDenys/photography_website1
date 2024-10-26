import React from "react";

export default function PageWithoutUserId() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Centers vertically
      }}
    >
      <h1
        style={{
          padding: "8px 16px",
          backgroundColor: "#f2f2f2",
          color: "#333",
          border: "1px solid #ccc",
          borderRadius: "4px",
          fontSize: "18px",
          fontWeight: "normal",
          textAlign: "center",
        }}
      >
        'This page cannot be accessed without a subdomain.'
      </h1>
    </div>
  );
}
