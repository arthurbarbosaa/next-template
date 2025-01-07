import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
    }

    const payment = await prisma.payment.findFirst({
      where: {
        userId: session.user.id,
        status: "COMPLETED",
      },
    });

    return NextResponse.json({ hasPaid: !!payment });
  } catch (error) {
    console.error("Erro ao verificar status do pagamento:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
