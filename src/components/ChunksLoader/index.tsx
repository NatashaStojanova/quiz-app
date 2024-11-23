import { useEffect } from "react";
import { ChunksLoaderWrap, Logo } from "./style";

export const ChunksLoader = () => {
  useEffect(() => {
    if (document.getElementById("chunkLoaderWrap")) {
      const element = document.getElementById("chunkLoaderWrap");
      element!.outerHTML = "";
    }
  }, []);

  return (
    <ChunksLoaderWrap justifyContent="center" alignItems="center">
      <Logo />
    </ChunksLoaderWrap>
  );
};
