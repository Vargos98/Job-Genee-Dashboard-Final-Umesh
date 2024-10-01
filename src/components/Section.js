import React, { useState } from 'react';
import edit from '../Assets/edit.png';
import del from '../Assets/delete.png';

const Section = ({ title, children, onDelete, FormComponent }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(); // Trigger the delete function passed as a prop
    }
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-lg mb-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div>
          <button onClick={handleEdit} className="text-blue-500 mr-2">
            <img src={edit} alt="edit" className="h-6 w-6" />
          </button>
          <button onClick={handleDelete} className="text-red-500">
            <img src={del} alt="delete" className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="mt-2">
        {/* Render the form if in edit mode, otherwise show the children */}
        {isEditing ? <FormComponent /> : children}
      </div>
    </div>
  );
};

export default Section;
