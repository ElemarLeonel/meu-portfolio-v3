import { getPosts } from "@/app/_services/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await getPosts();
    
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "Falha ao procurar os posts do blog" });
  }
}
