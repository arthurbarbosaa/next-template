"use client";

import { Button } from "@nextui-org/button";
import { useState } from "react";
import { Icon } from "@iconify/react";

export default function PaymentButton({ priceId }) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/payment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ priceId }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Erro ao iniciar pagamento:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      color="default"
      onPress={handlePayment}
      disabled={loading}
      isLoading={loading}
      startContent={!loading && <Icon icon="material-symbols:payment" />}
    >
      {loading ? "Processando..." : "Comprar Agora"}
    </Button>
  );
}
