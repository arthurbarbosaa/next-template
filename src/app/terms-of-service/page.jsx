import Link from "next/link";

const TermsOfService = () => {
  return (
    <div className="container max-w-xl mx-auto py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:underline mb-8"
        >
          ← Voltar
        </Link>

        <h1 className="text-3xl font-bold mb-8">Termos de Serviço</h1>
        <p className="mb-8">Data de vigência: 1 de Janeiro de 2025</p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e usar nossos serviços, você concorda em cumprir estes
            termos. Se você não concordar com alguma parte destes termos, não
            poderá usar nossos serviços.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">2. Descrição do Serviço</h2>
          <p>
            Nossa Startup fornece [breve descrição do serviço]. Reservamo-nos o
            direito de modificar, suspender ou descontinuar qualquer parte do
            serviço a qualquer momento.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">3. Contas de Usuário</h2>
          <p>
            Você é responsável por manter a confidencialidade de sua conta e
            senha. Notifique-nos imediatamente sobre qualquer uso não autorizado
            de sua conta.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            4. Pagamentos e Reembolsos
          </h2>
          <p>
            Detalhes sobre nossos planos de preços, métodos de pagamento e
            políticas de reembolso podem ser encontrados em nossa página de
            preços.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            5. Propriedade Intelectual
          </h2>
          <p>
            Todo o conteúdo e software associados aos nossos serviços são de
            nossa propriedade ou licenciados para nós e são protegidos por leis
            de direitos autorais.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">
            6. Limitação de Responsabilidade
          </h2>
          <p>
            Nossa Startup não será responsável por quaisquer danos indiretos,
            incidentais, especiais, consequenciais ou punitivos decorrentes do
            uso de nossos serviços.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">7. Alterações nos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento. Continuaremos a notificá-lo sobre quaisquer alterações
            significativas.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">8. Contato</h2>
          <p>
            Se você tiver alguma dúvida sobre estes Termos, entre em contato
            conosco em sua.startup@email.com
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
