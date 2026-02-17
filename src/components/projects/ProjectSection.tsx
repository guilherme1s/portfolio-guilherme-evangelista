import { projects } from "../../data/project";
import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "./ProjectCard";

export function ProjectSection() {
  return (
    <section id="projects" className="flex flex-col gap-12">
      <SectionTitle title="Projetos" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => {
          return (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              deployUrl={project.deployUrl}
              projectUrl={project.gitHubUrl}
              tags={project.technologies}
            />
          );
        })}
      </div>
    </section>
  );
}
