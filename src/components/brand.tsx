import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Brands = () => {
  return (
    <div className="mt-10 md:mt-20 px-4 md:px-0">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <span className="text-base md:text-lg font-light text-theme-color text-center md:text-left">
          Dünyanın önde gelen markalarının başarılarına katkıda bulunmaktan
          gurur duyuyoruz.
        </span>
        <Link
          href="/"
          className="text-theme-color font-medium flex items-center gap-2 mt-4 md:mt-0"
        >
          Tümünü Gör
          <FaAngleRight size={20} />
        </Link>
      </div>
      <div className="mt-5">
        <div className="flex flex-wrap gap-5 items-center justify-center md:justify-between">
          <Link href="/">
            <Image
              width={80}
              height={40}
              objectFit="contain"
              src="/images/brands/dogus.png"
              alt="Brand"
            />
          </Link>
          <Link href="/">
            <Image
              width={80}
              height={40}
              objectFit="contain"
              src="/images/brands/borusan.png"
              alt="Brand"
            />
          </Link>
          <Link href="/">
            <Image
              width={80}
              height={40}
              objectFit="contain"
              src="/images/brands/tofas.png"
              alt="Brand"
            />
          </Link>
          <Link href="/">
            <Image
              width={80}
              height={40}
              objectFit="contain"
              src="/images/brands/otokoc.png"
              alt="Brand"
            />
          </Link>
          <Link href="/">
            <Image
              width={80}
              height={40}
              objectFit="contain"
              src="/images/brands/kosifler.png"
              alt="Brand"
            />
          </Link>
          <Link href="/">
            <Image
              width={80}
              height={40}
              objectFit="contain"
              src="/images/brands/byd.png"
              alt="Brand"
            />
          </Link>
          <Link href="/">
            <Image
              width={80}
              height={40}
              objectFit="contain"
              src="/images/brands/ford.png"
              alt="Brand"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Brands;
