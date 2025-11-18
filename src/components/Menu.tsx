"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu({
  isOpen,
  onClose,
  onLoginOpen,
}: {
  isOpen: boolean;
  onClose: () => void;
  onLoginOpen: () => void;
}) {
  const pathname = usePathname();
  // ✅ إغلاق السايد بار تلقائيًا عند تغيّر الصفحة
  useEffect(() => {
    if (isOpen) onClose();
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <>
      {/* الخلفية السوداء */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-40 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* القائمة الجانبية */}
      <aside
        className={`fixed top-0 left-0 h-full w-[320px] bg-white shadow-xl z-50 transform transition-transform duration-300
    ${isOpen ? "translate-x-0" : "-translate-x-full"}
    rounded-tr-[18px] rounded-br-[18px]`}
      >
        <div className="p-6 flex flex-col text-right h-full overflow-y-auto">
          {/* الشعار */}
          <div className="flex mb-4 content-rtl">
            <Image src="/logo.svg" alt="Logo" width={90} height={40} />
          </div>

          <p className="text-sm text-gray-600 mb-4">
            سجل دخولك أو قم بإنشاء حساب جديد من أجل أن تقوم بطباعة ذكرياتك
          </p>
          <button
            onClick={() => {
              onLoginOpen();
              onClose();
            }}
            className="bg-[#FF2B77] text-white px-4 py-2 rounded-md hover:bg-pink-600 transition mb-6"
          >
            تسجيل دخول / إنشاء حساب
          </button>

          <hr className="border-gray-200 mb-4" />

          {/* منتجاتنا */}
          <div className="mb-5">
            <h3 className="text-primary font-semibold mb-2">منتجاتنا</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <Link href="/framed-photos">صور بإطار رائع</Link>
              </li>
              <li>
                <Link href="/normal-photos">صور مطبوعة عادية</Link>
              </li>
              <li>
                <Link href="/normal-photos">صور مغناطيسية</Link>
              </li>
              <li>
                <Link href="#">الرزنامة السنوية</Link>
              </li>
              <li>
                <Link href="/monthly-calender">الرزنامة الشهرية</Link>
              </li>
              <li>
                <Link href="#">تقويم المكتب</Link>
              </li>
              <li>
                <Link href="#">إطارات صور خشبية</Link>
              </li>
            </ul>
          </div>

          <hr className="border-gray-200 mb-4" />

          {/* المزيد */}
          <div className="mb-5">
            <h3 className="text-primary font-semibold mb-2">المزيد</h3>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>
                <Link href="#">طابعي</Link>
              </li>
              <li>
                <Link href="#">العروض</Link>
              </li>
              <li>
                <Link href="/about-us">من نحن</Link>
              </li>
              <li>
                <Link href="/return-policy">سياسة الترجيع</Link>
              </li>
              <li>
                <Link href="/privacy-policy">سياسة الخصوصية</Link>
              </li>
              <li className="font-expo font-book">
                <Link href="/contact-us">تواصل معنا</Link>
              </li>
              <div className="flex justify-between items-center">
                <span className="font-expo font-book">اللغة</span>
                <div className="flex bg-gray-100 overflow-hidden border border-pink-400">
                  {/* زر عربي */}
                  <button className="bg-[#FF2B77] text-white px-3 py-1 text-sm font-medium transition">
                    عربي
                  </button>

                  {/* زر English */}
                  <button className="bg-[#FFC2D6] text-primary px-3 py-1 text-sm font-medium transition hover:bg-[#ffb9cf]">
                    English
                  </button>
                </div>
              </div>

              {/* الدول */}
              <div className="mt-6 content-rtl">
                <span className="font-expo font-book block mb-3">الدول</span>

                <div className="flex flex-col gap-3 text-sm">
                  <div className="flex items-center gap-2">
                    <img
                      src="/svg/saudi.svg"
                      alt="Saudi Arabia"
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-gray-700">السعودية</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src="/svg/jordan.svg"
                      alt="Jordan"
                      className="h-5 w-5 object-contain"
                    />
                    <span className="text-gray-700">الأردن</span>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}
