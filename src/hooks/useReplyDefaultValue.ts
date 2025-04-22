"use client";
import { useGetReplyDetailsQuery } from "@/redux/api";
import { useEffect, useState } from "react";

export default function useReplyDefaultValue(id: string) {
  const { data } = useGetReplyDetailsQuery(id);

  const [defaultValue, setDefaultValue] = useState<{ reply: string } | null>(
    null
  );

  useEffect(() => {
    if (!data) {
      setDefaultValue(null);
      return;
    }
    setDefaultValue({
      reply: data?.reply,
    });
  }, [data]);

  return { defaultValue };
}
