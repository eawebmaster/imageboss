import { Inter } from "next/font/google";
import Header from "@/components/header";
import { FcGoogle } from "react-icons/fc";
import RegisterForm from "@/components/form/register-form";

export default function Register() {
  return (
    <div className="flex flex-col h-screen gradient-bg">
      <div className="pb-2 ">
        <div className="max-w-screen-2xl mx-auto">
          <Header />

          <main className="flex  justify-center ">
            <div className="max-w-screen-sm mt-20 bg-white w-full rounded-lg p-[40px]">
              <h2 className="font-bold text-theme-color text-3xl">
                Hesap Oluştur
              </h2>
              <span className="text-md text-[#2E3238] font-normal">
                Hesap oluşturmak için e-posta adresinizi ve şifrenizi girin!
              </span>
              <button className="mt-5 w-full rounded-full py-4 px-10 flex items-center justify-center gap-2 bg-[#FAFAFA]">
                <FcGoogle size={24} />
                <span className="text-[#2E3238] font-normal text-md">
                  Google ile Giriş Yap
                </span>
              </button>
              <div className="mt-5">
                <div className="flex items-center">
                  <div className="flex-1 h-px bg-[#F2F2F2]"></div>
                  <span className="px-2 text-gray-500">veya</span>
                  <div className="flex-1 h-px bg-[#F2F2F2]"></div>
                </div>
              </div>
              <RegisterForm />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
