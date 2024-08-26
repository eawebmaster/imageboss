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
import UploadArea from "@/components/upload-area";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="pb-2 gradient-bg">
        <div className="max-w-screen-2xl mx-auto ">
          <Header />
        </div>
      </div>
      <div className="h-screen bg-white">
        <UploadArea />
      </div>
      <Footer />
    </div>
  );
}
