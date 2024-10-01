import React, { useState } from "react";
import { Form, Row, Col, Alert } from "react-bootstrap";
import "./Summary.css";
import axios from 'axios';
import SubmitButton from './SubmitButton';

function ResumeHeadline() {
  const [headline, setHeadline] = useState("");
  const [error, setError] = useState("");
  const [canSubmit, setCanSubmit] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // State to control form visibility
  const [loading, setLoading] = useState(false);
  
  const handleChange = (event) => {
    const inputText = event.target.value;
    const words = inputText.trim().split(/\s+/);

    if (words.length > 250) {
      setError("You can't enter more than 250 words.");
      setCanSubmit(false);
      return;
    }
  

    setHeadline(inputText);
    setError("");

    if (words.length >= 5) {
      setCanSubmit(true);
    } else {
      setCanSubmit(false);
    }
  };
  const [formData, setFormData] = useState({
    jobTitle: '',
    jobTags: '',
  
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    const wordCount = headline.trim().split(/\s+/).length;

    if (!canSubmit || wordCount > 250) {
      setError("You must write between 5 and 250 words.");
      return;
    }

    console.log("Headline:", headline);
    window.location.reload();
  };

  const handleCancel = () => {
    setHeadline("");
    window.location.href = "/";
  };

  const onClose = () => {
    setIsVisible(false); // Hide the form when the "x" button is clicked
  };

  if (!isVisible) {
    return null; // Return nothing if the form is not visible
  }

  const generateDescription = async () => {
    setLoading(true);
    try {
      const response = await axios.post('https://End-point', {
        title: formData.jobTitle,
        skills: formData.jobTags,
      });
      setFormData({
        ...formData,
        jobDescription: response.data.description,
      });
    } catch (error) {
      console.error('Error fetching job description:', error);
    }
    setLoading(false);
  };

  return (
    <div className="container4" fluid="md"> 
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
            <h2><b>Resume Headline</b></h2>
            <p className="mb-5">
              It is the first thing recruiters notice in your profile. Write a concise headline
              introducing yourself to employers. (Minimum 5 words, Maximum 250 words)
            </p>
            <button
            type='button'
            style={{
              position: 'absolute',
              top: '150px',
              right: '40px',
              border: 'none',
              background: 'transparent',
              color: '#3b82f6',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
            }}
            onClick={generateDescription}
            disabled={loading}
          >
            {loading ? 'Generating...' : 'Write with AI'}
          </button>
            <Form.Group controlId="headline">
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Minimum 5 Words"
                value={headline}
                onChange={handleChange}
                isInvalid={!!error} // Highlight the input box if there's an error
              />
              
              <Form.Text className="text-muted d-flex justify-content-end">
                {250 - headline.trim().split(/\s+/).length} word(s) left
              </Form.Text>
              {error && (
                <Alert variant="danger" className="mt-2">
                  {error}
                </Alert>
              )}
            </Form.Group>
            <div className="modal-close1" onClick={onClose}>x</div>

            <SubmitButton
              canSubmit={canSubmit} 
              handleSubmit={handleSubmit} 
              handleCancel={handleCancel} 
              wordCount={headline.trim().split(/\s+/).length}
            />
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default ResumeHeadline;
