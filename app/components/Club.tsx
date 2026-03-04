'use client'

export default function Club() {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="club" className="relative h-screen flex items-center justify-center bg-black">
      {/* video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/video/club.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 text-center px-4 max-w-3xl text-white">
        <h2 className="text-4xl lg:text-5xl font-serif mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>
          The Club
        </h2>
        <p className="text-lg mb-8">
          Step into our exclusive club where elegance meets energy. Enjoy premium cocktails, live DJs, and a vibrant atmosphere curated just for you.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-[#c9a961] text-white px-8 py-3 rounded-lg hover:bg-[#b89851] transition-all"
        >
          Book a Table
        </button>
      </div>
    </section>
  );
}
