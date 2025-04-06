"use client";
import { socketEvent } from "@/constants/socket-events";
import useSocket from "@/hooks/useSocket";
import { TTagTypes } from "@/redux/tag-types";
import { revalidateTagFunc } from "@/services/actions/revalidateTagFunc";

export default function ProductSocket() {
  useSocket([socketEvent.product], () => {
    revalidateTagFunc(TTagTypes.product);
  });

  return null;
}
