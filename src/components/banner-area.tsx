import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const BannerArea = () => {
  return (
    <div className="flex flex-col gap-5 items-center justify-center mt-10 md:mt-50 px-4 md:px-0">
      <span className="text-lg md:text-2xl text-[#2E3238]">IMG BOSS</span>
      <div className="max-w-4xl flex flex-col items-center justify-center">
        <span className="text-center font-light text-theme-color text-3xl md:text-[50px]">
          Fotoğraflarınızın <span className="font-bold">arka planı’nı</span>{" "}
          saniyeler içinde harika hale getirin.
        </span>
      </div>
      <div className="max-w-5xl flex-col flex items-center">
        <span className="font-light mt-6 md:mt-10 text-base md:text-lg text-center text-[#081028]">
          Araç görsellerinizin arka planlarını saniyeler içinde değiştirin ve
          daha çekici hale getirin. IMG BOSS ile araçlarınızı potansiyel
          müşterilerinize daha etkili bir şekilde sunabilirsiniz.
        </span>

        <div className="flex flex-col md:flex-row gap-2 items-center justify-center mt-6 md:mt-10">
          <div className="bg-[#B6BCCD69] rounded-full px-1 py-1 block">
            <Link
              href="/"
              className="flex items-center gap-2 bg-[#79829F] px-6 md:px-10 py-3 md:py-4 text-white rounded-full"
            >
              <span>Kendiniz Deneyin</span>
              <FaAngleRight size={20} />
            </Link>
          </div>
          <Link
            href="/"
            className="flex items-center gap-2 text-[#B6BCCD] px-6 md:px-10 py-3 md:py-4 rounded-full"
          >
            <span>Nasıl Çalışır?</span>
            <FaAngleRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerArea;
