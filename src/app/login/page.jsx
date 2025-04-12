import { Card, CardBody, CardHeader } from "@heroui/react";
import ButtonGoogleLogin from "@/components/ButtonGoogleLogin";
import FormMagicLinkLogin from "@/components/FormMagicLinkLogin";

export default function LoginPage() {
  return (
    <div className="min-h-screen px-4 py-24 bg-default-50 flex items-center justify-center">
      <Card className="w-full max-w-xl">
        <CardHeader className="flex flex-col gap-3 text-center px-8 pt-8">
          <h1 className="text-3xl font-bold">Login</h1>
        </CardHeader>
        <CardBody className="px-8 py-8">
          <div className="max-w-md mx-auto w-full space-y-4">
            <ButtonGoogleLogin />
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-default-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-content1 px-4 text-default-600">ou</span>
              </div>
            </div>
            <FormMagicLinkLogin />
            <p className="text-center text-sm opacity-60 mt-8">
              Ao fazer login, você concorda com os{" "}
              <a href="/terms-of-service" className="hover:underline">
                termos de serviço
              </a>
            </p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
