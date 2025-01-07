"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

export function usePaymentStatus() {
  const { data: session } = useSession();
  const [paymentStatus, setPaymentStatus] = useState({
    hasPaid: false,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await fetch("/api/payment/status");
        const data = await response.json();

        setPaymentStatus({
          hasPaid: data.hasPaid,
          loading: false,
          error: null,
        });
      } catch (error) {
        setPaymentStatus({
          hasPaid: false,
          loading: false,
          error: "Erro ao verificar status do pagamento",
        });
      }
    };

    if (session?.user) {
      checkPaymentStatus();
    }
  }, [session]);

  return paymentStatus;
}
