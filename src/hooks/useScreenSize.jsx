import { useEffect, useState } from "react";

export default function useScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleReSize);

    return () => {
      window.addEventListener("resize", handleReSize);
    };
  }, []);

  const handleReSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  return { width, height };
}
