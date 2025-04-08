"use client";

import { useState } from "react";
import { Input, Button } from "@heroui/react";
import { signIn } from "next-auth/react";

export default function FormCredentialsLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const result = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (result.error) {
      console.error(result.error);
    } else {
      window.location.href = "/app";
    }
    setIsLoading(false);
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit}>
        <Input
          isRequired={true}
          label="Email:"
          size="lg"
          type="email"
          value={username}
          onValueChange={setUsername}
        />
        <Input
          isRequired={true}
          label="Senha:"
          size="lg"
          type="password"
          value={password}
          onValueChange={setPassword}
          className="mt-4"
        />
        <Button
          type="submit"
          color="default"
          isLoading={isLoading}
          size="lg"
          className="w-full text-lg mt-4"
        >
          Entrar com senha
        </Button>
      </form>
    </div>
  );
}
