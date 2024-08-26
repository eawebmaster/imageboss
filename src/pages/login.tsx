import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "rizzui";
import Layout from "./layout";
import BannerArea from "@/components/banner-area";
import VideoArea from "@/components/video-area";
import Brands from "@/components/brand";
import HelpArea from "@/components/help-area";
import Header from "@/components/header";
import Experience from "@/components/experience";
import AdTimeline from "@/components/ad-timeline";
import { FcGoogle } from "react-icons/fc";
import LoginForm from "@/components/form/login-form";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
              <LoginForm />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
