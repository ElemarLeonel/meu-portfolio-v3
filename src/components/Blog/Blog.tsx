import { getPosts } from "@/app/_services/notion";
import { Button } from "../ui/button";
import Link from "next/link";
import { Post } from "@/app/_types/post";
import { convertDate } from "@/app/_utils/functions";
import EmptyState from "../Errors/EmptyState";
import Image from "next/image";

export default async function Blog() {
  const posts = await getPosts();
  if (posts?.length !== 0) {
    return (
      <section className="bg-blue-600 py-20 px-10 rounded-tl-[200px] rounded-br-[200px] mt-16">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full mt-36 gap-3 sm:gap-0">
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

          <ul className="flex items-center justify-between gap-[30px] justify-items-center mt-36 w-full">
            {posts?.map((post: Post | any, index: number) => (
              <li
                key={index}
                className="flex flex-col items-center justify-start max-w-[570px] w-full"
              >
                <div className="flex flex-col items-center justify-center">
                  <Image
                    src={post.image.files[0].file.url}
                    alt={`Imagem do post ` + post.title.title[0].plain_text}
                    className="h-[400px] object-cover object-center"
                    width={570}
                    height={400}
                  />
                </div>
                <div className="flex flex-col-reverse sm:flex-row items-center justify-center sm:justify-between w-full mt-12 mb-10 px-1.5 gap-2.5 sm:gap-0">
                  <span className="bg-blue-900 rounded-full px-6 py-3 uppercase text-white font-bold font-circularstd">
                    {post.category.select.name}
                  </span>
                  <span className="font-circularstd text-ivory-white/60 text-base">
                    {convertDate(post.published_date.date.start)}
                  </span>
                </div>
                <h3 className="font-bold font-spacegrotesk text-ivory-white text-2xl mb-10 text-center sm:text-start">
                  {post.title.title[0].plain_text}
                </h3>
                <Link
                  href={`/blog/${post.slug.rich_text[0].plain_text}`}
                  className="inline-flex items-center justify-center self-center sm:self-start gap-3 font-circularstd font-normal text-xl text-orange-500 hover:underline"
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

  return <EmptyState title={"Nenhum artigo encontrado"} section={"blog"} />;
}
