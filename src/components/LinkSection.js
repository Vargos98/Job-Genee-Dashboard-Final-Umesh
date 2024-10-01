import React, { useState } from "react";
import linkdin from "../Assets/linkedin.png";
import github from "../Assets/github.png";
import link from "../Assets/link.png"

const LinkSection = () => {
  const [links, setLinks] = useState({
    linkedin: "",
    github: "",
    personalWebsite: "",
  });

  const [isLinkActive, setIsLinkActive] = useState(false); // Track if links are active

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setLinks((prevLinks) => ({ ...prevLinks, [name]: value }));
  };

  // Function to open the link in a new tab
  const openLink = (url) => {
    if (url) {
      window.open(url, "_blank");
    }
  };

  // Handle save button click
  const handleSave = () => {
    setIsLinkActive(true); // Set links to active
  };

  return (
    <div className="bg-blue-100 p-4 rounded-[20px] shadow-lg mb-4 max-w-[80%] ml-[35px]">
      <h3 className="text-lg font-semibold mb-2 text-center underline underline-offset-2">LINKS</h3>

      <label className="flex flex-col mb-3">
        <div className="flex flex-row items-center">
          <img
            src={linkdin}
            className="w-8 h-8 ml-4 cursor-pointer"
            alt="LinkedIn logo"
            onClick={() => isLinkActive && openLink(links.linkedin)} // Open LinkedIn link if active
          />
          <input
            className="bg-blue-50 mx-12 flex-1"
            type="text"
            name="linkedin" // Name for state management
            placeholder="LinkedIn link"
            value={links.linkedin}
            onChange={handleChange}
          />
        </div>
      </label>

      <label className="flex flex-col mb-3">
        <div className="flex flex-row items-center">
          <img
            src={github}
            className="w-8 h-8 ml-4 cursor-pointer"
            alt="GitHub logo"
            onClick={() => isLinkActive && openLink(links.github)} // Open GitHub link if active
          />
          <input
            className="bg-blue-50 mx-12 flex-1"
            type="text"
            name="github" // Name for state management
            placeholder="GitHub link"
            value={links.github}
            onChange={handleChange}
          />
        </div>
      </label>

      <label className="flex flex-col mb-3">
        <div className="flex flex-row items-center">
          <img
            src={link}
            className="w-8 h-8 ml-4 cursor-pointer"
            alt="Personal website logo"
            onClick={() => isLinkActive && openLink(links.personalWebsite)} // Open personal website link if active
          />
          <input
            className="bg-blue-50 mx-12 flex-1"
            type="text"
            name="personalWebsite" // Name for state management
            placeholder="Personal website"
            value={links.personalWebsite}
            onChange={handleChange}
          />
        </div>
      </label>

      <div className="flex justify-center mt-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
          onClick={handleSave} // Save button
        >
          Save Links
        </button>
      </div>
    </div>
  );
};



const SkillSection = () => {
  const [skills, setSkills] = useState([]); // State to store skills
  const [skillInput, setSkillInput] = useState(""); // State to manage the input field for new skills

  // Handle input change for skill input
  const handleSkillChange = (e) => {
    setSkillInput(e.target.value);
  };

  // Handle save button click
  const handleSaveSkill = () => {
    if (skillInput.trim() !== "") {
      setSkills([...skills, skillInput]); // Add the new skill to the skills array
      setSkillInput(""); // Clear the input field
    }
  };

  // Handle delete skill
  const handleDeleteSkill = (index) => {
    const newSkills = skills.filter((_, i) => i !== index); // Remove skill at the specified index
    setSkills(newSkills); // Update skills state
  };

  // Handle key down event for the input field
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveSkill(); // Save skill when Enter is pressed
    }
  };

  return (
    <div className="bg-gray-200 p-4 rounded-[20px] shadow-lg mt-5 mb-4 max-w-[80%] ml-[35px]">
      <h3 className="text-lg font-semibold mb-2 text-center underline underline-offset-4">SKILLS</h3>

      {skills.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          <h4 className="font-regular mb-2 text-base">Your Skills:</h4>
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-green-200 text-blue-800 px-3 py-1 rounded-full text-sm select-none cursor-pointer flex items-center transition-all"
            >
              {skill}
              <button
                className="ml-2 text-red-500 hover:text-red-700 text-1xl transition-all"
                onClick={() => handleDeleteSkill(index)}
              >
                &times; {/* This is the cross symbol */}
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter a skill"
          value={skillInput}
          onChange={handleSkillChange}
          onKeyDown={handleKeyDown} // Add key down event handler
          className="p-2 w-full border rounded mb-2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
          onClick={handleSaveSkill}
        >
          Save Skill
        </button>
      </div>
    </div>
  );
};


// Language sections

const LanguageSection = () => {
  const [languages, setLanguages] = useState([]); // State to store languages
  const [languageInput, setLanguageInput] = useState(""); // State to manage the input field for new languages

  // Handle input change for language input
  const handleLanguageChange = (e) => {
    setLanguageInput(e.target.value);
  };

  // Handle save button click
  const handleSaveLanguage = () => {
    if (languageInput.trim() !== "") {
      setLanguages([...languages, languageInput]); // Add the new language to the languages array
      setLanguageInput(""); // Clear the input field
    }
  };

  // Handle delete language
  const handleDeleteLanguage = (index) => {
    const newLanguages = languages.filter((_, i) => i !== index); // Remove language at the specified index
    setLanguages(newLanguages); // Update languages state
  };

  // Handle key down event for the input field
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSaveLanguage(); // Save language when Enter is pressed
    }
  };

  return (
    <div className="bg-blue-100 p-4 rounded-[20px] shadow-lg mt-5 mb-4 max-w-[80%] ml-[35px]">
      <h3 className="text-lg font-semibold mb-2 text-center underline underline-offset-4">
        LANGUAGES
      </h3>

      {languages.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          <h4 className="font-regular mb-2 text-base">Languages:</h4>
          {languages.map((language, index) => (
            <span
              key={index}
              className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-sm select-none cursor-pointer flex items-center transition-all"
            >
              {language}
              <button
                className="ml-2 text-red-500 hover:text-red-700 text-1xl transition-all"
                onClick={() => handleDeleteLanguage(index)}
              >
                &times; {/* This is the cross symbol */}
              </button>
            </span>
          ))}
        </div>
      )}

      <div className="mt-4 flex flex-col items-center">
        <input
          type="text"
          placeholder="Enter a language"
          value={languageInput}
          onChange={handleLanguageChange}
          onKeyDown={handleKeyDown} // Add key down event handler
          className="p-2 w-full border rounded mb-2"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-all"
          onClick={handleSaveLanguage}
        >
          Save Language
        </button>
      </div>
    </div>
  );
};


//   const PreferedShift = () => {
//     return (
//       <div className="bg-blue-300  rounded-[20px] shadow-lg mb-4 p-10 max-w-[80%] ml-[35px] flex flex-col">
//         <label className="flex flex-col p-2">
//         <input className=" bg-blue-100 rounded-lg  flex-1 mx-5" type="text " placeholder="Preffered shift" />
//         </label>
//         <label className="flex flex-col p-2">
//         <input className=" bg-blue-100 rounded-lg  flex-1 mx-5" type="text " placeholder="prefered location" />
//         </label>
//         <label className="flex flex-col p-2">
//             <input className=" bg-blue-100 rounded-lg  flex-1 mx-5" type="text " placeholder="Employment type" />
//         </label>
//       </div>
//     );
// };

export { LinkSection, SkillSection, LanguageSection };
