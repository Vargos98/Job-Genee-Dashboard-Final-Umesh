import React, { useState } from "react";
import resumeIcon from "../Assets/curriculum-vitae (1).png";

// Modal Component
const ResumeUploadModal = ({ isOpen, onClose, handleUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const handleUploadClick = () => {
    if (file) {
      handleUpload(file);
      onClose(); // Close modal after upload
    } else {
      alert("Please select a file to upload.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      {/* Updated modal size */}
      <div className="bg-white p-8 rounded-lg w-[600px] h-fit">
        <h2 className="text-2xl font-semibold mb-6">Upload Resume</h2>
        <input 
          type="file" 
          accept=".pdf,.doc,.docx" 
          onChange={handleFileChange} 
          className="mb-6 w-full border border-gray-300 rounded p-2"
        />
        <div className="flex justify-end">
          <button className="bg-gray-400 text-white px-4 py-2 rounded mr-2" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUploadClick}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Resume Builder Component
const ResumeBuilder = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedResume, setUploadedResume] = useState(null);

  const handleUpload = (file) => {
    setUploadedResume(file);
  };

  const handleDownload = () => {
    if (!uploadedResume) {
      alert("No resume uploaded!");
      return;
    }
    // Create a link element to download the file
    const url = URL.createObjectURL(uploadedResume);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", uploadedResume.name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className="max-w-lg rounded-[40px] overflow-hidden shadow-lg bg-blue-500 p-8 flex justify-between items-center flex-col mb-4">
      <div className="flex items-center">
        <img src={resumeIcon} alt="CV Icon" className="w-24 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-white">Upload Resume</h2>
          <p className="text-white font-semibold mt-2">
            Upload an impressive resume so that you can stand out from the competition!
          </p>
        </div>
      </div>
      <div className="flex">
        <button
          className="bg-zinc-200 hover:bg-gray-100 text-gray-800 font-semibold m-2 px-3 py-1 rounded-3xl border border-gray-400"
          onClick={() => setIsModalOpen(true)} // Open modal on click
        >
          Upload
        </button>
        <button
          className="bg-zinc-200 hover:bg-gray-100 text-gray-800 font-semibold m-2 px-3 py-1 rounded-3xl border border-gray-400"
          onClick={handleDownload} // Handle download
        >
          Download
        </button>
      </div>

      {/* Resume Upload Modal */}
      <ResumeUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleUpload={handleUpload}
      />
    </div>
  );
};

export default ResumeBuilder;
