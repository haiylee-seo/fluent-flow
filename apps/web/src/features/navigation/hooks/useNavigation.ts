// import { useEffect } from "react";

// export function useOnClickOutside(ref, handler) {
//   useEffect(() => {
//     const listener = (event) => {
//       // 1. ref가 아직 연결되지 않았거나
//       // 2. 클릭한 요소(event.target)가 ref 영역의 내부라면 아무것도 하지 않음
//       if (!ref.current || ref.current.contains(event.target)) {
//         return;
//       }

//       // 3. ref 영역 바깥을 클릭했다면 전달받은 함수(handler) 실행
//       handler(event);
//     };

//     // 마우스 클릭과 터치스크린 터치 이벤트 모두 감지
//     document.addEventListener("mousedown", listener);
//     document.addEventListener("touchstart", listener);

//     // 컴포넌트가 언마운트될 때 이벤트 리스너 정리(Clean-up)
//     return () => {
//       document.removeEventListener("mousedown", listener);
//       document.removeEventListener("touchstart", listener);
//     };
//   }, [ref, handler]); // ref나 handler가 변경될 때만 훅을 다시 실행
// }
