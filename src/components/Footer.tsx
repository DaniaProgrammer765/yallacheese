"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";


export default function Footer() {
    const pathname = usePathname();
    const MainPage = ["/"];
    const isMain = MainPage.includes(pathname);
    const router = useRouter();
  return (
    <footer className={`w-full text-gray-700 pt-12 pb-4 border-t border-gray-100 ${isMain ? `bg-white`: `bg-[#FBF9F9]`}`}>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-10 text-right">
        {/* العمود 1:  العنوان */}
        <div className="text-right">
          <h3 className="relative font-semibold text-primary mb-5 inline-block">
            العنوان
            <span className="absolute bottom-0 right-0 translate-y-3 w-[55%] h-[2px] bg-pink-600 rounded-full"></span>
          </h3>
          <ul className="space-y-3 text-sm mt-2">
            <li className="flex items-start gap-2 ">
              <Image
                src="/icons/location.svg"
                alt="Location"
                width={16}
                height={16}
              />
              <span>
                الطابق 27 شارع فيفيث، نيويورك، نيويورك، 10002، الولايات المتحدة
                الأمريكية
              </span>
            </li>
            <li className="flex items-center gap-2 ">
              <Image src="/icons/mail.svg" alt="Email" width={16} height={16} />
              <span>البريد الإلكتروني</span>
            </li>
            <li className="flex items-center gap-2 ">
              <Image
                src="/icons/phone.svg"
                alt="Phone"
                width={16}
                height={16}
              />
              <span>الهاتف</span>
            </li>
          </ul>
        </div>

        {/* العمود 2: الصفحات */}
        <div className="text-right">
          <h3 className="relative font-semibold text-primary mb-5 inline-block">
            الصفحات
            <span className="absolute bottom-0 right-0 translate-y-3 w-2/3 h-[2px] bg-pink-600 rounded-full"></span>
          </h3>
          <ul className="space-y-2 text-sm mt-2 list-none">
            <li className="flex items-center gap-2">
              <span className="text-primary text-lg leading-none">•</span>
              <span>حول</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary text-lg leading-none">•</span>
              <span>العروض</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary text-lg leading-none">•</span>
              <span>المنتجات</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-primary text-lg leading-none">•</span>

              <span>طباعة</span>
            </li>
          </ul>
        </div>

        {/* العمود 3: الدعم */}
        <div className="text-right">
          <h3 className="relative font-semibold text-primary mb-5 inline-block">
            الدعم
            <span className="absolute bottom-0 right-0 translate-y-3 w-1/2 h-[2px] bg-primary rounded-full"></span>
          </h3>
          <ul className="space-y-2 text-sm mt-2 list-none">
            <li className="flex items-center gap-2">
              <span className="text-primary text-lg leading-none">•</span>
              <span>الأسئلة الشائعة</span>
            </li>
            <li className="flex items-center  gap-2">
              <span className="text-primary text-lg leading-none">•</span>
              <span>السياسة والخصوصية</span>
            </li>
            <li className="flex items-center  gap-2">
              <span className="text-primary text-lg leading-none">•</span>
              <span>الشروط والأحكام</span>
            </li>
            <li className="flex items-center  gap-2">
              <span className="text-primary text-lg leading-none">•</span>
              <span>اتصل بنا</span>
            </li>
          </ul>
        </div>

        {/* العمود 4: الشعار والنص  */}
        <div className="flex flex-col">
          <Image
            src="/logo.svg"
            alt="YallaCheese Logo"
            width={95}
            height={28}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed text-gray-600 text-right">
            تأسست YallaCheese في الأردن عام 2018 وهي خدمة طباعية عبر الإنترنت
            تقدم جودة ممتازة للزبائن في حاجة لمطبوعات احترافية.
            <br /> عمان - الأردن
          </p>
          <div className="flex  gap-3 mt-4">
            <Link href="#">
              <Image
                src="/icons/facebook.svg"
                alt="Facebook"
                width={20}
                height={20}
              />
            </Link>
            <Link href="#">
              <Image
                src="/icons/instagram.svg"
                alt="Instagram"
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* خط الحقوق */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-100 pt-4">
        حقوق الطبع والنشر © 2025. جميع الحقوق محفوظة
      </div>
    </footer>
  );
}
