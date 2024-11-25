import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Text } from "components/Text";
import { formatTime } from "./utils";
import { TimerWrapper } from "./style";

interface ITimerProps {
  initialTime: number;
  onTimeUp: () => void;
}

export const Timer = ({ initialTime, onTimeUp }: ITimerProps) => {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (time === 0) {
      // Animation on time up
      gsap
        .timeline()
        .to(timerRef.current, { scale: 1.5, duration: 0.3, ease: "power3.out" })
        .to(timerRef.current, {
          scale: 0.8,
          duration: 0.2,
          ease: "power3.inOut",
        })
        .to(timerRef.current, { scale: 1, duration: 1, ease: "power3.out" })
        .then(() => {
          onTimeUp(); // Proceed to the next question
        });
      return;
    }

    if (time <= 5) {
      // Animation triggers when there are 5 seconds left to warn the user that it will automatically proceed to the next question
      gsap.to(timerRef.current, {
        x: -5,
        duration: 0.1,
        yoyo: true,
        repeat: 5,
        ease: "power2.inOut",
      });
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, onTimeUp]);

  return (
    <TimerWrapper ref={timerRef} time={time}>
      <Text fontWeight="bold" color={time > 10 ? "dark" : "white"}>
        {formatTime(time)}
      </Text>
    </TimerWrapper>
  );
};
