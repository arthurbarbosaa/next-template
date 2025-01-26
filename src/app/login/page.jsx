"use client";

import { signIn } from "next-auth/react";
import { Card, CardBody, CardHeader, Button } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { useState } from "react";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async (provider) => {
    setIsLoading(true);
    const callbackUrl =
      new URLSearchParams(window.location.search).get("callbackUrl") || "/app";
    await signIn(provider, { callbackUrl });
  };

  return (
    <div className="min-h-screen py-24 bg-default-50 flex items-center justify-center">
      <Card className="w-full max-w-2xl mx-4">
        <CardHeader className="flex flex-col gap-3 text-center px-8 pt-8">
          <h1 className="text-4xl font-bold">Bem-vindo de volta!</h1>
          <p className="text-lg text-default-600">
            Faça login para acessar sua conta
          </p>
        </CardHeader>
        <CardBody className="gap-8 px-8 py-12">
          <div className="max-w-md mx-auto w-full">
            <Button
              isLoading={isLoading}
              startContent={
                <Icon icon="flat-color-icons:google" className="text-xl" />
              }
              color="default"
              size="lg"
              className="w-full text-lg"
              onPress={() => handleSignIn("google")}
            >
              Continuar com Google
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
