import { Badge } from "../ui/badge";
import { getProjects } from "@/app/_services/notion";
import { Project as ProjectType } from "@/app/_types/project";
import { Project } from "./Project";
import EmptyState from "../Errors/EmptyState";

export default async function Projects() {
  const projects = await getProjects();

  if (projects?.length !== 0) {
    return (
      <section className="bg-blue-900 py-20 px-10">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center justify-center">
          <Badge variant="icon">
            <i className="ri-flashlight-fill ri-3xl bg-gradient-to-b from-orange-500 to-orange-400 bg-clip-text text-transparent"></i>
            Top 3 projetos
          </Badge>
          <h2 className="font-bold font-spacegrotesk text-3xl md:text-4xl text-white mt-12 text-center md:text-start">
            Projetos desenvolvidos
          </h2>
          <div className="flex flex-col items-center justify-center gap-16 mt-20">
            {projects.map((project: ProjectType, index: number) => (
              <Project key={index} project={project} />
            ))}
          </div>
        </div>
      </section>
    );
  }
  return <EmptyState title={"Sem projetos!"} section={"projects"} />;
}
