"use client";

import { Card, CardBody } from "@heroui/react";

export default function AdminPage() {
  return (
    <div className="container mx-auto px-4 py-24">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Área de Administração</h1>
        <p className="text-lg text-default-600">
          Bem-vindo à área exclusiva para administradores
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card>
          <CardBody>
            <p className="text-lg">
              Este é um conteúdo exclusivo para usuários administradores.
              Parabéns por fazer parte deste grupo seleto!
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
