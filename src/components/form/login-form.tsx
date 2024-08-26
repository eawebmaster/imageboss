"use client";
import Link from "next/link";
import { useState } from "react";
import { FaChevronRight, FaEye, FaEyeSlash } from "react-icons/fa";
import { Checkbox } from "rizzui";
import { z } from "zod";
const loginSchema = z.object({
  name: z.string().min(3),
  password: z.string().min(6),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    name: "",
    password: "",
  });

  const handleLogin = (e: any) => {
    e.preventDefault();
    loginSchema.parse(loginData);
    console.log(loginData);
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="form">
        <label htmlFor="" className="text-[#737373] font-normal text-[md]">
          E-mail <span className="text-[#FF0000]">*</span>
        </label>
        <input
          type="text"
          className="w-full  py-3 mt-2 rounded-full border-[#F2F2F2] border focus:ring-0 focus:outline-none"
          placeholder="E-mail"
          value={loginData.name}
          onChange={(e) => setLoginData({ ...loginData, name: e.target.value })}
        />
      </div>
      <div className="form mt-5">
        <label htmlFor="" className="text-[#737373] font-normal text-[md]">
          Şifre <span className="text-[#FF0000]">*</span>
        </label>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            className="w-full  py-3 mt-2 rounded-full border-[#F2F2F2] border focus:ring-0 focus:outline-none"
            placeholder="Şifre"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <button
            type="button"
            className="absolute right-0 top-0 bottom-0 py-3 px-5"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <Checkbox label="Beni hatırla" className="text-[#737373]" />
        <Link
          href="/forgot-password"
          className="text-theme-color font-medium text-md"
        >
          Şifremi Unuttum
        </Link>
      </div>
      <button className="bg-blue-800 flex items-center justify-center gap-2 w-full mt-5 text-white py-3 px-6 rounded-full border-4 border-blue-100 shadow-lg">
        Giriş Yap <FaChevronRight size={15} />
      </button>
      <div className="mt-3">
        <span className="text-[#737373] text-md font-normal">
          Hesabınız yok mu?{" "}
          <Link href="/register" className="text-theme-color font-medium">
            Hemen Kayıt Ol
          </Link>
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
