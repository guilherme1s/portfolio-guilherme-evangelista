import DownloadIcon from "@mui/icons-material/Download";

export function DownloadCurriculum() {
  return (
    <a
      href="/guilherme-evangelista-cv.pdf"
      download="Guilherme_Evangelista_CV.pdf"
      className="inline-flex items-center gap-2 bg-primary dark:bg-white dark:text-primary hover:text-gray-300 dark:hover:text-dark-secondary text-white font-medium px-4 py-2 rounded-lg transition-colors duration-200"
    >
      <DownloadIcon />
      <span>Baixar CV</span>
    </a>
  );
}
