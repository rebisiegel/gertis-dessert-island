"use client";

import { useState } from "react";

export default function LoginForm() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Később itt lesz az autentikációs logika
  };

  return (
    <section className="flex-grow flex items-center justify-center bg-white py-16">
      <div className="bg-[#f5f8fa]/70 backdrop-blur-sm p-8 rounded-2xl shadow-[0_8px_32px_rgba(137,187,214,0.3)] w-full max-w-md overflow-hidden mx-4 border-2 border-[#89BBD6]/50">
        {/* Címek */}
        <div className="relative h-12">
          <div
            className={`absolute w-full transform transition-transform duration-500 ease-in-out ${
              isLogin ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <h2 className="text-3xl font-semibold text-center text-[#4b778e]">
              Bejelentkezés
            </h2>
          </div>
          <div
            className={`absolute w-full transform transition-transform duration-500 ease-in-out ${
              isLogin ? "translate-x-full" : "translate-x-0"
            }`}
          >
            <h2 className="text-3xl font-semibold text-center text-[#4b778e]">
              Regisztráció
            </h2>
          </div>
        </div>

        {/* Váltó gombok */}
        <div className="mt-8 relative h-[50px] border border-[#89BBD6]/70 rounded-2xl overflow-hidden backdrop-blur-sm">
          <div className="flex h-full relative z-10">
            <button
              type="button"
              onClick={() => setIsLogin(true)}
              className={`flex-1 text-lg font-medium transition-colors duration-300 ${
                isLogin ? "text-white" : "text-[#4b778e]/90"
              }`}
            >
              Bejelentkezés
            </button>
            <button
              type="button"
              onClick={() => setIsLogin(false)}
              className={`flex-1 text-lg font-medium transition-colors duration-300 ${
                !isLogin ? "text-white" : "text-[#4b778e]/90"
              }`}
            >
              Regisztráció
            </button>
          </div>
          <div
            className={`absolute top-0 h-full w-1/2 bg-gradient-to-r from-[#4b778e]/90 via-[#89BBD6]/90 to-[#4b778e]/90 rounded-2xl transition-all duration-500 backdrop-blur-sm ${
              isLogin ? "left-0" : "left-1/2"
            }`}
          />
        </div>

        {/* Űrlapok */}
        <div className="relative mt-8">
          {/* Bejelentkezési űrlap */}
          <div
            className={`transform transition-all duration-500 ${
              isLogin
                ? "translate-x-0 opacity-100"
                : "translate-x-full opacity-0 absolute top-0 w-full"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                placeholder="Email cím"
                className="w-full h-[50px] px-4 rounded-2xl border-2 border-[#89BBD6]/70 focus:border-[#4b778e]/90 outline-none text-lg transition-colors bg-white/50 backdrop-blur-sm"
                required
              />
              <input
                type="password"
                placeholder="Jelszó"
                className="w-full h-[50px] px-4 rounded-2xl border-2 border-[#89BBD6]/70 focus:border-[#4b778e]/90 outline-none text-lg transition-colors bg-white/50 backdrop-blur-sm"
                required
              />
              {/* <div className="text-right">
                <a href="#" className="text-[#1a75ff] hover:underline text-sm">
                  Elfelejtett jelszó?
                </a>
              </div> */}
              <button
                type="submit"
                className="w-full h-[50px] rounded-2xl relative overflow-hidden group backdrop-blur-sm"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-[#4b778e]/90 via-[#89BBD6]/90 to-[#4b778e]/90 group-hover:opacity-90"></div>
                <span className="relative text-white text-lg font-medium">
                  Bejelentkezés
                </span>
              </button>
              <div className="text-center mt-6">
                <span className="text-gray-600/90">Még nem vagy tag?</span>
                <button
                  type="button"
                  onClick={() => setIsLogin(false)}
                  className="text-[#4b778e]/90 hover:text-[#89BBD6] hover:underline ml-1 font-medium"
                >
                  Regisztrálj most
                </button>
              </div>
            </form>
          </div>

          {/* Regisztrációs űrlap */}
          <div
            className={`transform transition-all duration-500 ${
              !isLogin
                ? "translate-x-0 opacity-100"
                : "-translate-x-full opacity-0 absolute top-0 w-full"
            }`}
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Vezetéknév"
                  className="w-full h-[50px] px-4 rounded-2xl border-2 border-[#89BBD6]/70 focus:border-[#4b778e]/90 outline-none text-lg transition-colors bg-white/50 backdrop-blur-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Keresztnév"
                  className="w-full h-[50px] px-4 rounded-2xl border-2 border-[#89BBD6]/70 focus:border-[#4b778e]/90 outline-none text-lg transition-colors bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email cím"
                  className="w-full h-[50px] px-4 rounded-2xl border-2 border-[#89BBD6]/70 focus:border-[#4b778e]/90 outline-none text-lg transition-colors bg-white/50 backdrop-blur-sm"
                  required
                />
                <input
                  type="text"
                  placeholder="Telefonszám"
                  className="w-full h-[50px] px-4 rounded-2xl border-2 border-[#89BBD6]/70 focus:border-[#4b778e]/90 outline-none text-lg transition-colors bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="password"
                  placeholder="Jelszó"
                  className="w-full h-[50px] px-4 rounded-2xl border-2 border-[#89BBD6]/70 focus:border-[#4b778e]/90 outline-none text-lg transition-colors bg-white/50 backdrop-blur-sm"
                  required
                />
                <input
                  type="password"
                  placeholder="Jelszó megerősítése"
                  className="w-full h-[50px] px-4 rounded-2xl border-2 border-[#89BBD6]/70 focus:border-[#4b778e]/90 outline-none text-lg transition-colors bg-white/50 backdrop-blur-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full h-[50px] rounded-2xl relative overflow-hidden group backdrop-blur-sm"
              >
                <div className="absolute inset-0 w-full h-full transition-all duration-300 bg-gradient-to-r from-[#4b778e]/90 via-[#89BBD6]/90 to-[#4b778e]/90 group-hover:opacity-90"></div>
                <span className="relative text-white text-lg font-medium">
                  Regisztráció
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
