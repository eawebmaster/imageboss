import Image from "next/image";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";

const Experience = () => {
  return (
    <div className="mt-10 md:mt-20 px-4 md:px-0">
      <div className="flex items-center justify-center">
        <h3 className="max-w-4xl text-center text-2xl md:text-[44px] flex items-center justify-center text-[#081028]">
          Araç Görsellerinin Müşteri Satın Alma Deneyimine Etkisi Nedir?
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        <div className="border border-[#F3F4F6] rounded-lg overflow-hidden">
          <Image
            src="/images/blog1.png"
            alt="Experience"
            className="w-full object-cover h-[200px] md:h-[300px]"
            width={400}
            height={400}
          />
          <div className="p-4">
            <h3 className="font-semibold text-[#081028] text-lg md:text-[24px] mt-5">
              Araç Görselleri Satışı Artırır
            </h3>
            <p className="text-[#6B7280] text-sm md:text-[16px] mt-2">
              Kaliteli çekilmiş araç görselleri ve tutarlı bir ortamın arka
              planı her zaman araç satışlarınızı kolaylaştırır.
            </p>

            <div className="relative group hover-border-animation w-[100px]">
              <Link
                href="/"
                className="text-[#2E3238]  font-normal flex  text-[16px] md:text-[20px] items-center gap-2  mt-5 pb-2"
              >
                İncele
                <FaChevronRight size={18} />
              </Link>
              <div className="absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ease-out group-hover:w-full w-0"></div>
            </div>
          </div>
        </div>
        <div className="border border-[#F3F4F6] rounded-lg overflow-hidden">
          <Image
            src="/images/blog2.png"
            alt="Experience"
            className="w-full object-cover h-[200px] md:h-[300px]"
            width={400}
            height={400}
          />
          <div className="p-4">
            <h3 className="font-semibold text-[#081028] text-lg md:text-[24px] mt-5">
              Araç Görselleri Satışı Artırır
            </h3>
            <p className="text-[#6B7280] text-sm md:text-[16px] mt-2">
              Kaliteli çekilmiş araç görselleri ve tutarlı bir ortamın arka
              planı her zaman araç satışlarınızı kolaylaştırır.
            </p>

            <div className="relative group hover-border-animation w-[100px]">
              <Link
                href="/"
                className="text-[#2E3238]  font-normal flex  text-[16px] md:text-[20px] items-center gap-2  mt-5 pb-2"
              >
                İncele
                <FaChevronRight size={18} />
              </Link>
              <div className="absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ease-out group-hover:w-full w-0"></div>
            </div>
          </div>
        </div>
        <div className="border border-[#F3F4F6] rounded-lg overflow-hidden">
          <Image
            src="/images/blog3.png"
            alt="Experience"
            className="w-full object-cover h-[200px] md:h-[300px]"
            width={400}
            height={400}
          />
          <div className="p-4">
            <h3 className="font-semibold text-[#081028] text-lg md:text-[24px] mt-5">
              Araç Görselleri Satışı Artırır
            </h3>
            <p className="text-[#6B7280] text-sm md:text-[16px] mt-2">
              Kaliteli çekilmiş araç görselleri ve tutarlı bir ortamın arka
              planı her zaman araç satışlarınızı kolaylaştırır.
            </p>

            <div className="relative group hover-border-animation w-[100px]">
              <Link
                href="/"
                className="text-[#2E3238]  font-normal flex  text-[16px] md:text-[20px] items-center gap-2  mt-5 pb-2"
              >
                İncele
                <FaChevronRight size={18} />
              </Link>
              <div className="absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ease-out group-hover:w-full w-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
