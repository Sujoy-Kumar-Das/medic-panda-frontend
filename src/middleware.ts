import { jwtDecode } from "jwt-decode";
import { NextResponse, type NextRequest } from "next/server";
import { authKey } from "./constants/auth.key";
import getTokenFromCookie from "./services/actions/getTokenFromCookie";

type Role = keyof typeof roleBasedPrivateRoutes;

const AuthRoutes = ["/register/login", "/register/create-account"];

const commonPrivateRoutes = ["/dashboard", "/dashboard/security"];

const roleBasedPrivateRoutes = {
  USER: [/^\/dashboard\/user/],
  ADMIN: [/^\/dashboard\/admin/],
  SUPER_ADMIN: [/^\/dashboard\/admin/],
};

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const accessToken = getTokenFromCookie(authKey);

  if (!accessToken) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/register/login", request.url));
    }
  }

  if (
    accessToken &&
    commonPrivateRoutes.includes(pathname) &&
    commonPrivateRoutes.some((route) => route.startsWith(pathname))
  ) {
    return NextResponse.next();
  }

  let decodedData = null;

  if (accessToken) {
    decodedData = jwtDecode(accessToken) as any;
  }

  const role = decodedData?.role;

  if (role && roleBasedPrivateRoutes[role as Role]) {
    const routes = roleBasedPrivateRoutes[role as Role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/register/login", "/register/create-account", "/dashboard/:page*"],
};
