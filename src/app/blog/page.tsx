import Blog from "@/components/Blog/Blog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogHome() {
  const appURL = process.env.APP_URL;
  const posts = await fetch(`${appURL}/api/posts`).then((res) =>
    res.json().catch((err) => console.log(err))
  );

  return (
    <div className="bg-blue-900">
      <Blog posts={posts || []} />
    </div>
  );
}
