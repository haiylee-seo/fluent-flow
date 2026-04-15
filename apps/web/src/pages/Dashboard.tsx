// apps/web/src/pages/Dashboard.tsx
// App.tsx 또는 다른 파일
// import { Sidebar, SidebarItem } from "./components"; // index 파일명 생략 가능
import { Sidebar } from "@/features/sidebar";
import { BlockNoteEditor } from "@/features/editor";
import { MoreHorizontal } from "lucide-react";

// 페이지는 라우팅을 위해 default export 사용
export default function DashboardPage() {
  return (
    <div className="flex h-dvh w-full bg-white text-[#37352f]">
      {/* 1. 사이드바 기능 */}
      <Sidebar />

      {/* 2. 메인 컨텐츠 영역 */}
      {/* <main className="flex-1 overflow-y-auto bg-white"> */}
      <main className="flex-1 h-full overflow-y-auto relative">
        {/* 네비게이션 바 */}
        <nav className="bg-white px-3 py-2 flex items-center w-full sticky top-0 z-50 justify-between">
          <div className="flex items-center gap-x-1 text-sm font-medium">
            <span>My Workspace</span> / <span>Untitled</span>
          </div>
          <div className="flex items-center gap-x-2">
            <button className="text-xs px-2 py-1 hover:bg-gray-100 rounded">
              공유
            </button>
            <MoreHorizontal
              size={18}
              className="text-gray-500 cursor-pointer"
            />
          </div>
        </nav>

        {/* 에디터 본문 */}
        <div className="max-w-3xl mx-auto mt-10 px-10">
          <div className="group relative flex flex-col gap-y-2">
            {/* 이모지/아이콘 자리 */}
            <div className="text-7xl hover:opacity-75 transition cursor-pointer mb-2">
              📄
            </div>
            {/* 제목 영역 */}
            <textarea
              placeholder="제목 없음"
              className="text-5xl font-bold bg-transparent resize-none outline-none break-words"
              rows={1}
            />
            {/* 본문 시작 영역 */}
            <div className="mt-4 text-lg">
              <p className="text-[#37352f]/40">
                명령어를 사용하려면 '/'를 입력하세요...
              </p>
            </div>
          </div>
        </div>
        {/* ----------------------------- */}
        <div className="max-w-4xl mx-auto px-10 py-20">
          {/* 제목 영역 */}
          <h1 className="text-4xl font-bold mb-8 text-[#37352f]">
            오늘의 영어 일기ㅇ
          </h1>

          {/* 3. 에디터 기능 */}
          <BlockNoteEditor />
        </div>
      </main>
    </div>
  );
}
