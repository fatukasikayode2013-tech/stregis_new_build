'use client'

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/pics/pool.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl">
        <h1
          className="text-5xl md:text-6xl lg:text-7xl mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Experience Comfort & Class
          <br />
          <span className="text-[#c9a961]">in the Heart of Benin City</span>
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-3xl mx-auto">
          Premium accommodation, refined hospitality, and exceptional service.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-[#c9a961] text-white px-10 py-4 rounded-lg text-lg hover:bg-[#b89851] transition-all hover:shadow-2xl transform hover:-translate-y-1"
          >
            Book Now
          </button>
          <button
            onClick={() => scrollToSection('rooms')}
            className="bg-white/10 backdrop-blur-md text-white border-2 border-white px-10 py-4 rounded-lg text-lg hover:bg-white hover:text-[#1e3a5f] transition-all hover:shadow-2xl transform hover:-translate-y-1"
          >
            View Rooms
          </button>
        </div>
      </div>
    </section>
  );
}
