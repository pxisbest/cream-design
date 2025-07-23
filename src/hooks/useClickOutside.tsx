import { useEffect, type RefObject } from "react";

const useClickOutside = (
  ref: RefObject<HTMLElement | null>,
  handler: (event: MouseEvent) => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return; // 如果点击的是ref元素内部，则不执行handler
      } else {
        handler(event); // 如果点击的是ref元素外部，则执行handler
      }
    };
    document.addEventListener("click", listener); // 监听鼠标按下事件
    return () => {
      document.removeEventListener("click", listener); // 清理事件监听器
    };
  }, [ref, handler]);
};

export default useClickOutside;
