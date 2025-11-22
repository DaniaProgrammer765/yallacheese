"use client";
import { useState } from "react";
import AddressModal from "./AddressModal";

export default function Cart({ isOpen, onClose }: any) {
  const [addressOpen, setAddressOpen] = useState(false);
  return (
    <>
      {/* خلفية سوداء */}
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 bg-black/40 z-40"></div>
      )}

      {/* السلة */}
      <div
        className={`fixed top-0 right-0 w-[360px] h-full bg-white z-50 shadow-lg p-5 overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* عنوان */}
        <h2 className=" text-center text-[18px] font-book text-basic-color mb-5">
          إتمام الطلب
        </h2>
        {/* زر: أضف العنوان */}
        <button
          className="w-full flex justify-between items-center border px-4 py-3 rounded-lg mb-3 cursor-pointer"
          style={{ borderColor: "rgba(0,0,0,0.1)" }}
          onClick={() => setAddressOpen(true)}
        >
          {/* 🔹 السهم + النص بدون أي مسافة */}
          <div className="flex items-center gap-2">
            <img src="/icons/right-arrow.svg" />
            <span className="text-[14px] font-book text-basic-color pl-1">
              أضف العنوان
            </span>
          </div>

          {/* 🔹 الأيقونة اليسارية */}
          <img src="/icons/address.svg" />
        </button>

        {/* زر: طريقة الدفع */}
        <button
          className="w-full flex justify-between items-center border px-4 py-3 rounded-lg mb-3 cursor-pointer"
          style={{ borderColor: "rgba(0,0,0,0.1)" }}
        >
          <div className="flex gap-2 items-center gap-0">
            <img src="/icons/right-arrow.svg" />
            <span className="text-[14px] font-book text-basic-color pl-1">
              أضف طريقة الدفع
            </span>
          </div>
          <img src="/icons/payment.svg" />
        </button>
        {/* زر: كود الخصم */}
        <button
          className="w-full flex justify-between items-center border px-4 py-3 rounded-lg mb-5"
          style={{ borderColor: "rgba(0,0,0,0.1)" }}
        >
          <span className="text-[14px] font-book text-basic-color">
            كود الخصم
          </span>
          <img src="/icons/discount.svg" />
        </button>
        {/* ملخص الطلب */}
        <div className="bg-[#F9FAFB] p-4 rounded-[14px] mt-[40px]">
          <h3 className="text-[14px] font-book text-basic-color mb-3 mt-2">
            ملخص الطلب
          </h3>
          {/* كارت المنتج (dummy) */}
          <div className=" rounded-lg p-3 mb-4 flex gap-3">
            <div className="flex-1"></div>
          </div>
        </div>
        {/* الفاتورة */}
        <div className="bg-[#F9FAFB] p-4 rounded-[14px] mt-[40px]">
          <h3 className="text-[14px] font-book text-basic-color mb-3 mt-3">
            الفاتورة
          </h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-[14px] font-book text-basic-color">
                عدد المنتجات
              </span>
              <span>0</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[14px] font-book text-basic-color">
                السعر الأصلي
              </span>
              <span>0</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[14px] font-book text-basic-color">
                السعر بعد الخصم
              </span>
              <span>0</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[14px] font-book text-primary">
                نسبة الخصم
              </span>
              <span className="text-[14px] font-book text-primary">0%</span>
            </div>

            <div className="flex justify-between">
              <span className="text-[14px] font-book text-basic-color">
                تكلفة الشحن
              </span>
              <span className="text-[14px] font-book text-[#00A63E]">
                مجاني
              </span>
            </div>
          </div>

          <div className="flex justify-between text-[16px] text-basic-color font-semibold mt-4">
            <span>المجموع النهائي</span>
            <span className="flex gap-2 justify-center items-center">
              <span>0</span>
              <img src="/icons/black-ryal.svg" />
            </span>
          </div>
        </div>
        {/* زر الشراء */}
        <button
          className="w-full flex gap-4 justify-center items-center text-white font-bold rounded-[12px] py-3 mt-5"
          style={{ background: "#FF2B77" }}
        >
          <span> إتمام الشراء</span>
          <img src="/icons/ryal.svg" />
        </button>
      </div>
     <AddressModal isAddressOpen={addressOpen} onCloseAddress={() => setAddressOpen(false)} />
    </>
  );
}
