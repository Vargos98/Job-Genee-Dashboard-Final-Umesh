import React, { useState } from 'react';
import coverletterImage from '../Assets/writing.png';

// Modal Component
const CoverLetterUploadModal = ({ isOpen, onClose, handleUpload }) => {
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
    <div className="fixed inset-0 bg-black rounded-full bg-opacity-50 flex justify-center items-center z-50 drop-shadow-2xl">
      {/* Updated modal to be full screen */}
      <div className="bg-white p-8 rounded-3xl w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-4xl font-bold mb-8 text-nowrap">Upload Cover Letter</h2>
        <input 
          type="file" 
          accept=".pdf,.doc,.docx" 
          onChange={handleFileChange} 
          className="mb-8 w-3/4 border border-gray-400 rounded p-4 text-lg"
        />
        <div className="flex justify-center">
          <button className="bg-gray-400 text-white px-6 py-1 rounded-full mr-4 text-lg hover:bg-gray-700" onClick={onClose}>
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-6 py-1 rounded-full text-lg hover:bg-blue-800" onClick={handleUploadClick}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

// Main Cover Letter Component
const Coverletter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [uploadedCoverLetter, setUploadedCoverLetter] = useState(null);

  const handleUpload = (file) => {
    setUploadedCoverLetter(file);
  };

  const handleDownload = () => {
    if (!uploadedCoverLetter) {
      alert("No cover letter uploaded!");
      return;
    }
    // Create a link element to download the file
    const url = URL.createObjectURL(uploadedCoverLetter);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", uploadedCoverLetter.name);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Clean up
  };

  return (
    <div className="max-w-lg rounded-[40px] overflow-hidden shadow-lg bg-teal-600 p-8 flex justify-between items-center flex-col mb-4 ml-3 transition-all">
      <div className="flex items-center">
        <img src={coverletterImage} alt="Cover Letter Icon" className="w-24 mr-4" />
        <div>
          <h2 className="text-2xl font-bold text-white">Cover Letter</h2>
          <p className="text-white font-semibold mt-2 leading-tight">
            Impress recruiters with a breathtaking cover letter to showcase your hidden talents!
          </p>
        </div>
      </div>
      <div className="flex">
        <button
          className="bg-yellow-400 hover:bg-blue-700 hover:text-white text-gray-800 font-semibold m-2 px-4 py-1 rounded-3xl border-none hover:drop-shadow-xl transition-all"
          onClick={() => setIsModalOpen(true)} // Open modal on click
        >
          Upload 
        </button>
        <button
          className="bg-gray-900 hover:bg-gray-100 hover:text-gray-900 text-gray-200 font-semibold m-2 px-4 py-1 rounded-3xl border-none text-nowrap hover:drop-shadow-xl transition-all"
          onClick={handleDownload} // Handle download
        >
          Download
        </button>
      </div>

      {/* Cover Letter Upload Modal */}
      <CoverLetterUploadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleUpload={handleUpload}
      />
    </div>
  );
};

export default Coverletter;
