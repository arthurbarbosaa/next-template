import { auth } from "../auth/[...nextauth]/route";
import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import prisma from "@/lib/prisma";

export async function POST(req) {
  try {
    const session = await auth();
    console.log(session);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const { priceId } = await req.json();

    // Criar sessão de checkout do Stripe
    const stripeSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price:
            process.env.NODE_ENV === "development"
              ? "price_1QFhHBEZhHiKueXgCZLptsds"
              : "",
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXTAUTH_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/pricing`,
      metadata: {
        userId: session.user.id,
      },
    });

    // Criar registro de pagamento pendente
    await prisma.payment.create({
      data: {
        userId: session.user.id,
        amount: stripeSession.amount_total / 100,
        currency: stripeSession.currency,
        status: "PENDING",
        stripePaymentId: stripeSession.id,
      },
    });

    return NextResponse.json({ url: stripeSession.url });
  } catch (error) {
    console.error("Erro ao processar pagamento:", error);
    return NextResponse.json(
      { error: "Erro ao processar pagamento" },
      { status: 500 }
    );
  }
}
