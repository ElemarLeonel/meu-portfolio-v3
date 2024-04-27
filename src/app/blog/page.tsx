import Blog from "@/components/Blog/Blog";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog",
};

export default async function BlogHome() {
  const appURL = process.env.APP_URL;
  const posts = await fetch(`${appURL}/api/posts`, {
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return (
    <div className="bg-blue-900 flex flex-col items-center justify-center w-full gap-2.5 relative">
      <Button
        variant={"default"}
        className="rounded-full absolute top-10 md:top-32 left-[40%] sm:left-20 xl:left-80"
      >
        <Link href={"/"} className="inline-flex items-center gap-3">
          <i className="ri-arrow-right-line ri-xl text-blue-500 hover:text-blue-800 cursor-pointer rotate-180" />
          Voltar
        </Link>
      </Button>
      <Blog posts={posts || []} />
    </div>
  );
}
