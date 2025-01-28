"use client";
import React from "react";
import { Sheet, SheetTrigger, SheetContent, SheetTitle } from "../ui/sheet";
import { Button } from "../ui/button";
import { AlignJustify } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const menuItems = [
   {
    name: "Home",
    href: "/",
    show: true,
   },
   {
    name: "Register",
    href: "/sign-up",
    show: true,
   },
   {
    name: "Login",
    href: "/sign-in",
    show: true,
   }

  ];
  return (
    <div>
      <header className="shrink-0 flex h-16 items-center justify-between">
        <Sheet >
          <SheetTrigger asChild>
            <Button className="lg:hidden">
              <AlignJustify className="h-6 w-6" />
              <span className=" sr-only"></span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-4  py-4  ">
              <SheetTitle>
                <Link className="text-2xl font-bold " href="/">
                  JobFound
                </Link>
              </SheetTitle>
              {menuItems.map(
                (item) =>
                  item.show ? (
                    <Link
                      className=" font-medium text-xl "
                      key={item.name}
                      href={item.href}
                    >
                      {item.name}
                    </Link>
                  ) : null
              )}
            </div>
          </SheetContent>
        </Sheet>
        <Link href='/' className=" hidden text-3xl font-bold lg:flex mr-6">JobFound</Link>
        <nav className="hidden lg:flex gap-6 ml-auto">
          {menuItems.map(
            (item) =>
              item.show ? (
                <Link
                  className="group inline-flex items-center gap-1 h-9  w-max px-4 py-2 text-sm font-medium "
                  key={item.name}
                  href={item.href}
                >
                  {item.name}
                </Link>     
              ):null
          )}
        </nav>
      </header>
    </div>
  );
};

export default Header;
