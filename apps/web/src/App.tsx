import { useState, useEffect } from "react";
import { supabase } from "./lib/supabaseClient";
import Layout from "./components/Layout";
import Auth from "./components/Auth";
import DiaryEditor from "./features/editor/DiaryEditor";
import "./App.css";

import type { Block } from "@notion/types";

function App() {
  const [session, setSession] = useState<any>(null);

  useEffect(() => {
    // 1. 현재 세션 가져오기(현재 세션 상태 확인)
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    // 2. 로그인 상태 변화 실시간 감지 (로그인/로그아웃 시 자동 실행)
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  // 1. 로그인 전: 로그인 화면만 보여줌
  if (!session) {
    return <Auth />;
  }

  // 2. 로그인 후: 전체 레이아웃 안에 일기 에디터를 보여줌
  return (
    <Layout user={session.user}>
      <DiaryEditor session={session} />
    </Layout>
  );
}

// import { useState } from 'react';
// import Layout from './components/Layout';
// import './App.css';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 나중에 Supabase 상태와 연결

//   if (!isLoggedIn) {
//     // 로그인 안 됐을 땐 로그인 창 (아까 만든 거 유지하거나 간단히 처리)
//     return (
//       <div className="flex min-h-screen items-center justify-center bg-slate-100">
//         <button
//           onClick={() => setIsLoggedIn(true)} // 임시로 로그인 처리
//           className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold"
//         >
//           런던 일기장 시작하기
//         </button>
//       </div>
//     );
//   }

//   return (
//     <Layout>
//       <header className="mb-8">
//         <h1 className="text-4xl font-bold text-slate-900">오늘의 생각 💭</h1>
//         <p className="text-slate-500 mt-2">2026년 4월 9일, 런던의 날씨는 맑음</p>
//       </header>

//       {/* 1번 기능: 일기 쓰기 영역 (나중에 Tiptap 에디터 들어갈 자리) */}
//       <section className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-12">
//         <textarea
//           placeholder="무슨 일이 있었나요?"
//           className="w-full bg-transparent border-none outline-none text-lg resize-none h-40"
//         />
//         <div className="flex justify-end">
//           <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700">
//             저장하기
//           </button>
//         </div>
//       </section>

//       {/* 2번 기능: 일기 목록 보기 영역 */}
//       <section>
//         <h2 className="text-xl font-semibold mb-4 text-slate-700">최근 일기</h2>
//         <div className="space-y-4">
//           <div className="p-4 border border-slate-100 rounded-xl hover:bg-slate-50 cursor-pointer transition">
//             <h3 className="font-bold">영국 박물관에 다녀오다</h3>
//             <p className="text-slate-500 text-sm">로제타 스톤은 정말 신기했다...</p>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// }

export default App;
