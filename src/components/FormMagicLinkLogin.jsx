"use client";

import { useState } from "react";
import { Input, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { signIn } from "next-auth/react";

export default function FormMagicLink() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailSignIn = async () => {
    setIsLoading(true);
    await signIn("resend", { email, callbackUrl: "/app" });
    window.location.href = `/verify-request?email=${encodeURIComponent(email)}`;
  };

  return (
    <div className="w-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleEmailSignIn();
        }}
      >
        <Input
          isRequired={true}
          label="Email:"
          size="lg"
          type="email"
          placeholder="exemplo@email.com"
          value={email}
          onValueChange={setEmail}
        />
        <Button
          type="submit"
          startContent={<Icon icon="carbon:email" className="text-xl" />}
          color="default"
          isLoading={isLoading}
          size="lg"
          className="w-full text-lg mt-4"
        >
          Entrar com email
        </Button>
      </form>
    </div>
  );
}
