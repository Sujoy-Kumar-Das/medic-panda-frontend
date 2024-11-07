"use client";
import { useGetMeQuery } from "@/redux/api/myProfile.api";
import { IGenericErrorResponse } from "@/types";
import { useEffect } from "react";
import io from "socket.io-client";
import UserInfoHOC from "./Components/UserInfoHOC";

export default function MyProfilePage() {
  // get user data
  const { data, isLoading, error } = useGetMeQuery(undefined);

  useEffect(() => {
    const socket = io("http://localhost:5000/");

    // Listen for the connect event
    socket.on("connect", () => {
      console.log("Socket connected with ID:", socket.id);
    });

    // Listen for the "check-connection" event from the server
    socket.on("check-connection", () => {
      console.log("Socket connection checked.");
    });

    // Clean up the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);
  // Empty dependency array means this runs once on mount

  return (
    <UserInfoHOC
      data={data}
      isLoading={isLoading}
      error={error as IGenericErrorResponse}
      noDataLink="/register/login"
      noDataMessage="You Are Not Authorize User."
      noDataText="Login Now"
    />
  );
}
