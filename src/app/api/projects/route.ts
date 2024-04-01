import { getProjects } from "@/app/_services/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const projects = await getProjects();
    
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ message: "Falha ao procurar os projetos" });
  }
}
