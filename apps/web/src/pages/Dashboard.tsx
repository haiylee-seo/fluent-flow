// apps/web/src/pages/Dashboard.tsx
import { Sidebar } from "@/features/sidebar";
import { BlockNoteEditor } from "@/features/editor";

// 페이지는 라우팅을 위해 default export 사용
export default function DashboardPage() {
  return (
    <div className="flex h-screen w-full bg-[#fbfbfa]">
      {/* 1. 사이드바 기능 */}
      <Sidebar />

      {/* 2. 메인 컨텐츠 영역 */}
      <main className="flex-1 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto px-10 py-20">
          {/* 제목 영역 */}
          <h1 className="text-4xl font-bold mb-8 text-[#37352f]">
            오늘의 영어 일기
          </h1>

          {/* 3. 에디터 기능 */}
          <BlockNoteEditor />
        </div>
      </main>
    </div>
  );
}
