import * as motion from "motion/react-client";
import { ReactNode } from "react";

interface AnimateLoadingButtonProps {
  isLoading: boolean;
  children: ReactNode;
  loadingScalePattern?: number[];
}
export default function AnimateLoadingButton({
  isLoading,
  children,
  loadingScalePattern = [1, 1.2, 1],
}: AnimateLoadingButtonProps) {
  return (
    <motion.div
      animate={
        isLoading
          ? {
              scale: loadingScalePattern,
              opacity: [1, 0.8, 1],
            }
          : { scale: 1, opacity: 1 }
      }
      transition={
        isLoading
          ? {
              duration: 0.8,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }
          : { duration: 0.3 }
      }
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {children}
    </motion.div>
  );
}
