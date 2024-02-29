// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ hello: "it's me" });
// }
// // pages/_middleware.ts
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  // You can get the query parameters from the request URL
  const url = request.nextUrl;
  const paramValue = url.searchParams.get("myParam"); // 'myParam' is the name of your query parameter

  const execSync = require("child_process").execSync;
  const pythonProcess = execSync("python3 app/api/code/test.py");

  return NextResponse.json({ message: pythonProcess.toString() });
}
