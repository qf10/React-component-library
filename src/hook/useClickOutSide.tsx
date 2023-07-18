import { RefObject, useEffect } from "react";

const useClickOutSide = (ref: RefObject<HTMLElement>, callBack: Function) => {
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!ref.current || ref.current.contains(e.target as HTMLElement)) return;
      callBack(e);
    };

    document.addEventListener("click", handler);

    return () => {
      document.removeEventListener("click", handler);
    };
  });
};

export default useClickOutSide;
