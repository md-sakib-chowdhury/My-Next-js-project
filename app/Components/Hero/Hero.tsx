import Image from "next/image";

import heroImg from "../../Assets/depot 1.jpg";
import heroImg2 from "../../Assets/depot 2.jpg";
import heroImg3 from "../../Assets/depot 3.jpg";
import heroImg4 from "../../Assets/depot 4.jpg";
import heroImg5 from "../../Assets/depot 5.jpg";
import heroImg6 from "../../Assets/depot 6.jpg";

export default function BlogSection() {
  const blogPosts = [
    {
      img: heroImg,
      date: "02.02.2017.",
      title: "OUR PERSONAL DEPARTMENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient"
    },
    {
      img: heroImg2,
      date: "02.02.2017.",
      title: "SUCCESS HAS IT'S ADVANTAGE",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient"
    },
    {
      img: heroImg3,
      date: "02.02.2017.",
      title: "SKY IS THE LIMIT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient"
    },
    {
      img: heroImg4,
      date: "02.02.2017.",
      title: "PLANTS AREN'T GREEN",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient"
    },
    {
      img: heroImg5,
      date: "02.02.2017.",
      title: "TO BE DIFFERENT",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient"
    },
    {
      img: heroImg6,
      date: "02.02.2017.",
      title: "OUR TALENT IS FINDING YOURS",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ut ullamcorper leo, eget euismod orci. Cum sociis natoque penatibus et magnis dis parturient"
    },
  ];

  return (
    <>
      {/* ================= HERO TEXT ONLY ================= */}
      <div className="w-full bg-gray-100 py-40 flex flex-col items-center justify-center text-center px-6">
        <p className="text-sm tracking-widest font-semibold mb-6 text-gray-600 uppercase">
          WELCOME TO DEPOT
        </p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-snug text-gray-800 max-w-3xl mb-8">
          The best way to make news is to announce a new category, not a new product.
        </h1>
      </div>

      {/* Blog Grid Section */}
      <section className="px-[10%] py-40">
        <div className="grid grid-cols-3 gap-8 pt-20">
          {blogPosts.map((post, i) => (
            <div key={i} className="">
              {/* IMAGE */}
              <div className="">
                <Image
                  src={post.img}
                  alt={post.title}
                  className="w-full h-auto"
                />
              </div>

              {/* DATE */}
              <p className="mt-4 text-[10px] text-gray-400 tracking-wider">
                {post.date}
              </p>

              {/* TITLE */}
              <h3 className="mt-2 text-sm font-bold uppercase tracking-wide text-gray-900 leading-tight">
                {post.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                {post.description}
              </p>

              {/* LEARN MORE LINK */}
              <a 
                href="#" 
                className="mt-4 inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-gray-900 hover:text-gray-600 transition-colors"
              >
                LEARN MORE
                <svg 
                  className="ml-1 w-3 h-3" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}