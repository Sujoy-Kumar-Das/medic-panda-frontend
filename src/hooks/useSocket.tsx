"use client";

import { authKey } from "@/constants/auth.key";
import { getFromLocalStorage } from "@/utils/local-storage";
import { useEffect } from "react";
import { io, Socket } from "socket.io-client";

const useSocket = (events: string[], onUpdate: () => void) => {
  useEffect(() => {
    const token = getFromLocalStorage(authKey);

    const socket: Socket = io("http://localhost:5000/", {
      auth: {
        token,
      },
    });

    socket.on("connect", () => {
      console.log("Connected to socket server.");
    });

    events.forEach((event) => {
      socket.on(event, () => {
        console.log(`${event} event received, triggering update.`);
        onUpdate();
      });
    });

    return () => {
      socket.disconnect();
    };
  }, [events, onUpdate]);
};

export default useSocket;
