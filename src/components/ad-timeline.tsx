import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const AdTimeline = () => {
  return (
    <div className="mt-10 relative flex flex-col">
      <h2 className="font-medium text-2xl md:text-3xl text-[#081028] flex items-center justify-center text-center">
        İlan Akışınızda Uyumu Yakalayın
      </h2>

      <div className="flex items-center justify-center">
        <p className="text-[#5B6172] max-w-screen-md text-center text-sm md:text-md font-light mt-6 md:mt-10 px-4 md:px-0">
          Araç görselleri, kullanıcıların satın alma kararlarını vermede önemli
          rol oynar. Kaliteli ve profesyonel görseller üreterek, kullanıcıların
          dikkatini çekebilir, tıklama oranlarını artırabilir ve satışlarınızı
          yükseltebilirsiniz.
        </p>
      </div>

      <div className="mt-5">
        <img
          src="/images/ad-timeline.png"
          alt="Ad Timeline"
          className="w-full h-auto"
        />
      </div>
      <div className="w-full mt-5">
        <img
          src="/images/timeline-bg.png"
          className="w-full h-auto"
          alt="Ad Timeline Background"
        />
      </div>
      <div className="flex flex-col items-center justify-center mt-10 md:mt-20 z-10 absolute bottom-0 w-full">
        <h3 className="text-2xl md:text-[50px] max-w-screen-md text-center text-theme-color px-4 md:px-0">
          IMG BOSS ile satışlara odaklanın, görselleri bize bırakın!
        </h3>
        <div className="bg-[#002BA133] rounded-full px-1 py-1 w-auto mt-6">
          <Link
            href="/"
            className="flex items-center gap-2 bg-[#002BA1] px-6 md:px-10 py-3 md:py-4 text-white rounded-full text-sm md:text-base"
          >
            <span>Hemen Deneyin ve Farkı Görün!</span>
            <FaAngleRight size={20} />
          </Link>
        </div>
        <div className="h-[50px]"></div>
      </div>
    </div>
  );
};

export default AdTimeline;
