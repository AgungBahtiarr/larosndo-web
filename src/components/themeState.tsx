import type { ReactNode } from "react";
import Navbar from "@/components/navbar";

export function ThemeState({ children }: { children?: ReactNode }) {
  return (
    <div className="bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Navbar />
      {children}
    </div>
  );
}

export default ThemeState;
