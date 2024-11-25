import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ChunksLoaderWrapper, Logo } from "./style";

export const ChunksLoader = () => {
  const logoRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const chunkLoaderWrap = document.getElementById("chunkLoaderWrap");
    if (chunkLoaderWrap) {
      chunkLoaderWrap.outerHTML = "";
    }

    if (logoRef.current) {
      gsap.to(logoRef.current, {
        scale: 0.7,
        opacity: 0,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  return (
    <ChunksLoaderWrapper justifyContent="center" alignItems="center">
      <Logo ref={logoRef} src="/assets/quiz-time-logo.svg" alt="Quiz Logo" />
    </ChunksLoaderWrapper>
  );
};
