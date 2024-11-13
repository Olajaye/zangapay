import React from 'react';

interface PopupProps {
  onClose: ()=> void,
  text:string
}
// ThankYouPopup Component
export const ThankYouPopup = ({ onClose, text } :PopupProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-80 text-center">
        <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
        <p className="mb-6">{text}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
};


