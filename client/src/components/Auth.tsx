import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

function Auth() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Supabase의 매직 링크(이메일 로그인) 기능 사용
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert('로그인 이메일을 보냈습니다! 편지함을 확인해주세요.');
    }
    setLoading(false);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-slate-900 mb-6">
          런던 일기장 🇬🇧
        </h2>
        <p className="text-slate-500 text-center mb-8">
          오늘의 생각을 기록하기 위해 로그인하세요.
        </p>
        
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="이메일 주소를 입력하세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <button
            disabled={loading}
            className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-bold hover:bg-blue-700 transition disabled:bg-blue-300"
          >
            {loading ? '전송 중...' : '매직 링크 발송하기'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Auth;