import { useState } from "react";
import React from "react";

interface Probs {
  code: string;
  setCode: (input: string) => void;
}

function CodexCard({ code, setCode }: Probs) {
  const [prompt, setPrompt] = useState("");

  const handleGenerateCode = async () => {
    // Send the code to the server
    try {
      const response = await fetch("../api/gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt, code }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        if (result.error) {
          console.log(result.error);
        } else {
          setCode(result.response);
        }

        // You can also set the output to the result of executing the code, depending on your API's response
      } else {
        // Handle server errors or invalid responses
        console.log("Failed to send the prompt to the server.");
      }
    } catch (error) {
      // Handle network errors
      console.error("Error sending prompt to the server:", error);
      // setOutput("Network error while trying to send code to the server.");
    }
  };

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
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>

      {/* Generate Code Button */}
      <button
        onClick={handleGenerateCode}
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
}

export default CodexCard;
