import React, { useState, useEffect } from "react";
import { useSpring, useSprings, animated } from "@react-spring/web"; // Import react-spring for animations
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
  
  // Animations
  const profileHeaderAnim = useSpring({
    from: { opacity: 0, transform: "translateX(-100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
  });

  const resumeBuilderAnim = useSpring({
    from: { opacity: 0, transform: "translateX(100%)" },
    to: { opacity: 1, transform: "translateX(0%)" },
  });

  const sectionsAnim = useSprings(
    6,
    [0, 1, 2, 3, 4, 5].map((i) => ({
      from: { opacity: 0, transform: "translateY(100%)" },
      to: { opacity: 1, transform: "translateY(0%)" },
      delay: i * 200, // Delay between each section
    }))
  );

  const [scrollTriggered, setScrollTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 && !scrollTriggered) {
        setScrollTriggered(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollTriggered]);

  const sideSectionsAnim = useSpring({
    opacity: scrollTriggered ? 1 : 0,
    transform: scrollTriggered ? "translateY(0%)" : "translateY(100%)",
  });

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

  const renderSection = (label, fieldName, index) => (
    <animated.div style={sectionsAnim[index]} className="flex flex-col pb-4">
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
    </animated.div>
  );

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="md:col-span-1">
          <animated.div style={profileHeaderAnim}>
            <ProfileHeader />
          </animated.div>
          <animated.div style={sideSectionsAnim}>
            <LinkSection />
            <SkillSection />
            <LanguageSection />
          </animated.div>
        </div>

        <div className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4">
            <animated.div style={resumeBuilderAnim}>
              <ResumeBuilder />
            </animated.div>
            <animated.div style={resumeBuilderAnim}>
              <Coverletter />
            </animated.div>
          </div>

          <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
              {renderSection("Profile Summary", "profileSummary", 0)}
              {renderSection("Education Details", "educationDetails", 1)}
              {renderSection("Work Experience", "workExperience", 2)}
              {renderSection("Certifications", "Certifications", 3)}
              {renderSection("Projects", "projects", 4)}
              {renderSection("Awards & Achievements", "awardsAchievements", 5)}
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
