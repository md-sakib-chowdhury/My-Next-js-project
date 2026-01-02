import Image from "next/image";
import heroImg2 from "../../Assets/depot 2.jpg";
import heroImg3 from "../../Assets/depot 3.jpg";
import heroImg4 from "../../Assets/depot 4.jpg";
import heroImg5 from "../../Assets/depot 5.jpg";
import heroImg6 from "../../Assets/depot 6.jpg";

export default function Hero() {
  const cards = [
    { img: heroImg2, title: "OUR PERSONAL DEPARTMENT" },
    { img: heroImg3, title: "SUCCESS HAS IT’S ADVANTAGE" },
    { img: heroImg4, title: "SKY IS THE LIMIT" },
    { img: heroImg5, title: "PLANTS AREN’T GREEN" },
    { img: heroImg6, title: "TO BE DIFFERENT" },
    { img: heroImg2, title: "OUR TALENT IS FINDING YOURS" },
  ];

  return (
    <div>
      {/* ================= HERO TEXT ONLY ================= */}
      <div className="w-full bg-gray-100 py-40 flex flex-col items-center justify-center text-center px-6">
        <p className="text-sm tracking-widest font-semibold mb-6 text-gray-600 uppercase">
          WELCOME TO DEPOT
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug text-gray-800 max-w-3xl mb-8">
          The best way to make news is to announce a new category, not a new product.
        </h1>
        
      </div>

      {/* ================= CARD SECTION ================= */}
      <section className="px-[10%] py-20">
        <div className="mt-28 px-6 lg:px-20 xl:px-28">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-24">
            {cards.map((card, i) => (
              <div key={i} className="flex flex-col">
                
                {/* Card Image */}
                <div className="relative w-full h-[260px]">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Date */}
                <p className="text-sm text-gray-400 mt-6">
                  02.02.2017.
                </p>

                {/* Title */}
                <h3 className="mt-2 text-lg font-bold uppercase tracking-wider">
                  {card.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-500 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  In ut ullamcorper leo, eget euismod orci.
                  Cum sociis natoque penatibus et magnis dis parturient.
                </p>

                {/* Learn More Button */}
                <button className="mt-6 text-sm font-semibold uppercase tracking-wider flex items-center gap-2">
                  Learn More <span>→</span>
                </button>

              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
