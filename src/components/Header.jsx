"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@heroui/react";
import { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);
  return (
    <Navbar position="sticky" isBordered className="bg-default-50">
      <NavbarBrand>
        <p className="font-bold text-inherit">Template</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#demo" className="text-lg">
            Demo
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#pricing" className="text-lg">
            Preços
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#faq" className="text-lg">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button as={Link} color="default" href="/login" variant="flat">
            Entrar
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
