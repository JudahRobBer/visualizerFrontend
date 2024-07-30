"use client";

import React, { useState } from "react";
// import TaskPageLayout from "./TaskPageLayout";
import TaskCard from "./components/task/TaskCard";
import CodeCard from "./components/task/CodeCard";
import CodexCard from "./components/task/CodexCard";
import CodeEditor from "./components/task/CodeEditor";
import GraphCard from "./components/task/GraphCard";

function Page() {
  const [code, setCode] = useState("");

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="flex flex-row h-screen">
      <div className="basis-1/2 resize-none p-4 rounded-lg">
	<CodeEditor code={code} setCode={setCode}></CodeEditor>
      </div>
      <div className="basis-1/2">
        {<GraphCard></GraphCard>}
      </div>
    </div>
  );
}

export default Page;
