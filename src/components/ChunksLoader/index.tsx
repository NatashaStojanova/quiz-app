import { useEffect } from "react";
import { ChunksLoaderWrapper, Logo } from "./style";

export const ChunksLoader = () => {
  useEffect(() => {
    if (document.getElementById("chunkLoaderWrap")) {
      const element = document.getElementById("chunkLoaderWrap");
      element!.outerHTML = "";
    }
  }, []);

  return (
    <ChunksLoaderWrapper justifyContent="center" alignItems="center">
      <Logo />
    </ChunksLoaderWrapper>
  );
};
