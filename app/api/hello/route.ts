import { NextResponse } from "next/server";

const data = {
  data: "Hello World",
};

export async function GET(request: Request, response: Response) {
  return NextResponse.json({ data });
}
