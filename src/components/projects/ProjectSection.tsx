import { projects } from "../../data/project";
import { SectionTitle } from "../SectionTitle";
import { ProjectCard } from "./ProjectCard";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

import { motion, AnimatePresence } from "framer-motion";

import shophub from "../../assets/shophub.png";
import dtmoney from "../../assets/dtmoney.png";
import gerenciadorProjetos from "../../assets/gerenciador-projetos.png";
import igniteFeed from "../../assets/ignite-feed.png";
import igniteTimer from "../../assets/ignite-timer.png";
import landingPage from "../../assets/lp.png";
import loginForm from "../../assets/loginform.png";
import myFinanceFlow from "../../assets/my-finance-flow.png";
import { useState } from "react";

export function ProjectSection() {
  const [showAllProjects, setshowAllProjects] = useState(false);

  const maxVisible = 2;
  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, maxVisible);

  const handleShowProjects = () => {
    if (showAllProjects) {
      const section = document.getElementById("projects");

      section?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setshowAllProjects((prev) => !prev);
  };

  console.log(visibleProjects.length);

  const projectImagesMap: Record<string, string> = {
    shophub: shophub,
    "dt-money": dtmoney,
    "gerenciador-projetos": gerenciadorProjetos,
    "ignite-timer": igniteTimer,
    "ignite-feed": igniteFeed,
    "landing-page": landingPage,
    "login-form": loginForm,
    myFinanceFlow: myFinanceFlow,
  };

  return (
    <section id="projects" className="flex flex-col gap-12">
      <SectionTitle title="Projetos" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
        <AnimatePresence initial={false}>
          {visibleProjects.map((project) => {
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  deployUrl={project.deployUrl}
                  projectUrl={project.gitHubUrl}
                  tags={project.technologies}
                  image={
                    projectImagesMap[
                      project.image as keyof typeof projectImagesMap
                    ]
                  }
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleShowProjects}
          className="flex items-center gap-1"
        >
          {projects.length > maxVisible && (
            <span className="cursor-pointer text-2xl text-gray-800 dark:text-white hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-blue-500 hover:via-purple-500 hover:to-pink-500">
              {showAllProjects ? "Recolher" : "Ver mais"}
            </span>
          )}

          {projects.length > maxVisible &&
            (showAllProjects ? <ExpandLessIcon /> : <ExpandMoreIcon />)}
        </button>
      </div>
    </section>
  );
}
