"use client";

import { Link } from "@heroui/react";

export default function Footer() {
  return (
    <footer className="py-24 bg-default-50 border-t border-default-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold">Template</span>
            </div>
            <p className="text-lg text-default-600 mb-4">Template saas.</p>
            <p className="text-default-500">
              Copyright © 2024 - Todos os direitos reservados
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/login"
                  className="text-lg text-default-600 hover:text-default-900"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  href="#pricing"
                  className="text-lg text-default-600 hover:text-default-900"
                >
                  Preços
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-lg text-default-600 hover:text-default-900"
                >
                  Termos de serviço
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-lg text-default-600 hover:text-default-900"
                >
                  Política de privacidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="mailto:sua.startup@email.com"
                  className="text-lg text-primary"
                >
                  sua.startup@email.com
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
