import type { ImgHTMLAttributes } from "react";

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {}

export function Avatar({ ...props }: AvatarProps) {
  return (
    <div className="flex-1 justify-center items-center flex">
      <img
        {...props}
        className="rounded-full border-4 border-white outline-4 outline-primary"
        alt="Imagem perfil Guilherme Evangelista"
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
