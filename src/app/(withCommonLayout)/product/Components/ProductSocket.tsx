"use client";
import useSocket from "@/hooks/useSocket";
import { useRouter } from "next/navigation";

export default function ProductSocket() {
  const router = useRouter();
  useSocket(["product"], () => router.refresh());
  return null;
}
