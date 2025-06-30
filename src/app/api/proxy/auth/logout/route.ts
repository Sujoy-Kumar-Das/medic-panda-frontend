import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const backendRes = await fetch(
    `${process.env.NEXT_PUBLIC_base_url_local}/auth/logout`,
    {
      method: "POST",
      headers: {
        Cookie: req.headers.get("cookie") || "",
      },
      credentials: "include",
    }
  );

  const response = NextResponse.json(await backendRes.json(), {
    status: backendRes.status,
  });

  const setCookie = backendRes.headers.get("set-cookie");

  if (setCookie) {
    response.headers.set("set-cookie", setCookie);
  }

  return response;
}
