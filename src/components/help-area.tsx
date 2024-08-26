import Image from "next/image";

const HelpArea = () => {
  return (
    <div className="mt-10 w-full flex flex-col">
      <h2 className="font-medium text-2xl md:text-3xl text-[#081028] flex items-center justify-center">
        Araç Görsellerinizi
      </h2>
      <h3 className="font-medium text-2xl md:text-3xl text-[#081028] flex items-center justify-center">
        Nasıl Ön Plana Çırabirsiniz?
      </h3>
      <span className="text-[#9FA1A7] text-sm md:text-md font-light mt-6 md:mt-10 flex items-center justify-center text-center px-4 md:px-0">
        Araç fotoğraflarınızdan arka planı kaldırın, şeffaf bir arka plana sahip
        temiz bir araç kesiti elde edin.
      </span>

      <div className="mt-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center">
          <div className="flex flex-col bg-gray-100 bg-opacity-70 rounded-xl relative p-5">
            <img
              src="/images/multiple-car.png"
              alt="Help"
              className="w-full object-contain h-[200px] md:h-[400px]"
            />
            <div className="mt-2 flex flex-col items-center justify-center absolute bottom-[5%] md:bottom-[10%] w-full">
              <h3 className="font-medium text-[#081028] text-[14px] md:text-[16px]">
                Araçınızın Resimlerini Yükleyin
              </h3>
              <p className="font-normal text-[#6B7280] text-[12px] md:text-[16px] text-center">
                JPG, PNG veya HEIC dosyası yükleyin. Arabanın net kenarlarının
                olduğu bir resim seçmeye çalışın.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-gray-100 bg-opacity-70 rounded-xl relative p-5">
            <img
              src="/images/before-after.png"
              alt="Help"
              className="w-full object-contain h-[200px] md:h-[400px]"
            />
            <div className="mt-2 flex flex-col items-center justify-center absolute bottom-[5%] md:bottom-[10%] w-full">
              <h3 className="font-medium text-[#081028] text-[14px] md:text-[16px]">
                Arka Planı Otomatik Olarak Kaldır
              </h3>
              <p className="font-normal text-[#6B7280] text-[12px] md:text-[16px] text-center">
                IMG BOSS, araba görselinizden arka planı otomatik olarak
                kaldıracaktır. Arka plan kaldırıldıktan sonra, gerekirse kesmeyi
                hassaslaştırabilirsiniz.
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center mt-5">
          <div className="flex flex-col bg-gray-100 bg-opacity-70 rounded-xl relative p-5">
            <img
              src="/images/car-result.png"
              alt="Help"
              className="w-full object-contain h-[200px] md:h-[400px]"
            />
            <div className="mt-2 flex flex-col items-center justify-center absolute bottom-[5%] md:bottom-[10%] w-full">
              <h3 className="font-medium text-[#081028] text-[14px] md:text-[16px]">
                Arka Planı Değiştirin
              </h3>
              <p className="font-normal text-[#6B7280] text-[12px] md:text-[16px] text-center">
                İsteğe bağlı olarak arka planı herhangi bir renkle
                değiştirebilir ve gerçekçi bir gölge ekleyebilirsiniz.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-gray-100 bg-opacity-70 rounded-xl relative p-5">
            <img
              src="/images/upload-form-image.png"
              alt="Help"
              className="w-full object-contain h-[200px] md:h-[400px]"
            />
            <div className="mt-2 flex flex-col items-center justify-center absolute bottom-[5%] md:bottom-[10%] w-full">
              <h3 className="font-medium text-[#081028] text-[14px] md:text-[16px]">
                Özel Plaka Görseli Ekle
              </h3>
              <p className="font-normal text-[#6B7280] text-[12px] md:text-[16px] text-center">
                IMG BOSS aracınızın plakasını doğru bir şekilde algılar ve daha
                sonra eklemiş olduğunuz plakanızı yerleştirir.
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-gray-100 bg-opacity-70 rounded-xl relative p-5">
            <img
              src="/images/car-form-detail.png"
              alt="Help"
              className="w-full object-contain h-[200px] md:h-[400px]"
            />
            <div className="mt-2 flex flex-col items-center justify-center absolute bottom-[5%] md:bottom-[10%] w-full">
              <h3 className="font-medium text-[#081028] text-[14px] md:text-[16px]">
                Kapak Görseliniz İçin Şablon Oluşturun
              </h3>
              <p className="font-normal text-[#6B7280] text-[12px] md:text-[16px] text-center">
                Aracını hakkında önemli bilgileri kullanarak bir şablon
                oluşturun. Aracınızın daha çok dikkat çekmesini sağlayın.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpArea;
