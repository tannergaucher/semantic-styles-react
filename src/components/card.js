import React from "react";

export default function Card({ heading, text, src }) {
  return (
    <div className="card">
      {src && <img src={src} alt="" />}
      <h3 className="card-heading">{heading}</h3>
      <p className="card-text">{text}</p>
    </div>
  );
}
