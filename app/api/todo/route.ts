import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  const { title, isCompleted } = await req.json();
  try {
    console.log({ title, isCompleted });
    return NextResponse.json({
      message: { title, isCompleted },
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  try {
    return NextResponse.json({
      HI: "HI",
    });
  } catch (error) {
    console.log(error);
  }
}
