import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

// Get all pins
export async function GET() {
  try {
    const pins = await prisma.pin.findMany();
    NextResponse.json(pins, {
      status: 200,
    });
  } catch (error) {
    NextResponse.json(
      { message: "Server error could not fetch pins" },
      { status: 500 }
    );
  }
}

export async function POST(request: Response) {}
