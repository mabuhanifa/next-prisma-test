import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function PUT(req: Request, res: Response) {
  const id = Number(req.url.split("todo/")[1]);
  const { title, isCompleted } = await req.json();
  try {
    const res = await prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        title,
        isCompleted,
      },
    });
    return NextResponse.json({
      message: `Todo updated successfully with title : ${title} `,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
    });
  }
}
