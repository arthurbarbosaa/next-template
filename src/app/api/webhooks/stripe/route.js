import { headers } from "next/headers";
import { NextResponse } from "next/server";
import stripe from "@/lib/stripe";
import prisma from "@/lib/prisma";

export async function POST(req) {
  const body = await req.text();
  const signature = headers().get("stripe-signature");

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (error) {
    console.error("Erro webhook:", error);
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    // Atualizar o status do pagamento
    await prisma.payment.update({
      where: {
        stripePaymentId: session.id,
      },
      data: {
        status: "COMPLETED",
      },
    });
  }

  return NextResponse.json({ received: true });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
