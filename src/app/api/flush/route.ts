import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    // Delete everything
    await prisma.word.deleteMany({});

    // Seed with mock data
    await prisma.word.createMany({
      data: [
        { text: "shit" },
        { text: "fuck" },
        { text: "asshole" },
      ],
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "DB flush failed" }, { status: 500 });
  }
}
