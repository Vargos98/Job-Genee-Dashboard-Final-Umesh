import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import "../Social_Media/Social_Media.css"

function SocialLinksForm() {
  const [linkedin, setLinkedin] = useState('');
  const [github, setGithub] = useState('');

  const isFormValid = linkedin && github;

  return (
    <Container className="container5 mt-4">
      <h2>Social Links</h2>
      <Form>
        <Form.Group controlId="linkedinLink">
          <Form.Label>
            LinkedIn <span className="required-star">*</span>
          </Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter LinkedIn Profile URL"
            value={linkedin}
            onChange={(e) => setLinkedin(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="githubLink" className="mt-3">
          <Form.Label>
            GitHub <span className="required-star">*</span>
          </Form.Label>
          <Form.Control
            type="url"
            placeholder="Enter GitHub Profile URL"
            value={github}
            onChange={(e) => setGithub(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="otherLink" className="mt-3">
          <Form.Label>Other Link</Form.Label>
          <Form.Control type="url" placeholder="Enter any other relatable link" />
        </Form.Group>

        <div className="button-group">
          <Button
            variant="secondary"
            type="button"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={!isFormValid}
            className={!isFormValid ? 'blurry-button' : ''}
          >
            Submit
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default SocialLinksForm;




