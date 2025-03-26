"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/react";
import { signOut } from "next-auth/react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Appbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const menuItems = [
    {
      label: "App",
      href: "/app",
    },
    {
      label: "Perfil",
      href: "/app/profile",
    },
    {
      label: "Painel Admin",
      href: "/app/admin",
    },
    {
      label: "Página Paga",
      href: "/app/premium",
    },
  ];

  return (
    <Navbar
      position="static"
      isBordered
      className="bg-default-50"
      onMenuOpenChange={setIsMenuOpen}
      classNames={{
        item: [
          "flex",
          "relative",
          "h-full",
          "items-center",
          "data-[active=true]:after:content-['']",
          "data-[active=true]:after:absolute",
          "data-[active=true]:after:bottom-0",
          "data-[active=true]:after:left-0",
          "data-[active=true]:after:right-0",
          "data-[active=true]:after:h-[2px]",
          "data-[active=true]:after:rounded-[2px]",
          "data-[active=true]:after:bg-foreground",
        ],
      }}
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Template</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex" justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem
            key={`${item.href}-${index}`}
            isActive={pathname === item.href}
          >
            <Button
              as={Link}
              href={item.href}
              variant="light"
              color={pathname === item.href ? "default" : "default"}
              className="text-lg"
              size="sm"
              aria-current={pathname === item.href ? "page" : undefined}
            >
              {item.label}
            </Button>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            color="danger"
            variant="flat"
            onPress={() => signOut({ callbackUrl: "/" })}
          >
            Sair
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item.href}-${index}`}>
            <Link
              className="w-full"
              color={pathname === item.href ? "primary" : "foreground"}
              href={item.href}
              size="lg"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <Link
            className="w-full"
            color="danger"
            href="#"
            size="lg"
            onPress={() => signOut({ callbackUrl: "/" })}
          >
            Sair
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
};

export default Appbar;
