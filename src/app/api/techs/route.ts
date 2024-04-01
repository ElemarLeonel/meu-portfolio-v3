import { getTechs } from "@/app/_services/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const techs = await getTechs();
    
    return NextResponse.json(techs);
  } catch (error) {
    return NextResponse.json({ message: "Falha ao procurar as tecnologias" });
  }
}
