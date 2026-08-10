import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import BuildOutlinedIcon from "@mui/icons-material/BuildOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { Divider } from "@mui/material";

import { useTheme } from "../contexts/ThemeContext";
import { ThemeToggle } from "./ThemeToggle";

export interface NavProps {
  about: string;
  experience: string;
  projects: string;
  skills: string;
  contact: string;
  onOptionClicked?: () => void;
}

export function NavMobile({
  about,
  contact,
  experience,
  skills,
  onOptionClicked,
  projects,
}: NavProps) {
  const { dark, toggleTheme } = useTheme();

  return (
    <nav className="xl:hidden bg-white dark:bg-dark-secondary dark:text-white text-primary rounded-xl p-6 w-fit shadow-md -translate-4">
      <ul className="flex flex-col gap-6">
        <li className="flex items-center gap-2">
          <PersonOutlineOutlinedIcon fontSize="small" />
          <a
            onClick={onOptionClicked}
            href={about}
            className="font-sans font-light hover:text-blue-500 transition-colors duration-100"
          >
            Sobre Mim
          </a>
        </li>

        <li className="flex items-center gap-2">
          <WorkOutlineOutlinedIcon fontSize="small" />
          <a
            onClick={onOptionClicked}
            href={experience}
            className="font-sans font-light hover:text-blue-500 transition-colors duration-100"
          >
            Experiências
          </a>
        </li>

        <li className="flex items-center gap-2">
          <FolderOpenOutlinedIcon fontSize="small" />
          <a
            onClick={onOptionClicked}
            href={projects}
            className="font-sans font-light hover:text-blue-500 transition-colors duration-100"
          >
            Projetos
          </a>
        </li>

        <li className="flex items-center gap-2">
          <BuildOutlinedIcon fontSize="small" />
          <a
            onClick={onOptionClicked}
            href={skills}
            className="font-sans font-light hover:text-blue-500 transition-colors duration-100"
          >
            Habilidades
          </a>
        </li>

        <li className="flex items-center gap-2">
          <MailOutlineOutlinedIcon fontSize="small" />
          <a
            onClick={onOptionClicked}
            href={contact}
            className="font-sans font-light hover:text-blue-500 transition-colors duration-100"
          >
            Contato
          </a>
        </li>

        <Divider className="bg-primary dark:bg-white" />

        <div className="w-fit mx-auto">
          <ThemeToggle darkMode={dark} onThemeChange={toggleTheme} isMobile />
        </div>
      </ul>
    </nav>
  );
}
