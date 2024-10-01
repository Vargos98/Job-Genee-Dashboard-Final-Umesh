import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

function BasicDetailsForm() {
  const [formData, setFormData] = useState({
    name: "",
    instituteName: "",
    status: "Fresher",
    location: "India",
    currentLocation: "",
    mobile: "",
    email: "",
    availability: "15 Days or less",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setShowModal(false); // Close the modal after form submission
  };

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{marginLeft:"20px", marginTop:"10px"}}>
        Enter Basic Details
      </Button>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Basic Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
          
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formInstituteName" className="mt-3">
              <Form.Label>Education</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your institution name"
                name="instituteName"
                value={formData.instituteName}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formWorkStatus" className="mt-3">
              <Form.Label>Work status</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="Fresher"
                  name="status"
                  value="Fresher"
                  checked={formData.status === "Fresher"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Experienced"
                  name="status"
                  value="Experienced"
                  checked={formData.status === "Experienced"}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Form.Group controlId="formLocation" className="mt-3">
              <Form.Label>Current location</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="India"
                  name="location"
                  value="India"
                  checked={formData.location === "India"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="Outside India"
                  name="location"
                  value="Outside India"
                  checked={formData.location === "Outside India"}
                  onChange={handleChange}
                />
              </div>
              <Form.Control
                className="mt-2"
                type="text"
                placeholder="Tell us about your current location"
                name="currentLocation"
                value={formData.currentLocation}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formMobile" className="mt-3">
              <Form.Label>Mobile number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your mobile number"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formEmail" className="mt-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="formAvailability" className="mt-3">
              <Form.Label>Availability to join</Form.Label>
              <div>
                <Form.Check
                  inline
                  type="radio"
                  label="15 Days or less"
                  name="availability"
                  value="15 Days or less"
                  checked={formData.availability === "15 Days or less"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="1 Month"
                  name="availability"
                  value="1 Month"
                  checked={formData.availability === "1 Month"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="2 Months"
                  name="availability"
                  value="2 Months"
                  checked={formData.availability === "2 Months"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="3 Months"
                  name="availability"
                  value="3 Months"
                  checked={formData.availability === "3 Months"}
                  onChange={handleChange}
                />
                <Form.Check
                  inline
                  type="radio"
                  label="More than 3 Months"
                  name="availability"
                  value="More than 3 Months"
                  checked={formData.availability === "More than 3 Months"}
                  onChange={handleChange}
                />
              </div>
            </Form.Group>

            <Button variant="primary" type="submit" className="mt-4">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default BasicDetailsForm;
