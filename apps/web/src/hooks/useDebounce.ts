import { useState, useEffect } from "react";

// 제네릭(<T>)을 사용해서 문자열이든, 객체든 다 받을 수 있게 만듭니다.
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    // delay(예: 1000ms) 시간이 지나면 값을 업데이트하는 타이머 설정
    const timer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // 만약 delay 시간이 지나기 전에 사용자가 또 타이핑을 해서 value가 바뀌면,
    // 기존 타이머를 취소하고 다시 처음부터 기다립니다. (이게 디바운스의 핵심!)
    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debouncedValue;
}
