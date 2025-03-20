"use client";

import PaymentButton from "./PaymentButton";
import { Card } from "@heroui/react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-default-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Planos e Preços</h2>
          <p className="text-lg text-default-600">
            Escolha o plano ideal para o seu negócio
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <Card className="p-8 w-full max-w-md flex flex-col h-[600px]">
            <div className="flex-grow">
              <div className="h-32 flex flex-col justify-end">
                <h3 className="text-4xl font-bold mb-3">
                  R$10 <span className="text-lg font-normal">BRL</span>
                </h3>
                <h4 className="text-2xl mb-6">Básico</h4>
              </div>
              <ul className="text-lg text-default-600 mb-8">
                <li className="mb-5">✓ Recurso 1</li>
                <li className="mb-5">✓ Recurso 2</li>
                <li className="mb-5">✓ Recurso 3</li>
                <li className="mb-5">✗ Recurso 4</li>
                <li className="mb-5">✗ Recurso 5</li>
                <li className="mb-5">✗ Recurso 6</li>
              </ul>
            </div>
            <PaymentButton />
          </Card>

          <Card className="p-8 w-full max-w-md flex flex-col h-[600px]">
            <div className="flex-grow">
              <div className="h-32 flex flex-col justify-end">
                <h3 className="text-4xl font-bold mb-3 text-gray-800">
                  R$100 <span className="text-lg font-normal">BRL</span>
                </h3>
                <h4 className="text-2xl mb-6">Pro</h4>
              </div>
              <ul className="text-left mb-8 text-lg">
                <li className="mb-5">✓ Recurso 1</li>
                <li className="mb-5">✓ Recurso 2</li>
                <li className="mb-5">✓ Recurso 3</li>
                <li className="mb-5">✓ Recurso 4</li>
                <li className="mb-5">✓ Recurso 5</li>
                <li className="mb-5">✓ Recurso 6</li>
              </ul>
            </div>
            <PaymentButton />
          </Card>
        </div>
      </div>
    </section>
  );
}
