"use client";

import { Card, Accordion, AccordionItem } from "@heroui/react";

const faqData = [
  {
    key: "1",
    title: "O que é este produto?",
    content:
      "Este é um produto inovador que ajuda você a alcançar seus objetivos de forma mais eficiente e organizada.",
  },
  {
    key: "2",
    title: "Como funciona o pagamento?",
    content:
      "Oferecemos um sistema de pagamento seguro através do Stripe, com pagamento único e acesso vitalício ao produto.",
  },
  {
    key: "3",
    title: "Posso pedir reembolso?",
    content:
      "Sim, oferecemos garantia de 7 dias. Se você não estiver satisfeito, pode solicitar reembolso total.",
  },
  {
    key: "4",
    title: "Qual suporte vocês oferecem?",
    content:
      "Oferecemos suporte por email 24/7 e uma comunidade ativa para ajudar com suas dúvidas.",
  },
  {
    key: "5",
    title: "Existe versão mobile?",
    content:
      "Sim, nossa plataforma é totalmente responsiva e funciona em qualquer dispositivo.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-24 bg-default-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Perguntas Frequentes</h2>
          <p className="text-lg text-default-600">
            Tire suas dúvidas sobre nossa plataforma
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="px-8 py-4">
            <Accordion selectionMode="multiple">
              {faqData.map((item) => (
                <AccordionItem
                  key={item.key}
                  aria-label={item.title}
                  title={item.title}
                >
                  <p className="text-default-600 px-2 pb-4">{item.content}</p>
                </AccordionItem>
              ))}
            </Accordion>
          </Card>
        </div>
      </div>
    </section>
  );
}
