import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

  const data = await request.json();
  const prompt = data.prompt;
  const code = data.code;
  const inst = `Take the following prompt:\n ${prompt}\n based on this prompt, build on this code (if no code is 
    attached then no code is written):\n ${code}.\n Your output should only be a python code. Your output should include
    everything in the provided code in addtion to your contribution. The code produced by you will be used in a 
    python interpeter directly, so make sure there are no syntax errors`;

  //   return NextResponse.json({ inst });
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // Write the code to the file
  try {
    const result = await model.generateContent(inst);
    const response = await result.response;
    const cleanedResponse:string = cleanResponse(response);
    return NextResponse.json({ response: cleanedResponse });
  } catch (error) {
    console.error("Failed to connect to gemini:", error);
    return NextResponse.json({
      message: "Failed to connect to gemini.",
      error: (error as Error).message,
    });
  }
}

function cleanResponse(response:any): string {
  //hardcoded method to clean gemini response string
  //removes '''python from the beginning and ''' from the end
  const responseString:string = response.text();
  const cleanedResponse:string = responseString.substring(10,responseString.length - 4);
  console.log(cleanedResponse)
  return cleanedResponse;
}
