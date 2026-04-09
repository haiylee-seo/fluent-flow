import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-white text-slate-900">
      {/* 사이드바 (Sidebar) */}
      <aside className="w-64 border-r border-slate-200 bg-slate-50 flex flex-col">
        <div className="p-6 font-bold text-xl tracking-tight">🖋️ London Diary</div>
        <nav className="flex-1 px-4 space-y-1">
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-200 transition-colors font-medium">
            🏠 홈
          </button>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-200 transition-colors font-medium">
            📖 모든 일기
          </button>
          <button className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-200 transition-colors font-medium text-blue-600">
            + 새 일기 작성
          </button>
        </nav>
        <div className="p-4 border-t border-slate-200">
          {/* 여기에 유저 정보나 로그아웃 버튼 */}
          <button className="text-sm text-slate-500 hover:text-slate-800">로그아웃</button>
        </div>
      </aside>

      {/* 메인 콘텐츠 (Main Content) */}
      <main className="flex-1 overflow-y-auto p-12">
        <div className="max-w-3xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}