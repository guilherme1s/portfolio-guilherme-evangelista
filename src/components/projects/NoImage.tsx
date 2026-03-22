import { Code } from "phosphor-react";

export function NoImageCard() {
  return (
    <div className="w-full aspect-[16/10] flex flex-col items-center justify-center gap-2 bg-gray-100 border-b border-gray-300 rounded-tl-xl rounded-tr-xl">
      <Code size={30} className="text-gray-400" />

      <p className="text-lg text-gray-500 text-center px-2">Sem preview</p>
    </div>
  );
}
