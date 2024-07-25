"use client";

import React, { useState } from "react";
// import TaskPageLayout from "./TaskPageLayout";
import TaskCard from "./components/task/TaskCard";
import CodeCard from "./components/task/CodeCard";
import CodexCard from "./components/task/CodexCard";
import CodeEditor from "./components/task/CodeEditor";

function Page() {
  const [code, setCode] = useState("");

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  const task = (
    <TaskCard
      title="Task Description:"
      description="Write a program that first, generates two random numbers between 1 and 6 and check if both of the variables are greater than 3 (either 4, 5, or 6). If both are greater than 3, then first display their values and then in another line, display the message: both rolled greater than 3"
      buttonText="Submit to Grade"
      onButtonClick={handleButtonClick}
    />
  );

  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/2 resize-none p-4 rounded-lg">
	<CodeEditor code={code} setCode={setCode}></CodeEditor>
      </div>
      <div className="basis-1/2">
        {<CodeCard code={code} setCode={setCode}></CodeCard>}
      </div>
    </div>
  );
}

export default Page;
