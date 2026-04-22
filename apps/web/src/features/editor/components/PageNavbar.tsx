// import { useState } from "react";
import { MoreHorizontal } from "lucide-react";

export function PageNavbar({ icon, title }) {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between bg-white w-full px-3 py-2">
      <div className="flex items-center gap-x-1 text-sm font-medium">
        <span>My Workspace</span> <span>/</span>{" "}
        <span>
          {icon} {title}
        </span>
      </div>
      <div className="flex items-center gap-x-2">
        <button className="px-2 py-1 rounded text-xs hover:bg-gray-100">
          공유
        </button>
        <MoreHorizontal size={18} className="text-gray-500 cursor-pointer" />
      </div>
    </nav>
  );
}
