"use client";

import { authKey } from "@/constants/auth.key";
import createSocketConnection from "@/utils/createSocketConnection";
import { getFromLocalStorage } from "@/utils/local-storage";
import { useEffect } from "react";
import { Socket } from "socket.io-client";

const useSocket = (events: string[], onUpdate: () => void) => {
  useEffect(() => {
    const socket = createSocketConnection();

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
