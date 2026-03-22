import { useState } from "react";
import type { ImgHTMLAttributes } from "react";
import { NoImageCard } from "./NoImage";

interface ProjectCardProps extends ImgHTMLAttributes<HTMLImageElement> {
  title: string;
  description?: string;
  deployUrl?: string;
  projectUrl: string;
  image?: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  deployUrl,
  projectUrl,
  tags,
  image,
}: ProjectCardProps) {
  const [showAllTags, setShowAllTags] = useState(false);

  const maxVisible = 3;

  const visibleTags = showAllTags ? tags : tags.slice(0, maxVisible);
  const hiddenCount = tags.length - maxVisible;

  return (
    <div className="rounded-xl border border-gray-300 w-full h-full flex flex-col">
      <div>
        {image ? (
          <img
            src={image}
            alt={title}
            className="rounded-tl-xl rounded-tr-xl border-b border-gray-300 w-full"
          />
        ) : (
          <NoImageCard />
        )}
      </div>

      <main className="p-6 flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl">{title}</h1>

          <div className="flex gap-2 flex-wrap">
            {visibleTags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md text-sm font-medium
                bg-blue-100 text-blue-800 border border-secondary
                hover:bg-blue-200 transition"
              >
                {tag}
              </span>
            ))}

            {!showAllTags && hiddenCount > 0 && (
              <button
                onClick={() => setShowAllTags(true)}
                className="px-3 py-1 rounded-md text-sm font-medium
                bg-gray-200 text-gray-800 hover:bg-gray-300 transition"
              >
                +{hiddenCount}
              </button>
            )}
          </div>

          {description && <p>{description}</p>}
        </div>

        <div className="flex gap-2 mt-8">
          {deployUrl && (
            <a
              href={deployUrl}
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer p-2 w-1/2 rounded-lg text-white bg-primary hover:text-gray-300 transition-colors duration-100 text-center"
            >
              Ver deploy
            </a>
          )}

          <a
            href={projectUrl}
            target="_blank"
            rel="noreferrer"
            className={`p-2 cursor-pointer rounded-lg text-white hover:text-gray-300 transition-colors duration-100 bg-primary text-center
            ${deployUrl ? "w-1/2" : "w-full"}`}
          >
            Ver código
          </a>
        </div>
      </main>
    </div>
  );
}
