"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// ✅ Correct paths from app/homepage/Home.tsx
import chair1 from "../Assets/chair.png";
import chair2 from "../Assets/chair 2.png";
import chair3 from "../Assets/chair 3.png";

export default function Home() {
  const images = [chair1, chair2, chair3];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-[10%] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-10">
          {/* Numbers */}
          <div className="space-y-4 text-sm">
            {[1, 2, 3].map((num, i) => (
              <div key={i} className="flex items-center gap-3">
                <span
                  className={
                    currentIndex === i
                      ? "font-bold text-black"
                      : "font-light text-gray-400"
                  }
                >
                  0{num}
                </span>
                <div
                  className={`h-px ${
                    currentIndex === i
                      ? "w-16 bg-black"
                      : "w-12 bg-gray-300"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Heading */}
          <div>
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              THINK DIFFERENT.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Depot is a unique & captivating theme designed specifically for all
              types of shops and online stores.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-2xl h-[400px]">
            <Image
              src={images[currentIndex]}
              alt={`Chair ${currentIndex + 1}`}
              fill
              priority
              className="object-contain"
            />

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex
                      ? "w-8 bg-black"
                      : "w-2 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
