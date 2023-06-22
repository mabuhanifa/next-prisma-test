import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function GET(req: Request, res: Response) {
  const id = Number(req.url.split("todo/")[1]);
  try {
    const res = await prisma.todo.findUnique({
      where: { id: id },
    });
    if (res) {
      return NextResponse.json({
        message: `Todo found successfully with id : ${id} `,
        data: res,
        success: true,
      });
    } else {
      return NextResponse.json({
        message: `Todo not found with id : ${id} `,
        success: false,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: error,
      success: false,
    });
  }
}

export async function DELETE(req: Request, res: Response) {
  const id = Number(req.url.split("todo/")[1]);
  try {
    const res = await prisma.todo.delete({
      where: { id: id },
    });
    if (res) {
      return NextResponse.json({
        message: `Todo deleted successfully with id : ${id} `,
        data: res,
        success: true,
      });
    } else {
      return NextResponse.json({
        message: `Todo not found with id : ${id} `,
        success: false,
      });
    }
  } catch (error) {
    return NextResponse.json({
      message: error,
      success: false,
    });
  }
}

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
      success: false,
    });
  }
}
