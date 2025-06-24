import { NextRequest, NextResponse } from "next/server";

type forwardRequestType = (
  method: "GET" | "POST" | "PATCH" | "DELETE",
  req: NextRequest,
  slug: string[]
) => Promise<NextResponse<any>>;

interface IRequestParams {
  params: { slug: string[] };
}

const buildTargetUrl = (params: string[], req: NextRequest) => {
  const path = params.join("/");
  const query = req.nextUrl.search || "";

  return `${process.env.NEXT_PUBLIC_base_url_local}/${path}/${query}`;
};

const forwardRequest: forwardRequestType = async (method, req, slug) => {
  const url = buildTargetUrl(slug, req);

  const headers: HeadersInit = {
    "Content-Type": "application/json",
    Cookie: req.headers.get("cookie") || "",
  };

  const options: RequestInit = {
    method,
    headers,
  };

  if (method !== "GET" && method !== "DELETE") {
    options.body = await req.text();
  }

  const backendRes = await fetch(url, options);
  const data = await backendRes.json();

  const response = NextResponse.json(data, { status: backendRes.status });

  const setCookie = backendRes.headers.get("set-cookie");
  if (setCookie) {
    response.headers.set("set-cookie", setCookie);
  }

  return response;
};

export async function GET(req: NextRequest, { params }: IRequestParams) {
  return forwardRequest("GET", req, params.slug);
}

export async function POST(req: NextRequest, { params }: IRequestParams) {
  return forwardRequest("POST", req, params.slug);
}

export async function PATCH(req: NextRequest, { params }: IRequestParams) {
  return forwardRequest("PATCH", req, params.slug);
}

export async function DELETE(req: NextRequest, { params }: IRequestParams) {
  return forwardRequest("DELETE", req, params.slug);
}
