"use client";

import SocketContext from "@/context/SocketContext";
import { useCallback, useContext, useEffect } from "react";

const useSocket = (events: string[], callback: () => void) => {
  const { socket } = useContext(SocketContext);

  //  event handler for update the data;
  const handleEvent = useCallback(
    (event: string) => () => {
      console.log(`Event received: ${event}, triggering update.`);
      callback();
    },
    [callback]
  );

  useEffect(() => {
    if (!socket) return;

    events.forEach((event) => {
      socket.on(event, handleEvent(event));
    });

    return () => {
      events.forEach((event) => {
        socket.off(event, handleEvent(event));
      });
    };
  }, [events, handleEvent, socket]);

  return socket;
};

export default useSocket;
