// apps/web/src/features/editor/components/Editor.tsx
import type { PartialBlock } from "@blocknote/core";
// 상단에 모노레포 글로벌 타입 임포트
import type { JsonValue } from "@fluent-flow/types";
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

// 컴포넌트 상단에 타입 정의 추가 (기존 string -> JsonValue로 변경)
interface EditorProps {
  initialContent?: JsonValue;
  onChange: (content: JsonValue) => void;
}

// 에디터 저장 로직 + 에디터 UI
export function BlockNoteEditor({ initialContent, onChange }: EditorProps) {
  const editor = useCreateBlockNote({
    initialContent: initialContent
      ? (initialContent as PartialBlock[])
      : undefined,
  });

  return (
    <div className="w-full min-h-[500px] px-1">
      {/*  pt-2.5 [&_.bn-editor]:px-0! [&_.bn-editor]:py-2! */}
      <BlockNoteView
        editor={editor}
        theme="light"
        onChange={() => {
          onChange(JSON.stringify(editor.document));
        }}
      />
      {/* <p className="text-gray-400 italic text-sm">에디터가 준비 중입니다...</p> */}
    </div>
  );
}
