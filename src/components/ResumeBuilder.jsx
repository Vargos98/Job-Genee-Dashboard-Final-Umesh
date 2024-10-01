import React from 'react';
import { Button, Card, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ResumeBuilder = () => {
  return (
    <div className='d-flex flex-wrap ' style={{ margin: '10px auto', justifyContent: 'center', gap: '20px' }}>
      {/* Resume Builder Card */}
      <Card className="p-3" style={{ backgroundColor: '#4db2ff', borderRadius: '25px', width: '550px' }}>
        <Card.Body>
          <Row>
            {/* Icon on the left */}
            <Col xs={2} className="d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faFileAlt} size="5x" color="white" />
            </Col>
            {/* Content on the right */}
            <Col xs={10}>
              <Card.Title className="text-white ">Resume Builder</Card.Title>
              <Card.Text className="text-white">
                Build an impressive resume in minutes or download a pre-built resume.
              </Card.Text>
              <div className='d-flex flex-wrap '>
                <Button variant="light" className="m-2 rounded-pill">Upload</Button>
                <Button variant="light" className="m-2 rounded-pill">Download</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Cover Letter Builder Card */}
      <Card className="p-3" style={{ backgroundColor: '#4db2ff', borderRadius: '25px', width: '550px' }}>
        <Card.Body>
          <Row>
            {/* Icon on the left */}
            <Col xs={2} className="d-flex align-items-center justify-content-center">
              <FontAwesomeIcon icon={faEnvelope} size="5x" color="white" />
            </Col>
            {/* Content on the right */}
            <Col xs={10}>
              <Card.Title className="text-white">Cover Letter</Card.Title>
              <Card.Text className="text-white">
                Build an impressive Cover letter in minutes or download a pre-built resume.
              </Card.Text>
              <div className='d-flex flex-wrap '>
                <Button variant="light" className=" m-2 rounded-pill text-xs">Upload</Button>
                <Button variant="light" className="m-2 rounded-pill">Download</Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ResumeBuilder;
