// import { useRef, useCallback } from "react";
import { useState, useRef } from "react";
import TextareaAutosize from "react-textarea-autosize";
import EmojiPicker from "emoji-picker-react";
import type { EmojiClickData } from "emoji-picker-react"; // 이모지 라이브러리에서 전용 타입 임포트
// import { useOnClickOutside } from "@/features/navigation";
import { useOnClickOutside } from "@/hooks";

// 컴포넌트 상단에 타입 정의 추가
interface PageHeaderProps {
  icon: string;
  title: string;
  onIconChange: (icon: string) => void;
  onTitleChange: (title: string) => void;
}

export function PageHeader({
  icon,
  title,
  onIconChange,
  onTitleChange,
}: PageHeaderProps) {
  // const textareaRef = useRef(null);

  // const handleResizeHeight = useCallback(() => {
  //   if (textareaRef.current) {
  //     // 1. 높이를 초기화 (글자를 지웠을 때 줄어들게 하기 위함)
  //     textareaRef.current.style.height = "auto";
  //     // 2. 내부 콘텐츠(scrollHeight)만큼 높이를 다시 설정
  //     textareaRef.current.style.height =
  //       textareaRef.current.scrollHeight + "px";
  //   }
  // }, []);
  // 이모지 피커를 띄울지 말지 결정하는 UI 상태 (이건 하위에서 관리하는 게 깔끔합니다)
  const [showPicker, setShowPicker] = useState(false);

  // 1. 이모지 피커 영역을 가리킬 DOM 참조(Ref) 생성
  const pickerRef = useRef(null);

  // 2. 커스텀 훅 적용: pickerRef 바깥을 클릭하면 상태를 false로 변경하여 창 닫기
  useOnClickOutside(pickerRef, () => setShowPicker(false));

  const handleEmojiClick = (emojiObject: EmojiClickData) => {
    onIconChange(emojiObject.emoji); // 상위 컴포넌트의 상태 업데이트
    setShowPicker(false); // 선택 후 피커 닫기
  };

  return (
    <div className="relative flex items-start gap-x-2 mx-12 pt-4 pb-3 border-b border-b-gray-200">
      {/* 이모지/아이콘 자리 */}
      <button
        onClick={() => setShowPicker(!showPicker)}
        className="px-1 py-0.5 text-2xl hover:bg-gray-100 rounded-lg transition-colors duration-200  cursor-pointer"
      >
        {icon}
      </button>

      {/* 2. 이모지 피커 모달 */}
      {showPicker && (
        <div
          ref={pickerRef}
          className="absolute top-13 left-0 z-50 shadow-xl rounded-lg"
        >
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
            autoFocusSearch={false} // 렌더링 시 스크롤 튀는 현상 방지
          />
        </div>
      )}
      {/* 3. 제목 입력창 (이전 코드 활용) */}
      <TextareaAutosize
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        placeholder="제목을 입력하세요"
        className="w-full text-2xl font-bold bg-transparent resize-none outline-none wrap-break-word overflow-hidden"
      />
      {/* <div className="text-2xl group-hover:opacity-75 transition cursor-pointer">
        📄
      </div> */}
      {/* 제목 영역 */}
      {/* <TextareaAutosize
        placeholder="제목을 입력하세요"
        className="w-full text-2xl font-bold bg-transparent resize-none outline-none wrap-break-word overflow-hidden"
      /> */}
      {/* <textarea
        ref={textareaRef}
        onChange={handleResizeHeight}
        placeholder="제목을 입력하세요"
        className="w-full text-2xl font-bold bg-transparent resize-none outline-none wrap-break-word overflow-hidden"
        rows={1}
      /> */}
    </div>
  );
}
