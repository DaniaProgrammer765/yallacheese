"use client";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Login from "./Login";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const pathname = usePathname();
  const MainPage = ["/"];
  const isMain = MainPage.includes(pathname);
  const router = useRouter();
  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[70px] flex items-center justify-between z-50 px-6 transition-all duration-300 ${
          isMain
            ? "backdrop-blur-md bg-white/10 border-b border-white/20"
            : "bg-white shadow-md"
        }`}
      >
        {/* أيقونة المنتج (يمين) */}
        <button
          onClick={() => router.push("/products")}
          className="text-white hover:opacity-80 transition cursor-pointer"
        >
          <img
            src={isMain ? `/icons/product.svg` : `/icons/product2.svg`}
            alt="Products"
            className="h-6 w-6 object-contain"
          />
        </button>
        {/* الشعار */}
        <div className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer" onClick={()=>router.push("/")}>
          <img
            src={isMain ? `/images/logo.svg` : `/icons/whitepageLogo.svg`}
            alt="Logo"
            className="h-12 object-contain drop-shadow-lg"
          />
        </div>
        <button
          onClick={() => setMenuOpen(true)}
          className="text-white hover:opacity-80 transition cursor-pointer"
        >
          <img
            src={isMain ? `/icons/menu.svg` : `/icons/menu2.svg`}
            alt="Menu"
            className="h-6 w-6 object-contain"
          />
        </button>
      </header>

      <Menu
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onLoginOpen={() => setLoginOpen(true)}
      />
      {loginOpen && <Login onClose={() => setLoginOpen(false)} />}
    </>
  );
}
