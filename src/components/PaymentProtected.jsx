"use client";

import { usePaymentStatus } from "@/hooks/usePaymentStatus";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentProtected({ children }) {
  const { hasPaid, loading, error } = usePaymentStatus();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !hasPaid) {
      router.push("/payment-required");
    }
  }, [hasPaid, loading, router]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error}</div>;
  }

  if (!hasPaid) {
    return null;
  }

  return children;
}
