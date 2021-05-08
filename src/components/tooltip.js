import React from "react";

import Tooltip from "@reach/tooltip";
import "@reach/tooltip/styles.css";

import "./tooltip.css";

export default function TooltipExample() {
  return (
    <div>
      <Tooltip label="Notifications">
        <button style={{ fontSize: 25 }}>
          <span>🔔</span>
        </button>
      </Tooltip>
      <Tooltip label="Settings">
        <button style={{ fontSize: 25 }}>
          <span aria-hidden>⚙️</span>
        </button>
      </Tooltip>
      <div style={{ float: "right" }}>
        <Tooltip
          label="Oh, hi there. I'm a tooltip with probably more text than I  should  have. Yet, nevertheless, I'm here, at your service."
          ariaLabel="3 Notifications"
        >
          <button style={{ fontSize: 25 }}>
            <span>🔔</span>
            <span>3</span>
          </button>
        </Tooltip>
      </div>
    </div>
  );
}
