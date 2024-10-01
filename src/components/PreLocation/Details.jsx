import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import "../LSP/Details.css"
import SubmitButton from '../Button/SubmitButton';


const Details = () => {
  const [showOtherLocation, setShowOtherLocation] = useState(false);

  const handleLocationChange = (event) => {
    setShowOtherLocation(event.target.value === 'Other');
  };

  return (
    <Container className="container5">
      <Form>
        <Form.Group controlId="preferredShift">
          <Form.Label>Preferred Shift</Form.Label>
          <Form.Control as="select">
            <option>Day</option>
            <option>Night</option>
            <option>Flexible</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="employmentType">
          <Form.Label>Employment Type</Form.Label>
          <Form.Control as="select">
            <option>Full-time</option>
            <option>Part-time</option>
            <option>Contract</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="preferredLocations">
          <Form.Label>Preferred Locations</Form.Label>
          <Form.Control as="select" onChange={handleLocationChange}>
            <option>Delhi</option>
            <option>Mumbai</option>
            <option>Bangalore</option>
            <option>Kolkata</option>
            <option>Chennai</option>
            <option>Hyderabad</option>
            <option>Pune</option>
            <option>Ahmedabad</option>
            <option>Jaipur</option>
            <option>Surat</option>
            <option>Lucknow</option>
            <option>Kanpur</option>
            <option>Nagpur</option>
            <option>Indore</option>
            <option>Patna</option>
            <option>Bhopal</option>
            <option>Chandigarh</option>
            <option>Guwahati</option>
            <option>Coimbatore</option>
            <option>Vadodara</option>
            <option>Agra</option>
            <option>Meerut</option>
            <option>Jodhpur</option>
            <option>Udaipur</option>
            <option>Amritsar</option>
            <option>Rajkot</option>
            <option>Kota</option>
            <option>Ranchi</option>
            <option>Dehradun</option>
            <option>Rourkela</option>
            <option>Jabalpur</option>
            <option>Vijayawada</option>
            <option>Madurai</option>
            <option>Thiruvananthapuram</option>
            <option>Varanasi</option>
            <option>Gurugram</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>

        {showOtherLocation && (
          <Form.Group controlId="otherLocation">
            <Form.Label>Specify Other Location</Form.Label>
            <Form.Control type="text" placeholder="Enter preferred location" />
          </Form.Group>
        )}
        

        <SubmitButton/>
      </Form>
    </Container>
  );
};

export default Details;