import { Project } from "@/app/_types/project";
import { Badge } from "../ui/badge";
import Image from "next/image";
import ImageProject from "/public/images/project.webp";
import { Button } from "../ui/button";
import Link from "next/link";

type ProjectProps = {
  project: Project;
};

export function Project({ project }: ProjectProps) {
  return (
    <div
      className="flex flex-col lg:flex-row items-center justify-center gap-12 
          odd:bg-blue-700 even:bg-transparent even:border-[5px] even:border-blue-700 
            rounded-[10px] px-7 md:px-14 py-10"
    >
      <Image
        src={project.image.files[0].file.url || ImageProject.src}
        width={500}
        height={500}
        alt={project.title.title[0]?.plain_text}
        className="w-full max-w-sm h-auto rounded-md"
      />
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row flex-wrap items-center justify-center lg:justify-start gap-4 w-full">
          {project.techs.multi_select.map((tech: any, index: number) => (
            <Badge
              key={index}
              variant={index === 0 ? "default" : "outline"}
              className="uppercase"
            >
              {tech.name}
            </Badge>
          ))}
        </div>
        <h3 className="font-bold font-spacegrotesk text-3xl text-white mt-8 mb-6 text-center lg:text-start self-center lg:self-start">
          {project.title.title[0]?.plain_text}
        </h3>
        <p className="font-circularstd text-ivory-white/60 text-sm md:text-base my-1.5">
          {project.description.rich_text[0]?.plain_text}
        </p>
        <div className="flex flex-row flex-wrap items-start justify-center lg:justify-start gap-4 w-full mt-8">
          <Button
            variant="default"
            size="md"
            className={
              project.link_project.rich_text[0]?.plain_text
                ? "font-circularstd block"
                : "hidden"
            }
          >
            <Link
              href={project.link_project.rich_text[0]?.plain_text || ""}
              target="_blank"
              className="inline-flex gap-3"
            >
              Visualizar projeto
              <i className="ri-external-link-line ri-xl text-blue-900"></i>
            </Link>
          </Button>
          <Button
            variant="link"
            size="md"
            className="font-circularstd gap-3 group"
          >
            <Link
              href={project.link_github.rich_text[0]?.plain_text || ""}
              target="_blank"
              className="inline-flex gap-3"
            >
              <i className="ri-github-fill ri-xl text-white group-hover:text-blue-900"></i>
              Github
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
