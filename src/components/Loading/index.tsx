import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Text } from "components/Text";
import { LoadingWrapper } from "./style";

export const Loading = () => {
  const loadingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 });
    tl.to(loadingRef.current, { opacity: 0.5, duration: 0.5 }).to(
      loadingRef.current,
      { opacity: 1, duration: 0.5 }
    );
  }, []);

  return (
    <LoadingWrapper
      ref={loadingRef}
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="h2" fontWeight="bold" color="white">
        Loading...
      </Text>
    </LoadingWrapper>
  );
};
