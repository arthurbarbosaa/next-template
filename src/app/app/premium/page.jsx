"use client";

import { Card, CardBody } from "@heroui/react";

export default function PremiumPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Conteúdo Premium</h1>
        <p className="text-lg text-default-600">
          Bem-vindo à área exclusiva para assinantes
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardBody>
            <p className="text-lg">
              Este é um conteúdo exclusivo para usuários premium. Parabéns por
              fazer parte deste grupo seleto!
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
