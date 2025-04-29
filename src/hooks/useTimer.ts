import { getFromLocalStorage } from "@/utils/local-storage";
import { useCallback, useEffect, useState } from "react";

interface useTimerOptions {
  initialTime?: number;
  storageKey?: string;
}

export const useTimer = ({
  initialTime = 120,
  storageKey = "retry-timer",
}: useTimerOptions = {}) => {
  const getSavedTimer = () => {
    const saved = getFromLocalStorage(storageKey);
    const parsed = saved ? JSON.parse(saved) : null;

    if (parsed && parsed.expiresAt) {
      const remaining = Math.floor((parsed.expiresAt - Date.now()) / 1000);
      return remaining > 0 ? remaining : 0;
    }
    return 0;
  };

  const [timer, setTimer] = useState<number>(getSavedTimer);
  const [canRetry, setCanRetry] = useState<boolean>(getSavedTimer() === 0);

  useEffect(() => {
    let countdown: NodeJS.Timeout;

    if (timer > 0) {
      countdown = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else if (timer === 0 && !canRetry) {
      setCanRetry(true);
      localStorage.removeItem(storageKey);
    }

    return () => {
      clearInterval(countdown);
    };
  }, [timer, canRetry, storageKey]);

  const startTimer = useCallback(() => {
    if (canRetry) {
      const expiresAt = Date.now() + initialTime * 1000;
      localStorage.setItem(storageKey, JSON.stringify({ expiresAt }));
      setTimer(initialTime);
      setCanRetry(false);
    }
  }, [canRetry, initialTime, storageKey]);

  return {
    timer,
    canRetry,
    startTimer,
  };
};
