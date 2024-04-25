import { getPostsHome } from "@/app/_services/notion";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const posts = await getPostsHome();

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ message: "Falha ao procurar os posts do blog" });
  }
}
