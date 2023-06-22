import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(req: Request, res: Response) {
  const { title, isCompleted } = await req.json();
  try {
    const res = await prisma.todo.create({
      data: {
        title,
        isCompleted,
      },
    });
    return NextResponse.json({
      message: `Todo created successfully with title : ${res.title} `,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}

export async function GET(req: NextApiRequest, res: NextApiResponse<Todo>) {
  try {
    const todos = await prisma.todo.findMany();
    return NextResponse.json({
      data: todos,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}
