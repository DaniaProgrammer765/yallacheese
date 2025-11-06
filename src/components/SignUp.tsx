"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Login from "./Login";

interface SignUpProps {
  onClose: () => void;
}

export default function SignUp({ onClose }: SignUpProps) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [LoginOpen, setLoginOpen] = useState(false);

  const handleGoogleLogin = () => alert("Google Login clicked");
  const handleAppleLogin = () => alert("Apple Login clicked");

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-[15px] shadow-2xl flex w-full max-w-4xl h-[90vh] relative overflow-hidden">
        {/* زر الإغلاق */}
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-[#73737C] hover:text-gray-700 text-2xl font-semibold z-10"
        >
          ×
        </button>

        {/* --- LEFT SIDE --- */}
      <div className="w-full md:w-1/2 bg-white flex flex-col p-8 overflow-y-auto scroll-rtl">
          <h2 className="text-[32px] font-semibold text-[#FF2B77] text-center mb-6">
            مرحباً مجدداً
          </h2>

          {/* الاسم الأول والاسم الأخير */}
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/2 text-right">
              <label className="block text-[#1B213E] text-sm font-medium mb-2">
                الاسم الأخير
              </label>
              <input
                type="text"
                placeholder="اكتب اسمك الأول"
                className="w-full input-style"
              />
            </div>
            <div className="w-full md:w-1/2 text-right">
              <label className="block text-[#1B213E] text-sm font-medium mb-2">
                الاسم الأول
              </label>
              <input
                type="text"
                placeholder="اكتب اسمك الأخير"
                className="w-full input-style"
              />
            </div>
          </div>

          {/* رقم الموبايل */}
          <div className="mb-4 text-right">
            <label className="block text-sm text-[#1B213E] font-medium mb-2">
              رقم الموبايل
            </label>
            <PhoneInput
              country={"sa"}
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClass="!w-full input-style !text-right !border !rounded-lg !py-2 !px-3"
              buttonClass="input-style"
              containerClass="input-style"
              preferredCountries={["sa", "jo"]}
              enableSearch
              inputProps={{
                name: "phone",
                required: true,
              }}
            />
          </div>

          {/* البريد الإلكتروني */}
          <div className="mb-4 text-right">
            <label className="block text-[#1B213E] text-sm font-medium mb-2">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              className="w-full input-style"
              placeholder="أدخل بريدك الإلكتروني"
            />
          </div>

          {/* كلمة المرور */}
          <div className="mb-4 text-right">
            <label className="block text-[#1B213E] text-sm font-medium mb-2">
              كلمة المرور
            </label>
            <input
              type="password"
              className="w-full input-style"
              placeholder="أدخل كلمة المرور الخاصة بك"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {/* تأكيد كلمة المرور */}
          <div className="mb-6 text-right">
            <label className="block text-[#1B213E] text-sm font-medium mb-2">
              تأكيد كلمة المرور
            </label>
            <input
              type="password"
              className="w-full input-style"
              placeholder="أعد إدخال كلمة المرور"
            />
          </div>

          {/* تسجيل بحسابات أخرى */}
          <div className="flex flex-col gap-2">
            <button
              onClick={handleGoogleLogin}
              className="py-2 flex justify-center items-center gap-2 input-style"
            >
              <img src="/icons/google.svg" className="h-4" alt="Google" />
              المتابعة مع Google
            </button>
            <button
              onClick={handleAppleLogin}
              className="py-2 flex justify-center items-center gap-2 input-style"
            >
              <img src="/icons/apple.svg" className="h-4" alt="Apple" />
              المتابعة مع Apple
            </button>
          </div>
          {/* هل لديك حساب؟ */}
          <div className="text-center text-[#1B213E] text-[13px] mt-6">
            لديك حساب من قبل؟{" "}
            <span
              className="text-[#FF2B77] font-medium hover:underline"
              onClick={() => {
                setLoginOpen(true);
                onClose();
              }}
            >
              تسجيل الدخول
            </span>
          </div>
          {/* زر تسجيل الدخول */}
          <button className="w-full py-2 login-btn mt-2 mb-4">
            إنشاء حساب
          </button>

          <p className="text-center text-xs text-gray-400 mt-6">
            © 2025 - YallaCheese
          </p>
        </div>

        {/* --- RIGHT SIDE --- */}
          <div className="hidden md:flex flex-col justify-center items-center text-white w-1/2 p-10 login-left-side text-center">
          <img src="icons/loginLogo.svg" alt="Logo" className="mb-6 w-40" />
          <p className="text-2xl leading-relaxed">
            ذكرياتك ليست مجرد صور بل صفحات من حياتك. ابدأها معنا.
          </p>
        </div>
      </div>
      {LoginOpen && <Login onClose={() => setLoginOpen(false)} />}
    </div>
  );
}
