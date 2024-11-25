import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useTheme } from "styled-components";
import { ProgressBarWrapper, Progress } from "./style";

interface IProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: IProgressBarProps) => {
  const progressRef = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  useEffect(() => {
    if (progressRef.current) {
      // Animation for progress bar width
      gsap.to(progressRef.current, {
        width: `${progress}%`,
        duration: 0.5,
        ease: "power1.out",
      });

      // Animation for updating gradient dynamically based on theme
      const startColor = `rgba(${theme.palette.warning_rgb}, 1)`;
      const endColor = `rgba(${theme.palette.success_rgb}, 1)`;

      gsap.to(progressRef.current, {
        background: `linear-gradient(90deg, ${startColor} 0%, ${endColor} ${progress}%)`,
        duration: 0.5,
        ease: "power1.out",
      });
    }
  }, [progress, theme]);

  return (
    <ProgressBarWrapper>
      <Progress ref={progressRef} progress={progress} />
    </ProgressBarWrapper>
  );
};
