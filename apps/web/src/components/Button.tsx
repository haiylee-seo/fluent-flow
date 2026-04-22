// import { Button } from "@/components/Button"; // 공용 부품을 가져옴
// export function Button({ label, onClick }) {
//   return (
//     <button className="bg-blue-500 p-2" onClick={onClick}>
//       {label}
//     </button>
//   );
// }

// Button.tsx
// const COLORS = {
//     primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
//     secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
//     outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
//   };

//   const SIZES = {
//     sm: "px-3 py-1 text-sm",
//     md: "px-4 py-2 text-base",
//     lg: "px-6 py-3 text-lg",
//   };

//   export default function Button({ color = "primary", size = "md", children, className = "" }) {
//     // 공통 스타일 (항상 들어가는 것)
//     const baseStyle = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:ring-2 focus:ring-offset-2";

//     // 선택된 스타일들을 합치기
//     const combinedClass = `${baseStyle} ${COLORS[color]} ${SIZES[size]} ${className}`;

//     return <button className={combinedClass}>{children}</button>;
//   }

// export function Button({
//     color = "primary",
//     size = "md",
//     children,
//     className = "",
//     ...props // 나머지 모든 속성(onClick, type, disabled 등)을 받음
//   }) {
//     const baseStyle = "inline-flex items-center justify-center rounded-md font-medium transition-all focus:ring-2 focus:ring-offset-2";
//     const combinedClass = `${baseStyle} ${COLORS[color]} ${SIZES[size]} ${className}`;

//     return (
//       <button className={combinedClass} {...props}>
//         {children}
//       </button>
//     );
//   }
