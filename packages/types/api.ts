// 1. Prisma와 호환되는 완벽한 JSON 타입 정의
export type JsonValue =
  | string
  | number
  | boolean
  | null
  | { [key: string]: JsonValue }
  | JsonValue[];

// 2. 프론트엔드와 백엔드가 공유할 DTO
export interface UpdatePostDto {
  title?: string;
  icon?: string;
  content?: JsonValue;
}
