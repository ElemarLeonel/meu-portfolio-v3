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
      className="flex flex-row items-center justify-center gap-12 
          odd:bg-blue-700 even:bg-transparent even:border-[5px] even:border-blue-700 
            rounded-[10px] px-14 py-10"
    >
      <Image
        src={project.image.files[0].file.url || ImageProject.src}
        width={400}
        height={400}
        alt={project.title.title[0]?.plain_text}
        className="w-full max-w-sm h-auto rounded-md"
      />
      <div className="flex flex-col items-start justify-center">
        <div className="flex flex-row items-start justify-center gap-4">
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
        <h3 className="font-bold font-spacegrotesk text-3xl text-white mt-6">
          {project.title.title[0]?.plain_text}
        </h3>
        <p className="font-circularstd text-ivory-white/60 text-base mt-2">
          {project.description.rich_text[0]?.plain_text}
        </p>
        <div className="flex flex-row items-start justify-center gap-4">
          <Button
            variant="default"
            size="md"
            className={
              project.link_project.rich_text[0]?.plain_text
                ? "mt-12 gap-3 font-circularstd block"
                : "hidden"
            }
          >
            <Link href={project.link_project.rich_text[0]?.plain_text || ""}>
              Visualizar projeto
              <i className="ri-external-link-line ri-xl text-blue-900"></i>
            </Link>
          </Button>
          <Button variant="link" size="md" className="mt-12 gap-3 group">
            <i className="ri-github-fill ri-xl text-white group-hover:text-blue-900"></i>
            Github
          </Button>
        </div>
      </div>
    </div>
  );
}
