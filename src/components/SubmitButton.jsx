import React from "react";
import { Button } from "react-bootstrap";

function ButtonSection({ canSubmit, handleSubmit, handleCancel, wordCount }) {
  return (
    <div className="mt-3 d-flex justify-content-end">
      <Button
        variant="primary"
        type="submit"
        className={`me-2 ${canSubmit ? 'animate-submit' : 'disabled-submit'}`}
        disabled={!canSubmit || wordCount > 250}
      >
        <h5>Save</h5>
      </Button>
      <Button
        variant="outline-secondary"
        type="button"
        onClick={handleCancel}
        style={{ border: 'none', background: 'none', color: '#255aed' }}
      >
        <h5>Cancel</h5>
      </Button>
    </div>
  );
}

export default ButtonSection;
