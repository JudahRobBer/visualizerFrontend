// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ hello: "it's me" });
// }
// // pages/_middleware.ts
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET(request: NextRequest) {
  // You can get the query parameters from the request URL
  // const url = request.nextUrl;
  // const paramValue = url.searchParams.get("myParam"); // 'myParam' is the name of your query parameter

  const execSync = require("child_process").execSync;
  const pythonProcess = execSync("python3 tmp/script.py");

  // return NextResponse.json({ message: pythonProcess.toString() });
  return NextResponse.json({ message: pythonProcess.toString() });
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const code = data.code;

  // Define the path for the temporary file
  // This example saves the file in the "tmp" directory at the root of your project
  // Ensure this directory exists or choose an appropriate path according to your environment
  const tmpDir = path.join(process.cwd(), "tmp");
  const filePath = path.join(tmpDir, "script.py");

  const execSync = require("child_process").execSync;

  // Write the code to the file
  try {
    fs.writeFileSync(filePath, code, "utf-8");
    // If the file is written successfully, you can then execute it or perform other operations
    try {
      const pythonProcess = execSync("python3 tmp/script.py");
      return NextResponse.json({ message: pythonProcess.toString() });
    } catch (error) {
      console.error("Failed to execute the code:", error);
      return NextResponse.json({
        message: "Failed to execute the code.",
        error: (error as Error).message,
      });
    }
    // return NextResponse.json({ message: "Code saved successfully." });
  } catch (error) {
    console.error("Failed to save the file:", error);
    return NextResponse.json({
      message: "Failed to save the code.",
      error: (error as Error).message,
    });
  }
}
