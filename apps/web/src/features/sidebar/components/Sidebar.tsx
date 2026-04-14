// apps/web/src/features/sidebar/components/Sidebar.tsx
import { Button } from "@/components/Button"; // 공용 부품을 가져옴

export function Sidebar() {
  const addNewPage = () => {
    /* 페이지 추가 로직 */
  };

  return (
    <aside className="w-64 border-r bg-[#f7f7f5] flex flex-col">
      <div className="p-4 font-semibold text-[#37352f]">Fluent-Flow</div>
      <nav className="flex-1 overflow-y-auto">
        <div className="px-4 py-1 hover:bg-gray-200 cursor-pointer text-sm">
          Getting Started
        </div>
        {/* 공용 부품인 Button을 가져와서 '페이지 추가'라는 기능을 부여함 */}
        <Button label="New Page" onClick={addNewPage} />
      </nav>
    </aside>
  );
}
