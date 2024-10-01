import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

function AwardCertification() {
  const [accomplishments, setAccomplishments] = useState([
    { title: "Certification", description: "Add details of certifications you have completed", details: null },
  ]);

  const [editingIndex, setEditingIndex] = useState(null); // State to track which item is being edited
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  const [certificationData, setCertificationData] = useState({
    name: "",
    completionID: "",
    url: "",
    validityFrom: { month: "", year: "" },
    validityTo: { month: "", year: "" },
    noExpiry: false,
  });

  const handleAddNewCertificate = () => {
    setCertificationData({
      name: "",
      completionID: "",
      url: "",
      validityFrom: { month: "", year: "" },
      validityTo: { month: "", year: "" },
      noExpiry: false,
    });
    setEditingIndex(accomplishments.length);
    setShowModal(true);
  };

  const handleEditDetails = (index) => {
    setCertificationData(accomplishments[index].details || {
      name: "",
      completionID: "",
      url: "",
      validityFrom: { month: "", year: "" },
      validityTo: { month: "", year: "" },
      noExpiry: false,
    });
    setEditingIndex(index);
    setShowModal(true);
  };

  const handleSaveDetails = () => {
    const updatedAccomplishments = [...accomplishments];
    updatedAccomplishments[editingIndex] = {
      ...updatedAccomplishments[editingIndex],
      details: { ...certificationData },
    };
    setAccomplishments(updatedAccomplishments);
    setShowModal(false);
    setEditingIndex(null);
  };

  const handleDeleteDetails = (index) => {
    const updatedAccomplishments = accomplishments.filter((_, i) => i !== index);
    setAccomplishments(updatedAccomplishments);

    if (updatedAccomplishments.length === 0) {
      // Reset form state if no items are left
      setCertificationData({
        name: "",
        completionID: "",
        url: "",
        validityFrom: { month: "", year: "" },
        validityTo: { month: "", year: "" },
        noExpiry: false,
      });

      // Optionally, add a new empty item
      setAccomplishments([{ title: "Certification", description: "Add details of certifications you have completed", details: null }]);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "noExpiry") {
      setCertificationData({
        ...certificationData,
        [name]: e.target.checked,
      });
    } else if (name.includes("validityFrom") || name.includes("validityTo")) {
      const [field, key] = name.split(".");
      setCertificationData({
        ...certificationData,
        [field]: {
          ...certificationData[field],
          [key]: value,
        },
      });
    } else {
      setCertificationData({
        ...certificationData,
        [name]: value,
      });
    }
  };

  return (
    <div className="container mt-4" style={{ width: "65%" }}>
      <h3>Awards and Certifications</h3>
      <p >Showcase your credentials by adding relevant certifications</p>
      <div className="list-group">
        {accomplishments.map((item, index) => (
          <div key={index} className="list-group-item">
            <div className="d-flex justify-content-between align-items-center ">
              <div style={{ width: '100%' }}>
                <h5>{item.title}</h5>
                <p >{item.description}</p>
                {item.details && (
                  <div>
                    <p><strong>Certification Name:</strong> {item.details.name}</p>
                    <p><strong>Completion ID:</strong> {item.details.completionID}</p>
                    <p><strong>URL:</strong> <a href={item.details.url} target="_blank" rel="noopener noreferrer">{item.details.url}</a></p>
                    <p>
                      <strong>Validity:</strong>{" "}
                      {item.details.noExpiry
                        ? "No Expiry"
                        : `${item.details.validityFrom.month}/${item.details.validityFrom.year} to ${item.details.validityTo.month}/${item.details.validityTo.year}`}
                    </p>
                  </div>
                )}
              </div>
              <div>
                <Button variant="primary" className="me-2 mt-2 mb-4" onClick={() => handleEditDetails(index)}>
                  {item.details ? "Edit Details" : "Add Details"}
                </Button>
                <Button variant="danger" onClick={() => handleDeleteDetails(index)}>
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {accomplishments.some(item => item.details) && (
        <Button variant="success" className="mt-4" onClick={handleAddNewCertificate}>
          Add New Certificate
        </Button>
      )}

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Certification Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Certification Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter certification name"
                value={certificationData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Certification Completion ID</Form.Label>
              <Form.Control
                type="text"
                name="completionID"
                placeholder="Enter completion ID"
                value={certificationData.completionID}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Certification URL</Form.Label>
              <Form.Control
                type="url"
                name="url"
                placeholder="Enter certification URL"
                value={certificationData.url}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Certification Validity</Form.Label>
              <div className="d-flex">
                <Form.Select
                  name="validityFrom.month"
                  value={certificationData.validityFrom.month}
                  onChange={handleChange}
                  className="me-2"
                >
                  <option value="">MM</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                  {/* Add more months here */}
                </Form.Select>
                <Form.Control
                  type="text"
                  name="validityFrom.year"
                  placeholder="YYYY"
                  value={certificationData.validityFrom.year}
                  onChange={handleChange}
                  className="me-2"
                />
                <span className="mx-2">To</span>
                <Form.Select
                  name="validityTo.month"
                  value={certificationData.validityTo.month}
                  onChange={handleChange}
                  className="me-2"
                >
                  <option value="">MM</option>
                  <option value="01">January</option>
                  <option value="02">February</option>
                  <option value="03">March</option>
                  <option value="04">April</option>
                  <option value="05">May</option>
                  <option value="06">June</option>
                  <option value="07">July</option>
                  <option value="08">August</option>
                  <option value="09">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                  {/* Add more months here */}
                </Form.Select>
                <Form.Control
                  type="text"
                  name="validityTo.year"
                  placeholder="YYYY"
                  value={certificationData.validityTo.year}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Check
                type="checkbox"
                label="This certification does not expire"
                name="noExpiry"
                checked={certificationData.noExpiry}
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSaveDetails}>
            Save Details
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AwardCertification;
