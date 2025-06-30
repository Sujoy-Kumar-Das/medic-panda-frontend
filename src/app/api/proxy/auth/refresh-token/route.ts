import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const backendRes = await fetch(
    `${process.env.NEXT_PUBLIC_base_url_local}/auth/refresh-token`,
    {
      method: "POST",
      headers: {
        Cookie: req.headers.get("cookie") || "",
        "Content-Type": "application/json",
      },
      credentials: "include",
    }
  );

  const data = await backendRes.json();
  const response = NextResponse.json(data, { status: backendRes.status });

  const setCookie = backendRes.headers.get("set-cookie");
  if (setCookie) {
    response.headers.set("set-cookie", setCookie);
  }

  return response;
}
