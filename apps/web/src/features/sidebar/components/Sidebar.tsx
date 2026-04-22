// apps/web/src/features/sidebar/components/Sidebar.tsx
import { useState } from "react";
import { SidebarItem } from "./SidebarItem";
import {
  ChevronRight,
  ChevronLeft,
  Search,
  Clock,
  Settings,
  PlusCircle,
} from "lucide-react";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  // const addNewPage = () => {
  //   /* 페이지 추가 로직 */
  // };

  return (
    <aside
      className={`flex flex-col h-full bg-[#fbfbfa] group/sidebar overflow-y-auto transition-all ease-in-out duration-300 ${!isCollapsed ? "w-60" : ""}}`}
    >
      <div
        className={`flex items-center ${isCollapsed ? "justify-center" : "justify-between"} gap-x-2 px-3 pt-5 pb-2`}
      >
        {/* logo */}
        {!isCollapsed && (
          <p className="font-semibold text-[#37352f]">Fluent-Flow</p>
        )}

        {/* 사이드바 접기 버튼 */}
        <div
          onClick={() => setIsCollapsed((prev) => !prev)}
          role="button"
          className={`${isCollapsed ? "opacity-100" : ""} h-6 w-6 rounded-sm text-muted-foreground opacity-0 cursor-pointer hover:bg-neutral-300 group-hover/sidebar:opacity-100 transition`}
        >
          {isCollapsed ? (
            <ChevronRight className="h-6 w-6 text-muted-foreground" />
          ) : (
            <ChevronLeft className="h-6 w-6" />
          )}
        </div>
      </div>

      {/* 사이드바 메뉴 예시 */}
      <nav className="mt-3 px-3">
        <SidebarItem
          icon={<Search size={18} />}
          label={!isCollapsed ? "검색" : ""}
          to="/temp"
        />
        <SidebarItem
          icon={<Clock size={18} />}
          label={!isCollapsed ? "업데이트" : ""}
          to="/temp"
        />
        <SidebarItem
          icon={<Settings size={18} />}
          label={!isCollapsed ? "설정" : ""}
          to="/temp"
        />
        <SidebarItem
          icon={<PlusCircle size={18} />}
          label={!isCollapsed ? "새 페이지" : ""}
        />
      </nav>
    </aside>
  );
}
