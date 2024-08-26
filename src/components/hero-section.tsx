import React from "react";
import { FaChevronRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="relative hero-section-bg text-white py-10 md:py-20 px-4 md:px-10 rounded-lg w-full">
      <div className="max-w-xl md:max-w-3xl w-full">
        <h1 className="text-[28px] md:text-[40px] font-bold mb-6">
          IMG BOSS ile <br /> İşlerinizi Daha Kolay Hale Getirin
        </h1>
        <p className="text-[14px] md:text-[16px] font-normal mb-8">
          Fotoğraflarınızın öne çıkmasını sağlamak için daha da kolay ve hızlı
          işlem yapmak ister misiniz? IMG BOSS telefonlarla uyumlu olması
          sayesinde tüm işlemlerinizi kolayca yapabilirsiniz. Toplu düzenleme,
          HD kalitede sorunsuz bir şekilde fotoğraflarınızı oluşturma deneyim
          edinin.
        </p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <button className="flex items-center gap-5 justify-center border-white border font-semibold py-2 px-6 rounded-full hover:bg-gray-200">
            Hemen Deneyin
            <FaChevronRight size={15} />
          </button>
          <button className="flex items-center justify-center gap-2 border-b border-white font-semibold py-2 hover:bg-white hover:text-blue-600">
            İncele
            <FaChevronRight size={15} />
          </button>
        </div>
      </div>
      <img
        src="/images/phone-mockup.png"
        alt="hero"
        className="hidden md:block absolute right-0 top-[-4em] md:top-[-7em] w-32 md:w-auto"
      />
    </div>
  );
};

export default HeroSection;
