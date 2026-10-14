import guilhermePerfil from "../../assets/profile.jpeg";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { DownloadCurriculum } from "../DownloadCurriculum";
import { Avatar } from "../Avatar";

export function About() {
  return (
    <div className="flex flex-col items-center gap-6 w-full px-12 xl:w-4xl">
      <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 mt-1 lg:mt-0">
        <Avatar src={guilhermePerfil} className="w-full h-full" />
      </div>

      <div className="flex flex-col gap-4 w-full max-w-2xl text-center">
        <div>
          <h1 className="text-4xl xl:text-5xl font-medium uppercase mb-2">
            Guilherme Evangelista
          </h1>
          <h3 className="text-3xl font-bold text-blue-500">
            Front-end Developer
          </h3>
        </div>

        <p className="mt-5">
          Desenvolvedor Front-End e engenheiro da computação com experiência na
          construção de plataformas orientadas a dados, focado em arquitetura
          escalável e experiência do usuário. Atuando principalmente com React,
          Vue.js e TypeScript.
        </p>

        <p className="mt-3 text-sm text-gray-700 dark:text-white">
          Formação em Engenharia da Computação - Centro Universitário Eniac
        </p>

        <div className="mt-5">
          <DownloadCurriculum />
        </div>

        <div className="flex justify-center mt-5 gap-6">
          <div className="flex items-center gap-2">
            <GitHubIcon fontSize="large" />
            <a href="https://github.com/guilherme1s" target="_blank">
              Github
            </a>
          </div>

          <div className="flex items-center gap-2">
            <LinkedInIcon fontSize="large" />
            <a
              href="https://www.linkedin.com/in/guilherme-silva-evangelista/"
              target="_blank"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
