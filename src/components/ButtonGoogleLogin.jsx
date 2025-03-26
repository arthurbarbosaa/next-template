"use client";

import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function ButtonGoogleLogin() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignIn = async () => {
    setIsLoading(true);
    const callbackUrl =
      new URLSearchParams(window.location.search).get("callbackUrl") || "/app";
    await signIn("google", { callbackUrl });
  };

  return (
    <Button
      isLoading={isLoading}
      startContent={<Icon icon="flat-color-icons:google" className="text-xl" />}
      color="default"
      size="lg"
      className="w-full text-lg"
      onPress={handleSignIn}
    >
      Continuar com Google
    </Button>
  );
}
