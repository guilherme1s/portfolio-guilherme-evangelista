import { useState, type ReactNode } from "react";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { motion, AnimatePresence } from "framer-motion";
import { Divider } from "@mui/material";

interface expansionPanel {
  id: number;
  title: string;
  subtitle?: string;
  content: ReactNode;
}

interface ExpansionCardProps {
  expansionPanel: expansionPanel[];
}

export function ExpansionCard({ expansionPanel }: ExpansionCardProps) {
  const [open, setOpen] = useState<number | null>(
    expansionPanel.length > 0 ? expansionPanel[0].id : null
  );

  const handleOpenExpansion = (id: number) => {
    setOpen((prev) => (prev === id ? null : id));
  };

  return (
    <div className="rounded-xl p-6 border border-gray-300">
      {expansionPanel.map((item, index) => {
        const isLastElement = index === expansionPanel.length - 1;

        return (
          <div key={item.id} onClick={() => handleOpenExpansion(item.id)}>
            <header className="flex justify-between">
              <div
                className={`flex flex-col xl:flex-row w-full justify-between cursor-pointer transition-colors duration-300
                ${
                  open === item.id
                    ? "text-blue-500"
                    : "text-gray-800 dark:text-white hover:text-blue-500"
                }`}
              >
                <h3 className="text-2xl font-medium cursor-pointer">
                  {item.title}
                </h3>
                <h3 className="mr-2">{item.subtitle}</h3>
              </div>

              {open === item.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </header>

            <main>
              <AnimatePresence initial={false}>
                {open === item.id && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="my-4">{item.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </main>
            <div className="my-4 dark:bg-white">
              {!isLastElement && <Divider />}
            </div>
          </div>
        );
      })}
    </div>
  );
}
