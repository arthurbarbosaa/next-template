import { NextResponse } from "next/server";
import authConfig from "./auth.config";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth(async function middleware(req) {
  const session = await auth();

  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (req.nextUrl.pathname.startsWith("/app/premium")) {
    try {
      const paymentCheck = await fetch(
        `${process.env.NEXTAUTH_URL}/api/payment/status`,
        {
          headers: { Cookie: req.headers.get("cookie") || "" },
        }
      );
      const { hasPaid } = await paymentCheck.json();

      if (!hasPaid) {
        return NextResponse.redirect(new URL("/pricing", req.url));
      }
    } catch (error) {
      console.error(error);
      return NextResponse.redirect(new URL("/error", req.url));
    }
  }

  if (req.nextUrl.pathname.startsWith("/app/admin")) {
    return session?.user?.role === "admin"
      ? NextResponse.next()
      : NextResponse.redirect(new URL("/unauthorized", req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/app/:path*", "/payment/success", "/pricing"],
};
