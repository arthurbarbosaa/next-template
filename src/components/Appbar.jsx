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

const Appbar = () => {
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
    <Navbar position="static" isBordered className="bg-default-50">
      <NavbarBrand>
        <p className="font-bold text-inherit">Template</p>
      </NavbarBrand>

      <NavbarContent justify="center">
        {menuItems.map((item, index) => (
          <NavbarItem key={`${item.href}-${index}`}>
            <Link
              color="foreground"
              href={item.href}
              className="text-lg"
              size="lg"
            >
              {item.label}
            </Link>
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
    </Navbar>
  );
};

export default Appbar;
