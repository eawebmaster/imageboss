import Image from "next/image";

const VideoArea = () => {
  return (
    <div className="w-full h-[300px] md:h-[658px] border-[#79829F] rounded-md mt-10 md:mt-20 overflow-hidden p-[10px] md:p-[20px] relative">
      <Image
        src="/images/video-area.png"
        alt="Video"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default VideoArea;
