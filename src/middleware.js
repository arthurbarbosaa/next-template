import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  async function middleware(req) {
    const token = req.nextauth.token;

    // Verifica rotas que precisam de pagamento
    if (req.nextUrl.pathname.startsWith("/app/premium")) {
      try {
        const paymentCheck = await fetch(
          `${process.env.NEXTAUTH_URL}/api/payment/status`,
          {
            headers: {
              Cookie: req.headers.get("cookie") || "",
            },
          }
        );

        const { hasPaid } = await paymentCheck.json();

        if (!hasPaid) {
          return NextResponse.redirect(new URL("/pricing", req.url));
        }
      } catch (error) {
        console.error("Erro ao verificar pagamento:", error);
        return NextResponse.redirect(new URL("/error", req.url));
      }
    }

    // Verifica rotas de admin
    if (req.nextUrl.pathname.startsWith("/app/admin")) {
      console.log(token);
      return token?.role === "admin"
        ? NextResponse.next()
        : NextResponse.redirect(new URL("/unauthorized", req.url));
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token, // Garantindo que apenas usuários autenticados passem
    },
    pages: {
      signIn: "/login", // Define a página de login personalizada
    },
  }
);

export const config = {
  matcher: ["/app/:path*"],
};
