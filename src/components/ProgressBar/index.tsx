import { useEffect, useRef } from "react";
import { ProgressBarWrapper, Progress } from "./style";
import gsap from "gsap";

interface IProgressBarProps {
  progress: number; // Value between 0 and 100
}

export const ProgressBar = ({ progress }: IProgressBarProps) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      // Animate the progress bar width
      gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: "power1.out",
      });

      // Update gradient dynamically based on progress
      gsap.to(progressRef.current, {
        background: `linear-gradient(90deg, rgba(253, 195, 0, 1) 0%, rgba(76, 175, 80, 1) ${progress}%)`,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [progress]);

  return (
    <ProgressBarWrapper>
      <Progress ref={progressRef} progress={progress} />
    </ProgressBarWrapper>
  );
};
