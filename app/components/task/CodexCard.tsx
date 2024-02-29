import React from "react";

function CodexCard() {
  return (
    <div className="flex flex-col h-screen p-4 mx-2">
      {/* Heading for the code generator instructions */}
      <h2 className="text-xl font-bold mb-4 text-teal-700">
        Code Generator Instructions:
      </h2>
      
      {/* Text area for input */}
      <textarea
        className="flex-1 mb-4 p-4 border-2 border-teal-300 rounded-lg resize-none"
        placeholder="Describe the behavior of the code to be generated..."
      ></textarea>
      
      {/* Generate Code Button */}
      <button
        className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Generate Code
      </button>
      
      {/* Secondary Informational Section */}
      <div className="mt-auto">
        <h3 className="text-lg font-semibold text-teal-700 mb-2">
          Learn about Python:
        </h3>
        <button
          className="bg-teal-700 hover:bg-teal-800 text-white font-bold py-2 px-4 rounded w-full"
          onClick={() => window.open("https://docs.python.org/3/", "_blank")}
        >
          Python Documentation
        </button>
      </div>
    </div>
  );
};

export default CodexCard;
