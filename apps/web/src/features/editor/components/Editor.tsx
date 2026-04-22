// apps/web/src/features/editor/components/Editor.tsx
import { useCreateBlockNote } from "@blocknote/react";
import { BlockNoteView } from "@blocknote/shadcn";
import "@blocknote/shadcn/style.css";

interface EditorProps {
  initialContent?: string;
  onChange: (content: string) => void;
}

// 에디터 저장 로직 + 에디터 UI
export function BlockNoteEditor({ initialContent, onChange }: EditorProps) {
  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
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
