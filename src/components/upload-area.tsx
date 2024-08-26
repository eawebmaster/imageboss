"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { FaEdit, FaPen } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { IoCloudUploadOutline, IoImagesOutline } from "react-icons/io5";
import { Input } from "rizzui";

const UploadArea = () => {
  const [plateFilePreview, setPlateFilePreview] = useState<string | null>(null);
  const uploadInputRef = useRef<any>(null);

  const [files, setFiles] = useState<any[]>([]);

  return (
    <div className="flex flex-col md:flex-row items-start gap-5 mt-5">
      <div className="grid grid-flow-row-dense grid-cols-1 md:grid-cols-3 md:grid-rows-3 w-full md:w-1/4 border border-[#E4E7EB] h-full min-full p-5 rounded-2xl flex flex-col justify-between">
        <div className="col-span-2">
          <h2 className="text-theme-color font-bold text-xl">ARAÇ BAŞLIĞI</h2>
          <Input
            className="mt-2"
            variant="flat"
            rounded="pill"
            size="lg"
            placeholder="örn: BMW 320 2024 / 12391"
            suffix={<FaPen className="text-[#9098A0]" />}
          />
        </div>
        <div className="col-span-2 mt-5 md:mt-0">
          <h2 className="text-theme-color font-bold text-xl">PLAKA</h2>
          <label
            htmlFor="upload_plate"
            className="flex min-h-[100px] rounded-md border border-solid items-center gap-2 mt-2 flex-1 flex-col justify-center relative"
          >
            {plateFilePreview && (
              <img src={plateFilePreview} className="w-full h-full absolute" />
            )}
            <input
              type="file"
              id="upload_plate"
              ref={uploadInputRef}
              className="hidden absolute top-0 left-0"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  const reader = new FileReader();
                  reader.onload = () => {
                    setPlateFilePreview(reader.result as string);
                  };
                  reader.readAsDataURL(file);
                }
              }}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={20}
              fill="none"
            >
              <path
                stroke="#9098A0"
                strokeWidth={2}
                d="M23 9.604h2.667a2.667 2.667 0 0 1 2.667 2.667v1.333a2.667 2.667 0 0 1-2.667 2.667M23 9.604l-2.058-6.176a2.667 2.667 0 0 0-2.53-1.824h-6.078m10.666 8H12.334m-8 0 2.059-6.176a2.667 2.667 0 0 1 2.53-1.824h3.41m-8 8h8m-8 0a2.667 2.667 0 0 0-2.666 2.667v1.333a2.667 2.667 0 0 0 2.667 2.667m8-6.667v-8M9.667 16.271h10.667m-10.667 0a2.667 2.667 0 1 1-5.333 0m5.333 0a2.667 2.667 0 1 0-5.333 0m16 0a2.667 2.667 0 1 0 5.333 0m-5.333 0a2.667 2.667 0 1 1 5.333 0"
              />
            </svg>
            <span className="text-[#9098A0]">Plakanızı Buraya Ekleyin</span>
          </label>
          <div className="flex space-x-4 mt-2">
            <button
              onClick={() => {
                //clear input
                uploadInputRef.current.value = "";
                setPlateFilePreview(null);
              }}
              className="flex items-center justify-center space-x-2 w-full md:w-36 h-12 border-2 border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition duration-300"
            >
              <FaRegTrashCan />

              <span>SİL</span>
            </button>

            <button className="flex items-center justify-center space-x-2 w-full md:w-36 h-12 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
              <IoCloudUploadOutline className="w-6 h-6" />

              <span>YÜKLE</span>
            </button>
          </div>
        </div>

        <div className="flex-1 col-span-2 mt-5 md:mt-5 flex items-end justify-center text-[#9FA1A7]">
          <span>Sınırlı bir süre için kullanımı ücretsiz !</span>
        </div>
      </div>

      <div className="w-full md:w-2/4 mt-5 md:mt-0">
        <label
          htmlFor="files"
          className="min-h-[300px] md:min-h-[500px] border border-dashed rounded-lg flex items-center justify-center flex-col gap-8"
        >
          {files.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {files.map((file, i) => (
                <div key={i} className="relative">
                  <img
                    src={URL.createObjectURL(file)}
                    className="w-32 h-32 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => {
                      setFiles((prev) =>
                        prev.filter((_, index) => index !== i)
                      );
                    }}
                    className="absolute top-0 right-0 bg-red-500 text-white rounded-full p-1"
                  >
                    <FaRegTrashCan />
                  </button>
                </div>
              ))}
            </div>
          )}
          <input
            onChange={(e) => {
              const files = e.target.files;
              if (files) {
                setFiles(Array.from(files));
              }
            }}
            multiple
            type="file"
            id="files"
            className="hidden"
          />
          <div className="flex flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={80}
              height={81}
              fill="none"
            >
              <path
                stroke="#9098A0"
                strokeLinecap="round"
                strokeWidth={3}
                d="m3.333 33.77 40.976 40.977a3.333 3.333 0 0 0 4.714 0l27.643-27.643m-53.333 3.334 14.31-14.31a3.333 3.333 0 0 1 4.714 0l20.976 20.976m-4.584-37.917h2.5m-2.5 2.5h2.5m-31.25 55.417h20c9.335 0 14.002 0 17.567-1.816a16.667 16.667 0 0 0 7.284-7.284c1.816-3.565 1.816-8.232 1.816-17.567v-20c0-9.334 0-14-1.816-17.566a16.667 16.667 0 0 0-7.284-7.284C64.001 3.771 59.334 3.771 50 3.771H30c-9.334 0-14.002 0-17.567 1.816a16.667 16.667 0 0 0-7.283 7.284c-1.817 3.565-1.817 8.232-1.817 17.566v20c0 9.335 0 14.002 1.817 17.567a16.667 16.667 0 0 0 7.283 7.284c3.565 1.816 8.233 1.816 17.567 1.816Zm33.334-56.666a3.333 3.333 0 1 1-6.667 0 3.333 3.333 0 0 1 6.667 0Z"
              />
            </svg>
            <span className="text-lg font-normal text-[#9098A0]">
              Dosyaları buraya bırakın
            </span>
          </div>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 space-x-0 md:space-x-4 mt-2 items-center justify-center">
          <button className="flex items-center justify-center space-x-2 w-full h-12 border-2 border-blue-500 text-blue-500 rounded-full hover:bg-blue-500 hover:text-white transition duration-300">
            <IoCloudUploadOutline className="w-6 h-6" />
            <span>RESİM YÜKLEYİN</span>
          </button>
          <button className="flex items-center justify-center space-x-2 w-full h-12 border-2 border-green-500 text-green-500 rounded-full hover:bg-green-500 hover:text-white transition duration-300 mt-2 md:mt-0">
            <IoImagesOutline />
            <span>İŞLEME AL</span>
          </button>
        </div>
        <span className="text-center flex items-center justify-center mt-2 font-normal text-lg text-[#9098A0]">
          Bir seferde en fazla 15 araç resmi yüklenebilir.
        </span>
      </div>

      <div className="w-full md:w-1/4 border border-[#E4E7EB] h-full min-h-full p-5 mt-5 md:mt-0">
        <h2 className="text-theme-color font-bold text-xl">Kendiniz Deneyin</h2>
        <div className="flex items-center flex-wrap gap-2 mt-2">
          {new Array(8).fill(0).map((_, i) => (
            <div key={i}>
              <Image
                src="/images/try-self-sample-car.png"
                width={145}
                height={100}
                className="rounded-lg object-cover"
                alt="sample-car"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UploadArea;
