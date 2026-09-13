import bannerStack from "../assets/banner-stack.png";

function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 mt-5 max-w-lg">
            Explore modern technologies and create your own
            personalized developer stack in one place.
          </p>

          <div className="flex flex-wrap gap-4 mt-7">
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 text-white px-6 py-3 rounded-lg font-medium hover:opacity-90 transition">
              Explore Technologies
            </button>

            <button className="border border-gray-300 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src={bannerStack}
            alt="Dev Stack Builder"
            className="w-full max-w-md object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;