import React, { useEffect } from "react";

import {
  AlertDialog,
  AlertDialogLabel,
  AlertDialogDescription,
} from "@reach/alert-dialog";

export default function MyAlertDialog({
  open,
  primary,
  label,
  heading,
  text,
  confirmLabel,
  cancelLabel,
}) {
  const [showDialog, setShowDialog] = React.useState(false);
  const cancelRef = React.useRef();

  useEffect(() => {
    if (open) {
      setShowDialog(open);
    }
  }, [open]);

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);
  return (
    <div>
      <button
        onClick={openDialog}
        className={`btn ${primary && `btn-primary`}`}
      >
        {label}
      </button>
      {showDialog && (
        <AlertDialog leastDestructiveRef={cancelRef}>
          <AlertDialogLabel>
            <h2 className="text--xl">{heading}</h2>
          </AlertDialogLabel>
          <AlertDialogDescription>
            <p>{text}</p>
          </AlertDialogDescription>
          <div className="alert-buttons">
            <button className="btn" onClick={closeDialog}>
              {confirmLabel}
            </button>
            <button
              ref={cancelRef}
              onClick={closeDialog}
              className="btn btn-primary"
            >
              {cancelLabel}
            </button>
          </div>
        </AlertDialog>
      )}
    </div>
  );
}
