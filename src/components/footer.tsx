import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { FaSlack } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white mt-20 py-10 px-5">
      <div className="max-w-6xl mx-auto border-b pb-10 grid  md:grid-cols-2 sm:grid-cols-2 gap-6 text-center md:text-left">
        <div className="flex flex-col items-center justify-between md:items-start">
          <img src="/images/logo.png" alt="Logo" className="mb-4" />
          <div className="flex space-x-4">
            {/* Bu ikonlar FontAwesome veya benzeri bir kütüphaneden olabilir */}
            {/* <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-slack"></i>
            </a> */}
            {/* Diğer ikonları buraya ekleyebilirsiniz */}

            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Twitter"
            >
              <BsTwitterX size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Github"
            >
              <IoLogoGithub size={20} />
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-700"
              aria-label="Slack"
            >
              <FaSlack size={20} />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-blue-600 font-semibold mb-4">Kurumsal</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Kurumsal
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Fiyatlar
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 font-semibold mb-4">Yardım</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Nasıl Çalışır?
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                S.S.S
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                İletişim
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-blue-600 font-semibold mb-4">Hesabım</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Giriş Yap
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Kayıt Ol
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:text-gray-800">
                Editör
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex items-center justify-between  pt-6 text-center text-gray-600">
        <p>
          <b>© 2024 IMG</b> BOSS Bilgi Teknolojileri Tüm hakları saklıdır.
        </p>
        <p className="mt-2">
          <a
            href="#"
            className="border text-sm border-[#F3F4F6] rounded-full px-5 py-2 "
          >
            {/*dot*/}
            <span className="w-2 h-2 bg-green-500 rounded-full inline-block mr-2"></span>
            MyFC AGENCY
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
