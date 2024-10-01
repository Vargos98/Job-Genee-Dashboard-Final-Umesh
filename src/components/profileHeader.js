import React, { useState } from "react";
import profile from '../Assets/little-girl.png';

// Modal Component
const Modal = ({ isOpen, onClose, userDetails, handleChange, handleSave, handleProfilePicUpload }) => {
  if (!isOpen) return null;

 return  (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-[600px] h-[fit-content]">
        <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
        <div className="mb-4">
          <label htmlFor="image" className="font-medium mb-1">Upload Profile picture</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleProfilePicUpload}
            className="mb-4"
          />
          <label htmlFor="name" className="font-medium mt-4 text-nowrap">Enter Full Name</label>
          <input
            type="text"
            name="name"
            value={userDetails.name}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Name"
          />
          <label htmlFor="role" className="font-medium">Enter Job role</label>
          <input
            type="text"
            name="role"
            value={userDetails.role}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Role"
          />
          <label htmlFor="location" className="font-medium">Location</label>
          <input
            type="text"
            name="location"
            value={userDetails.location}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Location"
          />
          <label htmlFor="company" className="font-medium">Enter Company name</label>
          <input
            type="text"
            name="company"
            value={userDetails.company}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Company"
          />
          <label htmlFor="experience" className="font-medium">Enter Experience</label>
          <input
            type="text"
            name="experience"
            value={userDetails.experience}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Experience"
          />
          <label htmlFor="phone" className="font-medium">Enter Phone number</label>
          <input
            type="text"
            name="phone"
            value={userDetails.phone}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Phone"
          />
          <label htmlFor="email" className="font-medium">Enter Email</label>
          <input
            type="text"
            name="email"
            value={userDetails.email}
            onChange={handleChange}
            className="w-full mb-2 p-2 border rounded"
            placeholder="Email"
          />
        </div>
        <div className="flex justify-end">
          <button
            className="bg-gray-400 text-white px-4 py-2 rounded mr-2 hover:bg-gray-500"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const ProfileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(profile);
  const [userDetails, setUserDetails] = useState({
    name: "Carls Berg",
    role: "Full Stack Developer",
    location: "California",
    company: "Luytens Technology Solutions",
    experience: "2.9 Years",
    phone: "+1 1000000000",
    email: "lCarlsberg@gmail.com",
  });

  // Handle profile picture upload (using the file as is)
  const handleProfilePicUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileUrl = URL.createObjectURL(file);  // Create a URL for the uploaded image
      setProfilePic(fileUrl);  // Update state with the file URL
    } else {
      console.error('No file selected');
    }
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  // Handle save profile details
  const handleSave = () => {
    setIsModalOpen(false);  // Close the modal after saving
  };

  // Toggle edit mode
  const toggleEdit = () => {
    setIsModalOpen(true); // Open modal on edit click
  };

  return (
    <div className="flex-col bg-blue-600 rounded-[35px] pt-36  ml-[35px]  mb-5 max-w-[80%] max-h-fit">
      <div className="bg-gray-200 p-4 rounded-b-[35px] shadow-lg flex flex-col items-center">
        <div className="relative">
          <img
            className="w-[120px] h-[120px] rounded-full object-cover mt-[-90px] position: absolute z-0 border-4 border-white"
            src={profilePic}  // Using the updated profilePic state (URL or default image)
            alt="Profile"
          />
        </div>

        <div className="mt-[40px] items-center">
          <h2 className="text-xl font-semibold text-center">{userDetails.name}</h2>
          <p className="text-gray-600 text-center font-medium">{userDetails.role}</p>
          <p className="text-gray-600 text-center font-medium">{userDetails.location}</p>

          <hr className="border-t border-gray-300 my-4" />
          
          <div className="bg-blue-200 rounded-[20px] p-3 text-sm text-gray-600  font-medium">
            <p>Workes at: {userDetails.company}</p>
            <p>Exp: {userDetails.experience}</p>
            <p>Phone: {userDetails.phone}</p>
            <p>Email: {userDetails.email}</p>
          </div>

          <hr className="border-t border-gray-300 my-4" />

          <div className="mt-4 flex justify-center">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600"
              onClick={toggleEdit}
            >
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Modal for editing details */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        userDetails={userDetails}
        handleChange={handleChange}
        handleSave={handleSave}
        handleProfilePicUpload={handleProfilePicUpload}
      />
    </div>
  );
};

export default ProfileHeader;
