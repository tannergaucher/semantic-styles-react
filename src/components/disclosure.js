import React from "react";

export default function Disclosure({ title, text, open = false }) {
  return (
    <details className="details" open={open}>
      <summary className="summary">{title}</summary>
      {text}
    </details>
  );
}
