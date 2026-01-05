"use client";

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
      <header className="bg-white border-b border-gray-200">
        <div className="relative max-w-[1400px] mx-auto px-10 h-20 flex items-center justify-between">

          {/* Left Menu */}
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

          {/* Right */}
          <div className="flex items-center gap-6 text-xs tracking-widest">
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
      <section className="relative min-h-[90vh] bg-gray-50 flex items-center overflow-hidden">
        <div className="w-full px-[8%] grid grid-cols-1 lg:grid-cols-2 items-center">

          {/* LEFT SIDE */}
          <div className="flex gap-16">
            {/* Numbers */}
            <div className="flex flex-col gap-6 pt-10">
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
            <div className="max-w-md pt-20">
              <h1 className="text-6xl font-light tracking-wide mb-8">
                THINK DIFFERENT.
              </h1>
              <p className="text-gray-500 leading-relaxed">
                Depot is a unique & captivating theme designed specifically for
                all types of shops and online stores.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[500px] lg:h-[600px] flex justify-end">
            <Image
              src={images[currentIndex]}
              alt="Chair"
              fill
              priority
              className="object-contain"
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
