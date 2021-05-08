import React from "react";

export default function ContentAsideGrid({ reverse, children }) {
  return (
    <div className={reverse ? `aside-content-grid` : `content-aside-grid`}>
      {children}
    </div>
  );
}
