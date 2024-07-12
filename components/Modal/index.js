import React from "react";
import Button from "../Button"; // Assuming you have a Button component

const Modal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-md shadow-lg relative w-11/12 max-w-md">
        <button
          className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-2xl font-bold mb-4 text-center">Contact Information</h2>
        <div className="flex flex-col space-y-4">
          <Button onClick={() => window.open("mailto:eduardoellechero@gmail.com")} type="primary">
            Email Me
          </Button>
          <Button onClick={() => window.open("https://github.com/bigrex007", "_blank")} type="primary">
            Visit my GitHub
          </Button>
          <Button onClick={() => window.open("https://www.linkedin.com/in/eduardo-antonio-martinez-maldonado-415949241/", "_blank")} type="primary">
            Connect on LinkedIn
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Modal;