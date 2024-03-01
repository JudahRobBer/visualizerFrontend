import AceEditor from "react-ace";
import React, { useState } from "react";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";

interface Probs {
  code: string;
  setCode: (input: string) => void; // You can specify a more specific type for the event if needed
}

function CodeEditor({ code, setCode }: Probs) {
  // const code = "var message = 'Monaco Editor!' \nconsole.log(message);";

  return (
    <AceEditor
      value={code}
      onChange={(newValue) => setCode(newValue)}
      height="100%"
      width="100%" // It's a good idea to set width as well to make sure the editor is responsive
      placeholder="Enter Python code here..."
      theme="github"
      mode="python"
      fontSize="16px"
      highlightActiveLine={true}
      setOptions={{
        enableLiveAutocompletion: true,
        showLineNumbers: true,
        tabSize: 2,
      }}
    />
  );
}

export default CodeEditor;
