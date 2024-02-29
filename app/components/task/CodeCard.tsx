import React, { useState } from "react";

function CodeCard() {
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRunCode = async () => {
    // Function to run the Python code
    // Here you would call an API or a backend service that will execute the Python code
    // and then set the output with the result.
    // For now, we'll just simulate the output.
    console.log(code);
    setOutput("Result of the executed code will be shown here");
  };

  return (
    <div className="rounded-lg flex flex-col h-screen mx-2">
      {/* Code Input Section */}
      <textarea
        className="flex-1 resize-none p-4 rounded-lg"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter Python code here..."
      ></textarea>

      {/* Run Button */}
      <button
        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 my-2 mx-4 rounded"
        onClick={handleRunCode}
      >
        Run
      </button>

      {/* Output Shell Section */}
      <div className="flex-1 bg-gray-500 text-white p-4 overflow-auto rounded-lg">
        {output || "Output will be displayed here..."}
      </div>
    </div>
  );
}

export default CodeCard;
