import { getPosts } from "@/app/_services/notion";
import { Button } from "../ui/button";
import Link from "next/link";
import { Post } from "@/app/_types/post";
import { convertDate } from "@/app/_utils/functions";
import NotFound from "../Errors/NotFound";
import EmptyState from "../Errors/EmptyState";

export default async function Blog() {
  try {
    const posts = await getPosts();
    if (posts !== null) {
      return (
        <section className="bg-blue-600 py-20 px-10 rounded-tl-[200px] rounded-br-[200px] mt-16">
          <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
            <div className="flex flex-row items-center justify-between w-full mt-36">
              <h2 className="font-bold font-spacegrotesk text-3xl md:text-4xl text-white">
                Artigos <span className="text-orange-500">&</span> Novidades
              </h2>
              <Button variant={"default"} className="rounded-full">
                <Link href={"/blog"} className="inline-flex items-center gap-3">
                  Ver mais artigos
                  <i className="ri-arrow-right-line ri-xl text-blue-500 hover:text-blue-800 cursor-pointer" />
                </Link>
              </Button>
            </div>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center mt-36 w-full">
              {posts.map((post: Post | any, index: number) => (
                <li
                  key={index}
                  className="flex flex-col items-center justify-start max-w-[570px] w-full"
                >
                  <div
                    style={{
                      background: `url(${post.image.files[0].file.url}) center/cover no-repeat`,
                    }}
                    className="w-[570px] h-[570px] rounded-md"
                  ></div>
                  <div className="flex items-center justify-between w-full mt-12 mb-10 px-1.5">
                    <span className="bg-blue-900 rounded-full px-6 py-3 uppercase text-white font-bold font-circularstd">
                      {post.category.select.name}
                    </span>
                    <span className="font-circularstd text-ivory-white/60 text-base">
                      {convertDate(post.published_date.date.start)}
                    </span>
                  </div>
                  <h3 className="font-bold font-spacegrotesk text-ivory-white text-start text-2xl mb-10">
                    {post.title.title[0].plain_text}
                  </h3>
                  <Link
                    href={`/blog/${post.slug.rich_text[0].plain_text}`}
                    className="inline-flex items-center justify-center self-start gap-3 font-circularstd font-normal text-2xl text-orange-500 hover:underline"
                  >
                    Saiba mais
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      );
    }

    return <EmptyState />;
  } catch (error) {
    <NotFound />;

    return null;
  }
}
