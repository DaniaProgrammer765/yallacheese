"use client";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Login from "./Login";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const MainPage = ["/"];
  const isMain = MainPage.includes(pathname);

  // 🔹 تتبع التمرير لتبديل الحالة
  useEffect(() => {
    if (!isMain) return; // نحتاج التمرير فقط بالصفحة الرئيسية

    const handleScroll = () => {
      if (window.scrollY > 50) setScrolled(true);
      else setScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMain]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full h-[70px] flex items-center justify-between z-50 px-6 transition-all duration-300 ${
          isMain
            ? scrolled
              ? "bg-white shadow-md"
              : "backdrop-blur-md bg-white/10 border-b border-white/20"
            : "bg-white shadow-md"
        }`}
      >
        {/* ✅ أيقونة المنتج (يمين) */}
        <button
          onClick={() => router.push("/products")}
          className={`transition cursor-pointer ${
            isMain && !scrolled ? "text-white" : "text-gray-800"
          }`}
        >
          <img
            src={
              isMain && !scrolled
                ? `/icons/product.svg`
                : `/icons/product2.svg`
            }
            alt="Products"
            className="h-8 w-8 object-contain"
          />
        </button>

        {/* ✅ الشعار */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <img
            src={
              isMain && !scrolled
                ? `/images/logo.svg`
                : `/icons/whitepageLogo.svg`
            }
            alt="Logo"
            className="h-12 object-contain drop-shadow-lg"
          />
        </div>

        {/* ✅ أيقونة المنيو */}
        <button
          onClick={() => setMenuOpen(true)}
          className={`transition cursor-pointer ${
            isMain && !scrolled ? "text-white" : "text-gray-800"
          }`}
        >
          <img
            src={
              isMain && !scrolled ? `/icons/menu.svg` : `/icons/menu2.svg`
            }
            alt="Menu"
            className="h-8 w-8 object-contain"
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
