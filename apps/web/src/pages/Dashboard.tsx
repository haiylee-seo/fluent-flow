// apps/web/src/pages/Dashboard.tsx
// App.tsx 또는 다른 파일
// import { Sidebar, SidebarItem } from "./components"; // index 파일명 생략 가능
import { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "@/features/sidebar";
import { PageHeader, PageNavbar } from "@/features/editor";
import { BlockNoteEditor } from "@/features/editor";
import { useDebounce } from "@/hooks";
// import { MoreHorizontal } from "lucide-react";

// 페이지는 라우팅을 위해 default export 사용
export default function DashboardPage() {
  // 문서 전체의 데이터를 상위에서 관리
  // 동작 원리 요약
  // 에디터에 안녕이라고 치면 onChange가 발생하여 docData.content가 실시간으로 바뀝니다. (화면에 즉시 반영됨)
  // 하지만 useDebounce가 1초 동안 기다리고 있기 때문에, API 요청(useEffect)은 당장 실행되지 않습니다.
  // 사용자가 입력을 멈추고 1초가 지나면 비로소 debouncedDocData가 업데이트되고, 이때 NestJS 백엔드로 PATCH (또는 PUT) 요청이 날아갑니다.

  // 현재 작성 중인 문서의 ID를 기억하는 상태 (처음엔 빈 화면이니 null)
  const [postId, setPostId] = useState<string | null>(null);

  // 1. 현재 화면에 보여지는(실시간으로 타이핑되는) 상태
  const [docData, setDocData] = useState({
    icon: "📄", // 기본 이모지
    title: "",
    content: "", // 나중에 본문 에디터가 들어갈 자리
  });

  // 2. 디바운스가 적용된 상태 (사용자가 타이핑을 멈추고 1초(1000ms) 뒤에 업데이트됨)
  // 객체 전체를 디바운스 처리합니다.
  const debouncedDocData = useDebounce(docData, 1000);

  // 3. 디바운스된 데이터가 변경될 때마다 백엔드로 API 요청을 보냅니다.
  useEffect(() => {
    // 최초 렌더링 시 빈 데이터가 전송되는 것을 막기 위한 간단한 방어 로직
    if (!debouncedDocData.title && !debouncedDocData.content) return;

    const saveToServer = async () => {
      try {
        // console.log("🚀 NestJS 서버로 저장 요청 보냄:", debouncedDocData);
        // TODO: 여기에 실제 API 통신 코드가 들어갑니다.
        // await axios.patch(`/api/pages/${pageId}`, debouncedDocData);
        if (postId) {
          // 2. 이미 ID가 있다면? -> 기존 글 수정 (PATCH)
          await axios.patch(
            `http://localhost:3000/posts/${postId}`,
            debouncedDocData,
          );
          console.log("✅ 저장(업데이트) 완료!");
        } else {
          // 1. ID가 없다면? -> 새 글 쓰기니까 생성 (POST)
          const response = await axios.post(
            `http://localhost:3000/posts`,
            debouncedDocData,
          );
          console.log("✨ 새 글 생성 완료! ID:", response.data.id);

          // 서버가 만들어준 새 글의 ID를 받아서 저장!
          // (이제 다음 디바운스부터는 위쪽의 PATCH 로직을 타게 됩니다)
          setPostId(response.data.id);
        }
      } catch (error) {
        console.error("저장 실패:", error);
      }
    };

    saveToServer();
  }, [debouncedDocData, postId]); // debouncedDocData가 바뀔 때만 실행됨

  return (
    <div className="flex h-dvh w-full bg-white text-[#37352f]">
      {/* 1. 사이드바 기능 */}
      <Sidebar />

      {/* 2. 메인 컨텐츠 영역 */}
      {/* <main className="flex-1 overflow-y-auto bg-white"> */}
      <main className="relative flex-1 h-full overflow-y-auto">
        {/* 네비게이션 바 */}
        <PageNavbar icon={docData.icon} title={docData.title} />

        {/* 에디터 본문 */}
        <div className="flex flex-col w-full gap-y-2">
          {/* 자식 컴포넌트에게 값과 변경 함수를 전달 */}
          <PageHeader
            icon={docData.icon}
            title={docData.title}
            onIconChange={(newIcon) =>
              setDocData({ ...docData, icon: newIcon })
            }
            onTitleChange={(newTitle) =>
              setDocData({ ...docData, title: newTitle })
            }
          />
          {/* <div className="group relative"> */}
          {/* 이모지/아이콘 자리 */}
          {/* <div className="text-7xl hover:opacity-75 transition cursor-pointer mb-2">
              📄
            </div> */}
          {/* 제목 영역 */}
          {/* <textarea
              placeholder="제목 없음"
              className="text-5xl font-bold bg-transparent resize-none outline-none break-words"
              rows={1}
            /> */}
          {/* 3. 에디터 기능 */}
          <BlockNoteEditor
            initialContent={docData.content}
            onChange={(newContent) =>
              setDocData({ ...docData, content: newContent })
            }
            // onChange={(content) => {
            //   // 임시로 콘솔에 찍어보거나, 상태(State)에 저장하도록 연결
            //   console.log("에디터 내용 변경됨:", content);
            // }}
          />
          {/* 본문 시작 영역 */}
          {/* <div className="mt-4 text-lg">
            <p className="text-[#37352f]/40">
              명령어를 사용하려면 '/'를 입력하세요...
            </p>
          </div> */}
          {/* </div> */}
        </div>
        {/* ----------------------------- */}
        {/* <div className="max-w-4xl mx-auto px-10 py-20"> */}
        {/* 제목 영역 */}
        {/* <h1 className="text-4xl font-bold mb-8 text-[#37352f]"> */}
        {/* 오늘의 영어 일기ㅇ */}
        {/* </h1> */}

        {/* 3. 에디터 기능 */}
        {/* <BlockNoteEditor /> */}
        {/* </div> */}
      </main>
    </div>
  );
}
