"use client";

import { useEffect, useState } from "react";
import { Button, Link } from "@nextui-org/react";
import ReactConfetti from "react-confetti";

export default function PaymentSuccessPage() {
  const [windowDimension, setWindowDimension] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const detectSize = () => {
      setWindowDimension({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    detectSize();

    window.addEventListener("resize", detectSize);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center p-4">
      <ReactConfetti
        width={windowDimension.width}
        height={windowDimension.height}
        recycle={false}
        numberOfPieces={700}
        gravity={0.1}
      />
      <div className="text-center">
        <div className="mb-8">
          <svg
            className="mx-auto h-16 w-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>

        <h1 className="text-4xl font-bold mb-4">Obrigado pela sua compra!</h1>

        <p className="text-lg text-default-600 mb-8">
          Estamos muito felizes em ter você conosco. <br />
          Agora você tem acesso completo a nossa plataforma.
        </p>

        <Button as={Link} color="default" href="/app">
          Acessar o App
        </Button>
      </div>
    </div>
  );
}
