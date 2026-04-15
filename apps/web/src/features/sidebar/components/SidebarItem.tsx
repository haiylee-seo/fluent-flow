// 사이드바 아이템 컴포넌트
import { NavLink } from "react-router-dom";

// 1. Props 타입 정의
interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  to?: string; // 이동할 경로 (선택적)
  onClick?: () => void; // 클릭 시 실행할 함수 (선택적)
}

export function SidebarItem({ icon, label, to, onClick }: SidebarItemProps) {
  const baseClass = `flex items-center h-11 p-2 rounded-md cursor-pointer group hover:bg-black/5`;

  // 1. 페이지 이동용 (to가 있는 경우)
  if (to) {
    return (
      <NavLink to={to} className={baseClass}>
        <span className="text-gray-500 group-hover:text-[#37352f] transition">
          {icon}
        </span>
        {label && <span className="ml-2 text-sm font-medium">{label}</span>}
      </NavLink>
    );
  }

  // 2. 액션 버튼용 (onClick이 있는 경우 - 새 페이지 생성 등)
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClass} w-full text-blue-600`}
    >
      <span className="text-gray-500 group-hover:text-[#37352f] transition">
        {icon}
      </span>
      {label && <span className="ml-2 text-sm font-medium">{label}</span>}
    </button>
  );
}

// const SidebarItem = ({
//   icon,
//   label,
//   isNewPage,
// }: {
//   icon: React.ReactNode;
//   label: string;
//   isNewPage?: boolean;
// }) => (
//   <div
//     className={`flex items-center gap-x-2 p-2 hover:bg-black/5 rounded-md cursor-pointer group ${isNewPage ? "text-blue-600" : ""}`}
//   >
//     <span className="text-gray-500 group-hover:text-[#37352f] transition">
//       {icon}
//     </span>
//     <span className="text-sm font-medium">{label}</span>
//   </div>
// );
