import '../Skills/Skills.css';
import React, { useState } from 'react';
import { Button, Form, Badge } from 'react-bootstrap';
import SubmitButton from '../Button/SubmitButton';

const SkillsForm = () => {
  const [skills, setSkills] = useState('');
  const [skillsList, setSkillsList] = useState([]);

  const suggestedSkills = [
    'OCR', 'Perl', 'Django', 'Nosql Databases',
    'Relational Databases', 'Debugging Skills',
    'Version Control', 'Postgresql', 'Library', 'DRS'
  ];

  const handleAddSkill = (skill) => {
    if (skill.trim() !== '' && !skillsList.includes(skill)) {
      setSkillsList([...skillsList, skill]);
      setSkills(''); // Clear the input after adding the skill
    }
  };

  const handleRemoveSkill = (skill) => {
    setSkillsList(skillsList.filter(s => s !== skill));
  };

  const handleSubmit = () => {
    // Submit logic here (e.g., send skillsList to a backend or handle it in your app)
    console.log('Submitted skills:', skillsList);
  };

  const handleCancel = () => {
    // Clear the form or handle the cancel action
    setSkillsList([]);
    setSkills('');
  };

  return (
    <div className="container6">
      <h4>Key skills</h4>
      <p>Add skills that best define your expertise, for e.g., Java, Oracle, Python, etc.</p>
      
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Add Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        <Button variant="primary" onClick={() => handleAddSkill(skills)} className="mt-2">
          Add Skill
        </Button>
      </Form.Group>

      <div className="suggested-skills mt-3">
        <p>Or you can select from the suggested set of skills</p>
        <div className="skills-buttons">
          {suggestedSkills.map((skill, index) => (
            <Button
              key={index}
              variant="outline-primary"
              onClick={() => handleAddSkill(skill)}
              className="m-1"
            >
              {skill} +
            </Button>
          ))}
        </div>
      </div>

      {skillsList.length > 0 && (
        <div className="skills-section mt-4">
          <h5>Skills</h5>
          <div className="skills-list mt-2">
            {skillsList.map((skill, index) => (
              <Badge key={index} pill bg="light" text="dark" className="skill-badge">
                {skill} <span className="remove-skill" onClick={() => handleRemoveSkill(skill)}>×</span>
              </Badge>
            ))}
          </div>
        </div>
      )}

      {/* Submit and Cancel Buttons */}
      <SubmitButton/>
    </div>
  );
};

export default SkillsForm;
