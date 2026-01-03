import Image from "next/image";

export default function HomeHero() {
  return (
    <section className="relative bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-[10%] grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT SIDE - Text Content */}
        <div className="space-y-8">
          {/* Navigation Numbers */}
          <div className="space-y-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="font-bold text-black">01</span>
              <div className="h-px w-16 bg-black"></div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-light text-gray-400">02</span>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
            <div className="flex items-center gap-3">
              <span className="font-light text-gray-400">03</span>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
          </div>

          {/* Main Heading */}
          <div className="mt-16">
            <h1 className="text-5xl lg:text-6xl font-light text-gray-900 mb-6">
              THINK DIFFERENT.
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed max-w-md">
              Depot is a unique & captivating theme designed specifically for all types of shops and online stores.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - Chair Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-2xl">
            {/* Temporarily using a placeholder - replace with your chair image */}
            <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
              <p className="text-gray-500">Chair Image Here</p>
            </div>
            
            {/* Floating Buttons */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-4">
              <button className="bg-red-500 text-white px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-red-600 transition-colors shadow-lg">
                RELATED
              </button>
              <button className="bg-white text-gray-900 px-6 py-3 text-xs font-bold uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg flex items-center gap-2">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                </svg>
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}