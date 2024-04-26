import { getPost } from "@/app/_services/notion";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  const components = {
    p: ({ node, ...props }: any) => (
      <p className="font-circularstd text-white" {...props} />
    ),
    ol: ({ node, ...props }: any) => (
      <ol className="text-white font-circularstd list-decimal" {...props} />
    ),
    pre: ({ node, ...props }: any) => <pre className="w-full" {...props} />,
    code({ node, inline, className, children, ...props }: any) {
      const match = /language-(\w+)/.exec(className || "");
      return !inline && match ? (
        <SyntaxHighlighter
          style={a11yDark}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, "")}
        </SyntaxHighlighter>
      ) : (
        <code {...props}>{children}</code>
      );
    },
  };

  return (
    <div className="w-full bg-blue-900">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-blue-600 flex flex-col items-center justify-center gap-5 rounded-sm px-20 py-16 max-w-7xl">
          <Button variant={"default"} className="rounded-full self-start mb-10">
            <Link href={"/blog"} className="inline-flex items-center gap-3">
              <i className="ri-arrow-right-line ri-xl text-blue-500 hover:text-blue-800 cursor-pointer rotate-180" />
              Voltar
            </Link>
          </Button>
          <h1 className="font-bold font-spacegrotesk text-3xl md:text-4xl text-orange-500 text-center self-start">
            {post?.title}
          </h1>
          <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
            {post?.content}
          </ReactMarkdown>
        </div>
      </div>
      <Footer />
    </div>
  );
}
