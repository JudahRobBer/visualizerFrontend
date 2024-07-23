import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const data = await request.json();
    const code = data.code;
    const payload = {"source":code};
    try {
        const response = await fetch('http://localhost:8000/endpoint/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
            body: JSON.stringify(payload),
        });
        if (response.ok) {
            const response_payload = await response.json();
            const edges = response_payload.links;
            const nodes = response_payload.nodes;
            console.log(edges)
            console.log(nodes)
        }
        return NextResponse.json({ response: response});
    } catch (error) {
        console.error("Failed to connect to graph API: ",error);
        return NextResponse.json({
            message: "Failed to connect to graph API",
            error: (error as Error).message,
          });
    }
}