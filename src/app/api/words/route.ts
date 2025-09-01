import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all words
export async function GET() {
  const words = await prisma.word.findMany();
  return NextResponse.json(words);
}

// POST new word
export async function POST(req: Request) {
  const { text } = await req.json();

  if (!text || typeof text !== "string") {
    return NextResponse.json({ error: "Invalid word" }, { status: 400 });
  }

  const newWord = await prisma.word.create({
    data: { text },
  });

  return NextResponse.json(newWord, { status: 201 });
}
