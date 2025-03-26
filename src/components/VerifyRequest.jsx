"use client";

import { Card, CardBody, CardHeader, Button } from "@heroui/react";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useEffect, useState } from "react";

export default function VerifyRequest() {
  const [email, setEmail] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setEmail(params.get("email"));
  }, []);

  const getEmailProviderUrl = (email) => {
    if (!email) return null;

    const domain = email.split("@")[1].toLowerCase();

    const emailProviders = {
      "gmail.com": "https://mail.google.com",
      "yahoo.com": "https://mail.yahoo.com",
      "outlook.com": "https://outlook.live.com",
      "hotmail.com": "https://outlook.live.com",
      "live.com": "https://outlook.live.com",
      "icloud.com": "https://www.icloud.com/mail",
      "aol.com": "https://mail.aol.com",
      "protonmail.com": "https://mail.protonmail.com",
      "zoho.com": "https://mail.zoho.com",
    };

    return (
      emailProviders[domain] ||
      `https://www.google.com/search?q=acessar email ${domain}`
    );
  };

  const handleOpenEmailProvider = () => {
    if (email) {
      const emailProviderUrl = getEmailProviderUrl(email);
      window.open(emailProviderUrl, "_blank");
    }
  };

  return (
    <div className="min-h-screen px-4 py-24 flex items-center justify-center">
      <Card className="w-full max-w-xl">
        <CardHeader className="flex flex-col gap-3 text-center pt-8">
          <div className="flex items-center mb-2">
            <p className="text-3xl font-bold">Template</p>
          </div>
        </CardHeader>
        <CardBody className="gap-4 px-8 py-8">
          <div className="max-w-md mx-auto w-full text-center">
            <p className="text-3xl font-bold mb-4">Verifique seu Email ✉️</p>
            <p className="opacity-60 mb-8">
              Um link de verificação foi enviado para{" "}
              <strong className="opacity-100">{email || "seu email"}</strong>.
            </p>
            {email && (
              <Button
                color="default"
                size="lg"
                startContent={
                  <Icon
                    icon="heroicons-outline:external-link"
                    className="text-xl"
                  />
                }
                className="w-full text-lg"
                onPress={handleOpenEmailProvider}
              >
                Abrir Email
              </Button>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
