import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

export default function Header() {
  return (
    <div className="lg:h-[60px] my-5 flex flex-col md:flex-row items-center justify-between">
      <div className="flex-1 mb-4 md:mb-0">
        <Link href="/" title="Anasayfa" aria-label="Anasayfa">
          <Image src="/images/logo.png" alt="Logo" width={150} height={60} />
        </Link>
      </div>
      <div className="flex-1 flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-4 md:mb-0">
        <Link
          className="font-normal text-[#2E3238] text-sm md:text-md"
          href="/about"
          title="Hakkında"
          aria-label="Hakkında"
        >
          Hakkımızda
        </Link>
        <Link
          className="font-normal text-[#2E3238] text-sm md:text-md"
          href="/contact"
          title="İletişim"
          aria-label="İletişim"
        >
          Editör
        </Link>
        <Link
          className="font-normal text-[#2E3238] text-sm md:text-md"
          href="/contact"
          title="İletişim"
          aria-label="İletişim"
        >
          Fiyatlar
        </Link>
        <Link
          className="font-normal text-[#2E3238] text-sm md:text-md"
          href="/contact"
          title="İletişim"
          aria-label="İletişim"
        >
          Blog
        </Link>
        <Link
          className="font-normal text-[#2E3238] text-sm md:text-md"
          href="/contact"
          title="İletişim"
          aria-label="İletişim"
        >
          İletişim
        </Link>
      </div>
      <div className="flex-1 flex items-center justify-end gap-2 md:gap-5">
        <Link
          href="/"
          className="border border-[#E4E7EB] bg-white px-4 md:px-10 py-2 md:py-5 text-theme-color text-sm md:text-md rounded-full"
        >
          Giriş Yap
        </Link>
        <div className="bg-[#002BA133] rounded-full px-1 py-1">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#002BA1] px-4 md:px-10 py-2 md:py-5 text-white text-sm md:text-md rounded-full"
          >
            <span>Kayıt Ol</span>
            <FaAngleRight size={16} className="md:size-[20px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
