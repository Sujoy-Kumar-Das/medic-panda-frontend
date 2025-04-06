import SocketContext from "@/context/SocketContext";
import { ReactNode, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export default function SocketProvider({ children }: { children: ReactNode }) {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io(process.env.NEXT_PUBLIC_Socket_Link);

    setSocket(newSocket);

    newSocket.on("connect", () =>
      console.log(" Connected to Socket.IO server")
    );
    newSocket.on("disconnect", () =>
      console.log(" Disconnected from Socket.IO")
    );
    newSocket.on("connect_error", (err) =>
      console.error(" Connection error:", err)
    );

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
}
