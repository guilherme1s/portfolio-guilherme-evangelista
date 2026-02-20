import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { type NavProps } from "./NavMobile";

import { useTheme } from "../contexts/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

export function NavDesktop({
  about,
  contact,
  experience,
  projects,
  skills,
}: NavProps) {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="hidden xl:flex flex-col items-center justify-evenly h-full text-lg">
      <h1 className="text-3xl font-pacifico">Guilherme</h1>

      <ul className="flex flex-col gap-4">
        <li>
          <a
            className="hover:text-gray-300 transition-colors duration-100"
            href={about}
          >
            Sobre Mim
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-300 transition-colors duration-100"
            href={experience}
          >
            Experiências
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-300 transition-colors duration-100"
            href={projects}
          >
            Projetos
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-300 transition-colors duration-100"
            href={skills}
          >
            Habilidades
          </a>
        </li>
        <li>
          <a
            className="hover:text-gray-300 transition-colors duration-100"
            href={contact}
          >
            Contato
          </a>
        </li>
      </ul>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-100">
          <GitHubIcon fontSize="large" />
          <a href="https://github.com/guilherme1s" target="_blank">
            Github
          </a>
        </div>

        <div className="flex items-center gap-2 hover:text-gray-300 transition-colors duration-100">
          <LinkedInIcon fontSize="large" />
          <a
            href="https://www.linkedin.com/in/guilherme-silva-evangelista/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
      </div>

      <ThemeToggle
        isMobile={false}
        darkMode={dark}
        onThemeChange={toggleTheme}
      />

      <footer className="text-xs mt-6">
        <p>©2025 Guilherme Evangelista.</p>
        <p>Todos os direitos reservados.</p>
      </footer>
    </nav>
  );
}
