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
import Dream from "@/components/dream";
import CustomerComment from "@/components/customer-comment";
import HeroSection from "@/components/hero-section";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="pb-2 gradient-bg">
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          <BannerArea />
          <VideoArea />
          <Brands />
          <main></main>
        </div>
      </div>
      <div className="bg-white">
        <div className="max-w-screen-2xl mx-auto pb-[40px]">
          <HelpArea />
          <Experience />
        </div>
      </div>
      <div className="bg-[#F3F4F6] pt-[40px]">
        <div className="max-w-screen-2xl mx-auto">
          <AdTimeline />
        </div>
      </div>
      <div className="bg-white pt-[40px]">
        <div className="max-w-screen-2xl mx-auto">
          <Dream />
        </div>
      </div>
      <div className="gradient-bg mt-10 pt-[40px]">
        <div className="max-w-screen-2xl mx-auto">
          <CustomerComment />
        </div>
      </div>
      <div className="bg-white mt-10 pt-[40px]">
        <div className="max-w-screen-2xl mx-auto">
          <HeroSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}
