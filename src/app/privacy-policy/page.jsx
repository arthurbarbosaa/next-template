"use client";

import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <div className="container max-w-xl mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:underline mb-8"
        >
          ← Voltar
        </Link>

        <h1 className="text-3xl font-bold mb-8">Política de Privacidade</h1>
        <p className="mb-8">Data de vigência: 1 de Janeiro de 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Introdução</h2>
          <p>
            Nossa Startup valoriza sua privacidade. Esta política explica como
            coletamos, usamos e protegemos suas informações.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            2. Informações que Coletamos
          </h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              Dados Pessoais: Coletamos endereços de e-mail quando você se
              cadastra para uma conta ou assinatura.
            </li>
            <li>
              Dados Não Pessoais: Coletamos cookies e endereços IP através de
              nosso script para rastrear o uso do site.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Uso das Informações</h2>
          <ul className="list-disc list-inside ml-4">
            <li>
              Dados Pessoais: Seu endereço de e-mail é usado para gerenciamento
              de conta e comunicações relacionadas ao serviço.
            </li>
            <li>
              Dados Não Pessoais: Cookies e endereços IP são usados para
              analisar o tráfego do site e melhorar a experiência do usuário.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            4. Compartilhamento de Dados
          </h2>
          <p>
            Não vendemos, comercializamos ou compartilhamos seus dados pessoais
            com terceiros, exceto quando necessário para fornecer serviços ou
            cumprir obrigações legais.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">5. Segurança de Dados</h2>
          <p>
            Implementamos medidas de segurança para proteger suas informações
            contra acesso não autorizado, alteração, divulgação ou destruição.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">6. Seus Direitos</h2>
          <p>
            Você tem o direito de acessar, corrigir ou excluir suas informações
            pessoais. Entre em contato conosco para exercer esses direitos.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            7. Alterações nesta Política
          </h2>
          <p>
            Podemos atualizar esta política periodicamente. Notificaremos você
            sobre quaisquer alterações significativas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade, entre em
            contato conosco em sua.startup@email.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
