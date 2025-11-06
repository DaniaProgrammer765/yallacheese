"use client";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import SignUp from "./SignUp";

interface LoginProps {
  onClose: () => void;
}

export default function Login({ onClose }: LoginProps) {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [signUpOpen, setSignUpOpen] = useState(false);

  const handleGoogleLogin = () => {
    alert("Google Login clicked");
  };

  const handleAppleLogin = () => {
    alert("Apple Login clicked");
  };
  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-[15px] shadow-2xl overflow-hidden flex w-full max-w-4xl relative">
        {/* --- زر إغلاق X --- */}
        <button
          onClick={ onClose }
          className="absolute top-3 right-4 text-[#73737C] hover:text-gray-700 text-2xl font-semibold"
        >
          ×
        </button>

        {/* --- LEFT SIDE --- */}
        <div className="w-full md:w-1/2 bg-white p-10 flex flex-col justify-center">
          <h2 className="text-[40px] font-semibold text-primary text-center mb-6">
            مرحباً مجدداً
          </h2>

          {/* رقم الموبايل */}
          <div className="mb-4 text-right">
            <label className="block text-sm text-[#1B213E] font-medium mb-2 text-right">
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
                autoFocus: true,
              }}
            />
          </div>

          {/* كلمة المرور */}
          <div className="mb-4 text-right">
            <label className="block text-[#1B213E] text-sm font-medium mb-2 text-right">
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

          {/* زر تسجيل الدخول */}
          <button className="login-btn transition mt-8">
            تسجيل الدخول
          </button>

          {/* تسجيل بحسابات أخرى */}
          <div className="flex flex-col gap-2 mt-4">
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

          {/* هل نسيت كلمة المرور */}
          <div className="text-center text-[13px] mt-4">
            <a href="#" className="text-primary font-medium hover:underline">
              هل نسيت كلمة المرور؟
            </a>
          </div>
          <div className="text-center text-[#1B213E] text-[13px] mt-4">
            ليس لديك حساب؟{" "}
          <span className="text-primary font-medium hover:underline" onClick={()=>{
            setSignUpOpen(true)
            // onClose()
          }}>  
            قم بإنشاء حساب
            </span>
          </div>

          <p className="text-center text-xs text-gray-400 mt-6">
            © 2025 - YallaCheese
          </p>
        </div>

        {/* --- RIGHT SIDE --- */}
         <div className="hidden md:flex flex-col justify- items-center login-left-side text-white w-1/2 p-10 text-center">
          <img src="icons/loginLogo.svg" alt="Logo" className="mt-6 mb-6" />
          <p className="text-3xl font-semibold mt-4">
            ذكرياتك ليست مجرد صور بل صفحات من حياتك. ابدأها معنا.
          </p>
        </div>
       
      </div>
            {signUpOpen && <SignUp onClose={()=>setSignUpOpen(false)}/>}
    </div>
  );
}
