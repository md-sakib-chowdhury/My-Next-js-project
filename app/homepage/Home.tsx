'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { Search, User, Menu } from "lucide-react";

import chair1 from "../Assets/chair.png";
import chair2 from "../Assets/chair 2.png";
import chair3 from "../Assets/chair 3.png";

export default function HomePage() {
  const images = [chair1, chair2, chair3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="bg-white border-b border-gray-400">
  <div className="relative w-full h-20 flex items-center justify-end pr-10">

    {/* Left Menu (Right-Aligned) */}
    <nav className="flex gap-8 text-xs tracking-[3px] uppercase text-gray-800">
      <a href="#">Home</a>
      <a href="#" className="font-medium">Shop</a>
      <a href="#">Pages</a>
      <a href="#">Elements</a>
    </nav>

    {/* Center Logo */}
    <h1 className="absolute left-1/2 -translate-x-1/2 text-2xl tracking-[6px] font-semibold">
      DEPOT
    </h1>

    {/* Right Side */}
    <div className="flex items-center gap-6 text-xs tracking-widest ml-6">
      <span>CART ($0)</span>
      <span className="flex items-center gap-1">
        <User size={16} /> LOGIN
      </span>
      <Search size={16} />
      <Menu size={18} />
    </div>
  </div>
</header>


      {/* ================= HERO ================= */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gray-50">
        {/* Wide White Background Box */}
        <div className="w-[90%] bg-white rounded-xl shadow-lg flex flex-col lg:flex-row items-center overflow-hidden">

          {/* LEFT SIDE */}
          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 p-12 lg:w-1/2">
            
            {/* Numbers */}
            <div className="flex flex-col gap-6">
              {[1, 2, 3].map((num, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span
                    className={`text-sm tracking-widest ${
                      currentIndex === i
                        ? "text-black font-medium"
                        : "text-gray-400"
                    }`}
                  >
                    0{num}
                  </span>
                  <span
                    className={`h-px transition-all ${
                      currentIndex === i
                        ? "w-14 bg-black"
                        : "w-8 bg-gray-300"
                    }`}
                  />
                </div>
              ))}
            </div>

            {/* Text */}
            <div className="max-w-md">
              <h1 className="text-6xl font-light tracking-wide mb-6">
                THINK DIFFERENT.
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Depot is a unique & captivating theme designed specifically for
                all types of shops and online stores.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative lg:w-1/2 h-[800px] flex justify-center items-center  border-gray-200 p-6">
            <Image
              src={images[currentIndex]}
              alt="Chair"
              className="object-contain w-full h-full"
              priority
            />

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    currentIndex === i
                      ? "w-10 bg-black"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
