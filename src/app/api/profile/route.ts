import { getProfile } from "@/app/_services/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const profile = await getProfile();
    
    return NextResponse.json(profile);
  } catch (error) {
    return NextResponse.json({ message: "Falha ao procurar o perfil" });
  }
}
