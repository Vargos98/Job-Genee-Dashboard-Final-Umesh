import React, { useState } from "react";
import ReactQuill from 'react-quill';
import { useInView } from "react-intersection-observer";
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

  // Intersection observers for animations
  const [refLinkSection, inViewLinkSection] = useInView({ triggerOnce: true });
  const [refSkillSection, inViewSkillSection] = useInView({ triggerOnce: true });
  const [refLanguageSection, inViewLanguageSection] = useInView({ triggerOnce: true });

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
      {editMode ? null : <div className="w-full h-[2px] bg-zinc-500 mt-3"></div>}
    </div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <ProfileHeader />

          {/* Animate LinkSection on scroll */}
          <div
            ref={refLinkSection}
            className={`transform transition-all duration-700 ${
              inViewLinkSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <LinkSection />
          </div>

          {/* Animate SkillSection on scroll */}
          <div
            ref={refSkillSection}
            className={`transform transition-all duration-700 delay-100 ${
              inViewSkillSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <SkillSection />
          </div>

          {/* Animate LanguageSection on scroll */}
          <div
            ref={refLanguageSection}
            className={`transform transition-all duration-700 delay-200 ${
              inViewLanguageSection ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <LanguageSection />
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            {/* Animate ResumeBuilder and Coverletter sliding in from the right */}
            <div className="transform translate-x-full opacity-0 animate-slide-in-right">
              <ResumeBuilder />
            </div>
            <div className="transform translate-x-full opacity-0 animate-slide-in-right">
              <Coverletter />
            </div>
          </div>

          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {/* Animate sections to fade in from the bottom, one by one */}
              <div className="transform translate-y-4 opacity-0 animate-fade-in-up delay-100">
                {renderSection("Profile Summary", "profileSummary")}
              </div>
              <div className="transform translate-y-4 opacity-0 animate-fade-in-up delay-200">
                {renderSection("Education Details", "educationDetails")}
              </div>
              <div className="transform translate-y-4 opacity-0 animate-fade-in-up delay-300">
                {renderSection("Work Experience", "workExperience")}
              </div>
              <div className="transform translate-y-4 opacity-0 animate-fade-in-up delay-400">
                {renderSection("Certifications", "Certifications")}
              </div>
              <div className="transform translate-y-4 opacity-0 animate-fade-in-up delay-500">
                {renderSection("Projects", "projects")}
              </div>
              <div className="transform translate-y-4 opacity-0 animate-fade-in-up delay-600">
                {renderSection("Awards & Achievements", "awardsAchievements")}
              </div>
            </div>

            <div className="flex justify-center mt-4">
              {editMode ? (
                <button
                  className="bg-green-600 mt-5 text-white px-4 py-2 rounded hover:bg-green-500"
                  onClick={handleSave}
                >
                  Save Changes
                </button>
              ) : (
                <button
                  className="bg-yellow-600 text-black font-semibold px-4 py-2 rounded-full hover:bg-yellow-500"
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
