const Dream = () => {
  return (
    <div className="px-4 md:px-0">
      <h2 className="w-full text-center text-[#081028] text-2xl md:text-[30px] font-medium">
        Sadece Hayal Edin!
      </h2>
      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-5">
          <div className="border border-[#F3F4F6] rounded-md overflow-hidden">
            <img
              src="/images/original.png"
              alt="original"
              className="w-full h-auto"
            />
            <div className="h-[60px] md:h-[80px] flex items-center justify-center">
              <h3 className="text-[#081028] text-lg md:text-[18px] font-medium">
                Orjinal
              </h3>
            </div>
          </div>
          <div className="border border-[#F3F4F6] rounded-md overflow-hidden">
            <img
              src="/images/with-transparent.png"
              alt="Şeffaf Arka Plan"
              className="w-full h-auto"
            />
            <div className="h-[60px] md:h-[80px] flex items-center justify-center">
              <h3 className="text-[#081028] text-lg md:text-[18px] font-medium">
                Şeffaf Arka Plan
              </h3>
            </div>
          </div>
          <div className="border border-[#F3F4F6] rounded-md overflow-hidden">
            <img
              src="/images/new-behind.png"
              alt="Yeni Arka Plan"
              className="w-full h-auto"
            />
            <div className="h-[60px] md:h-[80px] flex items-center justify-center">
              <h3 className="text-[#081028] text-lg md:text-[18px] font-medium">
                Yeni Arka Plan
              </h3>
            </div>
          </div>
          <div className="border border-[#F3F4F6] rounded-md overflow-hidden">
            <img
              src="/images/multi-result.png"
              alt="Ve Daha Fazlası"
              className="w-full h-auto"
            />
            <div className="h-[60px] md:h-[80px] flex items-center justify-center">
              <h3 className="text-[#081028] text-lg md:text-[18px] font-medium">
                Ve Daha Fazlası
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dream;
