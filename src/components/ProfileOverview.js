import React, { useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';  // Import Quill styles
import ProfileHeader from "./profileHeader";
import { LanguageSection, LinkSection, SkillSection } from "./LinkSection";
import ResumeBuilder from "./resumeBuilder";
import Coverletter from "./Coverletter";

const initialFormState = {
  profileSummary: "",
  educationDetails: "",
  workExperience: "",
  Certifications: "",
  projects: "",
  awardsAchievements: "",
  personalDetails: "",
  languages: "",
};

const ProfileOverview = () => {
  const [formData, setFormData] = useState(initialFormState);
  const [editMode, setEditMode] = useState(false);
  const [savedData, setSavedData] = useState({ ...initialFormState });

  const handleChange = (name, value) => {
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSave = () => {
    setSavedData(formData);
    setEditMode(false);
  };

  const handleEdit = () => {
    setFormData({ ...savedData });
    setEditMode(true);
  };

  const renderSection = (label, fieldName) => (
    <div className="flex flex-col pb-4 ">
      <label className="font-semibold text-2xl underline underline-offset-4 mb-3">{label}</label>
      {editMode ? (
        <ReactQuill
          value={formData[fieldName]}
          onChange={(content) => handleChange(fieldName, content)}
          className=""
          placeholder={`Enter ${label.toLowerCase()}`}
          style={{ height: '160px', marginBottom: '10px' }}  
        />
      ) : (
        <div dangerouslySetInnerHTML={{ __html: savedData[fieldName] }} />
      )}
      {editMode ? (null): (<div className="w-full h-[2px] bg-zinc-500 mt-3"></div>)}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <ProfileHeader />
          <LinkSection />
          <SkillSection />
          <LanguageSection />
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <ResumeBuilder />
            <Coverletter />
          </div>

          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {renderSection("Profile Summary", "profileSummary")}
              {renderSection("Education Details", "educationDetails")}
              {renderSection("Work Experience", "workExperience")}
              {renderSection("Certifications", "Certifications")}
              {renderSection("Projects", "projects")}
              {renderSection("Awards & Achievements", "awardsAchievements")}
            </div>

            <div className="flex justify-center mt-4">
              {editMode ? (
                <button
                  className="bg-blue-500 mt-5 text-white px-4 py-2 rounded hover:bg-blue-600"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              ) : (
                <button
                  className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
                  onClick={handleEdit}
                >
                  Edit Details
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
