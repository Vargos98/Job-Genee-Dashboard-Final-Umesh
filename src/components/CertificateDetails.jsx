import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
function CertificateDetails({ details, onEdit, onDelete }) {
  if (!details) return null;

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5 className="card-title">{details.name}</h5>
        <p className="card-text"><strong>Completion ID:</strong> {details.completionID}</p>
        <p className="card-text"><strong>URL:</strong> <a href={details.url} target="_blank" rel="noopener noreferrer">{details.url}</a></p>
        <p className="card-text">
          <strong>Validity:</strong> {details.noExpiry ? "No Expiry" : `${details.validityFrom.month}/${details.validityFrom.year} to ${details.validityTo.month}/${details.validityTo.year}`}
        </p>
        <Button variant="primary" className="me-2" onClick={onEdit}>
          Edit Details
        </Button>
        <Button variant="danger" onClick={onDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
}

export default CertificateDetails;
