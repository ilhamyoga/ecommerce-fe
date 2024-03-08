import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedRoutes = ["/dashboard"];

export default function middleware(req: NextRequest) {
  const isAuthenticated = false;
  if (!isAuthenticated && protectedRoutes.includes(req.nextUrl.pathname)) {
    const absoluteURL = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }
}