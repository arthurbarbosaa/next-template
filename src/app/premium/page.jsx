import PaymentProtected from "@/components/PaymentProtected";

export default async function PremiumPage() {
  return (
    <PaymentProtected>
      <div>Este conteúdo só é visível para usuários que pagaram</div>
    </PaymentProtected>
  );
}
