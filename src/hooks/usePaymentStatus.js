"use client";

import { useState, useEffect } from "react";

export function usePaymentStatus() {
  const [paymentStatus, setPaymentStatus] = useState({
    isLoading: true,
    hasPaid: false,
    error: null,
  });

  useEffect(() => {
    async function checkPaymentStatus() {
      try {
        const response = await fetch("/api/payment/status");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(
            data.error || "Erro ao verificar status do pagamento"
          );
        }

        setPaymentStatus({
          isLoading: false,
          hasPaid: data.hasPaid,
          error: null,
        });
      } catch (error) {
        setPaymentStatus({
          isLoading: false,
          hasPaid: false,
          error: error.message,
        });
      }
    }

    checkPaymentStatus();
  }, []);

  return paymentStatus;
}
