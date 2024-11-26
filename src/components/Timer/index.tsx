import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Text } from "components/Text";
import { formatTime } from "./utils";
import { TimerWrapper } from "./style";

interface ITimerProps {
  initialTime: number;
  onTimeUp: () => void;
  shouldRun?: boolean; // Controls if the timer runs
  shouldAnimate?: boolean; // Controls if the timer animation should play
}

export const Timer = ({
  initialTime,
  onTimeUp,
  shouldRun,
  shouldAnimate,
}: ITimerProps) => {
  const [time, setTime] = useState(initialTime);
  const timerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!shouldRun) {
      // Stop the timer for already answered questions
      setTime(0);
      return;
    }

    // Reset the timer to the initial time
    setTime(initialTime);
  }, [shouldRun, initialTime]);

  useEffect(() => {
    if (time === 0) {
      if (shouldAnimate) {
        // Animation when the timer reaches 0
        gsap
          .timeline()
          .to(timerRef.current, {
            scale: 1.5,
            duration: 0.3,
            ease: "power3.out",
          })
          .to(timerRef.current, {
            scale: 0.8,
            duration: 0.2,
            ease: "power3.inOut",
          })
          .to(timerRef.current, { scale: 1, duration: 1, ease: "power3.out" })
          .then(() => {
            onTimeUp(); // Trigger onTimeUp when the timer reaches 0
          });
      } else {
        onTimeUp(); // Trigger onTimeUp without animation
      }
      return;
    }

    if (shouldRun && shouldAnimate && time <= 5) {
      // Shake animation as a warning for the last 5 seconds
      gsap.to(timerRef.current, {
        x: -5,
        duration: 0.1,
        yoyo: true,
        repeat: 5,
        ease: "power2.inOut",
      });
    }

    const timer = setInterval(() => {
      if (shouldRun) {
        setTime((prev) => (prev > 0 ? prev - 1 : 0));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time, shouldRun, shouldAnimate, onTimeUp]);

  return (
    <TimerWrapper ref={timerRef} time={time}>
      <Text fontWeight="bold" color={time > 10 ? "dark" : "white"}>
        {formatTime(time)}
      </Text>
    </TimerWrapper>
  );
};
