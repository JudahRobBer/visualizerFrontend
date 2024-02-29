// components/TaskCard.tsx
import React from "react";

interface Probs {
  title: string;
  description: string;
  buttonText: string;
  onButtonClick: () => void; // You can specify a more specific type for the event if needed
}

function TaskCard({ title, description, buttonText, onButtonClick }: Probs) {
  return (
    <div className="bg-white rounded-lg p-4 flex flex-col h-screen mx-2">
      <div>
        <h2 className="text-xl text-black font-bold mb-4">{title}</h2>
        <p className="text-black mb-4">{description}</p>
      </div>
      <div className="h-screen"></div>{" "}
      <div>
        <button
          onClick={onButtonClick}
          className="bg-rose-800 hover:bg-rose-950 text-white font-bold py-2 px-4 rounded-lg w-96"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default TaskCard;
