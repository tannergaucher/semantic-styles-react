import React, { useState, useEffect } from "react";

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
// hook into semantic styles
import "./dialog.css";

export default function MyDialog({ label, open, primary, children }) {
  const [showDialog, setShowDialog] = useState(false);
  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);

  useEffect(() => {
    if (open) {
      setShowDialog(open);
    }
  }, [open]);

  return (
    <>
      <button
        onClick={openDialog}
        className={`btn ${primary && `btn-primary`}`}
      >
        {label}
      </button>
      <Dialog isOpen={showDialog} onDismiss={closeDialog} aria-label="test">
        <button className="btn btn-primary" onClick={closeDialog}>
          <span aria-hidden>×</span>
        </button>
        <br />
        {children}
      </Dialog>
    </>
  );
}
