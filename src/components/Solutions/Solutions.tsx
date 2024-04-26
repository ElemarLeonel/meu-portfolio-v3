import { Solution } from "@/app/_types/solution";
import IconPage from "/public/images/icon-page.svg";
import EmptyState from "../Errors/EmptyState";
import Image from "next/image";

export default async function Solutions() {
  const appURL = process.env.APP_URL;
  const solutions = await fetch(`${appURL}/api/solutions`, {
    next: {
      revalidate: 3600,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  if (solutions) {
    return (
      <section className="px-10 py-20 md:py-48 relative flex flex-col xl:flex-row items-center justify-center gap-10 lg:gap-0">
        <div className="max-w-6xl mx-auto flex flex-col xl:flex-row items-start justify-between gap-16 lg:gap-[30px] mb-10">
          <div className="max-w-full xl:max-w-sm">
            <h2 className="font-bold font-spacegrotesk text-3xl md:text-4xl text-white text-center xl:text-start">
              Ofereço serviços de
              <span className="text-orange-500"> qualidade </span>
              por um preço <span className="text-orange-500"> acessível</span>
            </h2>
          </div>
          <div className="flex flex-row flex-wrap items-start justify-center xl:justify-start gap-[68px]">
            {solutions.map((solution: Solution, index: number) => (
              <div
                key={index}
                className="flex flex-col items-start justify-center space-y-5 bg-transparent hover:bg-blue-600 py-6 px-4 rounded-md transitions max-w-full md:max-w-[270px] border-2 border-blue-600"
              >
                <Image
                  src={solution.icon.files[0]?.file.url || IconPage.src}
                  alt={`Solução ` + solution.name.title[0].plain_text}
                  width={36}
                  height={36}
                />
                <h3 className="font-bold font-circularstd text-ivory-white text-base leading-7 tracking-[7%] uppercase">
                  {solution.name.title[0].plain_text}
                </h3>
                <p className="font-circularstd text-ivory-white/60 text-base">
                  {solution.description.rich_text[0].plain_text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center max-w-[150px] xl:absolute xl:top-0 xl:bottom-0 lg:right-0 xl:right-6 2xl:right-24 m-auto">
          <span className="font-spacegrotesk font-bold text-2xl sm:text-4xl md:text-6xl xl:-rotate-90 border-text opacity-40">
            elemarleonel.dev
          </span>
        </div>
      </section>
    );
  }
  return <EmptyState title={"Sem soluções!"} section={"solutions"} />;
}
