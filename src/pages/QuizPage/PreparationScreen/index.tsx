import { useEffect, useState, useRef } from "react";
import gsap from "gsap";
import { Text } from "components/Text";
import { ScreenWrapper } from "./style";

interface IPreparationScreenProps {
  onComplete: () => void;
}

export const PreparationScreen = ({ onComplete }: IPreparationScreenProps) => {
  const [count, setCount] = useState(3);
  const countdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (count === 0) {
      clearInterval(timer);

      // Add dramatic animation before completing
      gsap.to(countdownRef.current, {
        scale: 1.5,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        onComplete: () => onComplete(), // Notify parent that preparation is complete
      });
    }

    return () => clearInterval(timer);
  }, [count, onComplete]);

  useEffect(() => {
    if (count > 0) {
      // Animate each number dramatically
      gsap.fromTo(
        countdownRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1.5, opacity: 1, duration: 0.5, ease: "back.out(2)" }
      );
      gsap.to(countdownRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.3,
        delay: 0.5,
        ease: "power3.out",
      });
    }
  }, [count]);

  return (
    <ScreenWrapper
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="h1" fontWeight="bold" color="white">
        Get ready for the quiz!
      </Text>
      <Text
        ref={countdownRef}
        fontSize="h1"
        fontWeight="bold"
        color="warning"
        mt="lg"
      >
        {count > 0 ? count : "Go!"}
      </Text>
    </ScreenWrapper>
  );
};
