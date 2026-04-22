export * from "./api";

// 예시: 노션 블록 타입
export interface Block {
  id: string;
  content: string;
  type: "text" | "image" | "todo";
}
