// import { useState } from 'react';

// session을 props로 받아서 누가 일기를 쓰는지 알 수 있게 합니다.
function DiaryEditor({ session }: { session: any }) {
  return (
    <>
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-slate-900">오늘의 생각 💭</h1>
        <p className="text-slate-500 mt-2">2026년 4월 9일, 런던의 날씨는 맑음</p>
        <p className="text-xs text-blue-600 mt-1">{session.user.email} 계정으로 접속 중</p>
      </header>
      
      {/* 1번 기능: 일기 쓰기 영역 */}
      <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
        <textarea 
          placeholder="무슨 일이 있었나요?" 
          className="w-full bg-transparent border-none outline-none text-lg resize-none h-40"
        />
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
            저장하기
          </button>
        </div>
      </section>

      {/* 2번 기능: 일기 목록 보기 영역 */}
      <section>
        <h2 className="text-xl font-semibold mb-4 text-slate-700">최근 일기</h2>
        <div className="space-y-4">
          <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer transition">
            <h3 className="font-bold">영국 박물관에 다녀오다</h3>
            <p className="text-slate-500 text-sm">로제타 스톤은 정말 신기했다...</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default DiaryEditor;