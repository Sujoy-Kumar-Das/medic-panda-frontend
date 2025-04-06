import { authKey } from "@/constants/auth.key";
import { getFromLocalStorage } from "@/utils/local-storage";
import { io, Socket } from "socket.io-client";

// Function to create and return a socket connection
const createSocketConnection = (): Socket => {
  const socket: Socket = io(process.env.NEXT_PUBLIC_Socket_Link);

  // Return the socket instance
  return socket;
};

export default createSocketConnection;
