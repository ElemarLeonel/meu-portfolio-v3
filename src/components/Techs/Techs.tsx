import Image from "next/image";
import { getTechs } from "@/app/_services/notion";
import { Tech } from "@/app/_types/tech";
import EmptyState from "../Errors/EmptyState";

export default async function Techs() {
  const techs = await getTechs();

  if (techs?.length !== 0) {
    return (
      <section className="flex flex-col items-center justify-center bg-blue-600 py-20 px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center gap-4 lg:gap-[30px]">
          <h2 className="font-bold font-spacegrotesk text-3xl md:text-4xl text-white text-center">
            Tecnologias que <span className="text-orange-500">utilizo</span>
          </h2>
          <p className="font-circularstd text-ivory-white/60 text-base text-center max-w-[950px]">
            Cada tecnologia tem seu propósito e estou sempre em busca de
            aperfeiçoar meus conhecimentos nas tecnologias que atualmente estou
            utilizando no meu dia a dia.
          </p>
        </div>
        <div className="max-w-7xl mx-auto flex flex-row flex-wrap items-center justify-center gap-[30px] mt-[103px]">
          {techs.map((tech: Tech, index: number) => (
            <div
              key={index}
              className="bg-blue-900 flex flex-col items-center justify-center gap-10 px-0 md:px-[100px] py-[72px] min-w-[250px] 
          border-2 border-blue-900 hover:border-orange-500 rounded-[10px] hover:drop-shadow-tech"
            >
              <Image
                src={tech.icon.files[0]?.file.url}
                alt={tech.name.title[0].plain_text}
                width={72}
                height={72}
              />
              <h3 className="font-bold font-circularstd text-orange-50 rounded-[10px]">
                {tech.name.title[0].plain_text}
              </h3>
            </div>
          ))}
        </div>
      </section>
    );
  }
  return <EmptyState title={"Sem tecnologias!"} section="techs" />;
}
