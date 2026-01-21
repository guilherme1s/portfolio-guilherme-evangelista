import guilhermePerfil from "../../assets/profile.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { DownloadCurriculum } from "../DownloadCurriculum";
import { Avatar } from "../Avatar";

export function About() {
  return (
    <div className="flex flex-col xl:flex-row xl:gap-14 w-full px-12 xl:w-4xl xl:p-0">
      <div className="flex flex-col gap-4 xl:w-1/2 justify-center">
        <div className="mt-1 xl:hidden mx-auto w-40 h-40 sm:w-44 sm:h-44 md:w-48 md:h-48">
          <Avatar src={guilhermePerfil} className="w-full h-full" />
        </div>

        <div>
          <h1 className="text-4xl xl:text-5xl font-medium uppercase mb-2 text-center xl:text-left">
            Guilherme Evangelista
          </h1>
          <h3 className="text-3xl text-center xl:text-left font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Front-end Developer
          </h3>
        </div>

        <p className="mt-5">
          Desenvolvedor web com foco em Front-end e experiência Full Stack.
          Atuação na criação de interfaces, dashboards e aplicações web usadas
          por empresas e projetos pessoais, desde a definição das telas até a
          integração com dados e regras de negócio. Experiência principalmente
          com React, TypeScript e Vue.js, integrando o Front-end com APIs e
          dados do back-end.
        </p>

        <p className="mt-3 text-sm text-gray-700 text-left">
          Formação em Engenharia da Computação - Centro Universitário Eniac
        </p>

        <div className="mt-5">
          <DownloadCurriculum />
        </div>

        <div className="xl:hidden flex flex-col mt-5 gap-2">
          <div className="flex items-center gap-2">
            <GitHubIcon fontSize="large" />
            <a href="https://github.com/guilherme1s" target="_blank">
              Github
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LinkedInIcon fontSize="large" />
            <a
              href="https://www.linkedin.com/in/guilherme-silva-evangelista022/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>

      <div className="hidden xl:flex">
        <Avatar src={guilhermePerfil} />
      </div>
    </div>
  );
}
