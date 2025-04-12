import { Button, Avatar, AvatarGroup } from "@heroui/react";
import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section className="py-24 bg-default-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-6">
              Crie sua startup agora
              <br />
              com Boilerplate
            </h1>
            <p className="text-lg text-default-600 mb-8">
              Comece rapidamente com nosso boilerplate e foque no que realmente
              importa: <br />
              construir um produto incrível para seus clientes.
            </p>

            <ul className="mb-8 space-y-2 text-default-600">
              <li className="flex items-center justify-center lg:justify-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-lg">Configuração rápida e fácil</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-lg">Componentes pré-construídos</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <svg
                  className="w-5 h-5 text-green-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <span className="text-lg">Escalável e personalizável</span>
              </li>
            </ul>

            <Button
              color="default"
              size="lg"
              className="mb-8"
              as="a"
              href="/login"
            >
              <span className="text-lg">Comece Agora</span>
            </Button>

            <div className="flex justify-center lg:justify-start items-center">
              <AvatarGroup>
                <Avatar src="https://i.pravatar.cc/150?u=1" />
                <Avatar src="https://i.pravatar.cc/150?u=2" />
                <Avatar src="https://i.pravatar.cc/150?u=3" />
                <Avatar src="https://i.pravatar.cc/150?u=4" />
                <Avatar src="https://i.pravatar.cc/150?u=5" />
              </AvatarGroup>
              <div className="ml-4">
                <div className="flex mb-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-lg text-default-600">
                  Centenas de desenvolvedores satisfeitos
                </span>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="100%" height="100%" fill="#f0f0f0" />
                <rect
                  x="50"
                  y="50"
                  width="700"
                  height="100"
                  rx="10"
                  fill="#e0e0e0"
                />
                <rect
                  x="50"
                  y="170"
                  width="300"
                  height="380"
                  rx="10"
                  fill="#d0d0d0"
                />
                <rect
                  x="370"
                  y="170"
                  width="380"
                  height="380"
                  rx="10"
                  fill="#d0d0d0"
                />
                <rect
                  x="100"
                  y="450"
                  width="200"
                  height="20"
                  rx="5"
                  fill="#b0b0b0"
                />
                <rect
                  x="100"
                  y="480"
                  width="150"
                  height="20"
                  rx="5"
                  fill="#b0b0b0"
                />
                <rect
                  x="420"
                  y="200"
                  width="280"
                  height="20"
                  rx="5"
                  fill="#b0b0b0"
                />
                <rect
                  x="420"
                  y="240"
                  width="280"
                  height="20"
                  rx="5"
                  fill="#b0b0b0"
                />
                <rect
                  x="420"
                  y="280"
                  width="200"
                  height="20"
                  rx="5"
                  fill="#b0b0b0"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-40 flex justify-center space-x-10">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Icon icon="mdi:facebook" width="36" height="36" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-400 transition-colors duration-300"
          >
            <Icon icon="mdi:twitter" width="36" height="36" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-600 transition-colors duration-300"
          >
            <Icon icon="mdi:instagram" width="36" height="36" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
          >
            <Icon icon="mdi:linkedin" width="36" height="36" />
          </a>
        </div>
      </div>
    </section>
  );
}
