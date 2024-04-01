import { getSolutions } from "@/app/_services/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const solutions = await getSolutions();
    
    return NextResponse.json(solutions);
  } catch (error) {
    return NextResponse.json({ message: "Falha ao procurar as soluções" });
  }
}
