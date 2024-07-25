import React, { useState } from "react";

interface Probs {
  code: string;
  setCode: (input: string) => void;
}

function CodeCard({ code, setCode }: Probs) {
  // const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRunCode = async () => {
    // Send the code to the server
    try {
      const response = await fetch("../api/dependencyGraph", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);
        if (result.error) {
          setOutput(result.error);
        } else {
          //setOutput(result.message);
        }

        // You can also set the output to the result of executing the code, depending on your API's response
      } else {
        // Handle server errors or invalid responses
        setOutput("Failed to send code to the server.");
      }
    } catch (error) {
      // Handle network errors
      console.error("Error sending code to the server:", error);
      setOutput("Network error while trying to send code to the server.");
    }
  };

  return (
    <div className="rounded-lg flex flex-col h-screen mx-2">
      {/* Code Input Section */}
      {/* <textarea
        className="flex-1 resize-none p-4 rounded-lg"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter Python code here..."
      ></textarea> */}

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

  );
}

export default CodeCard;
