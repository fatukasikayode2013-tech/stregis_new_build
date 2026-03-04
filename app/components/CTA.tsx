'use client'

export default function CTA() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 lg:py-28 bg-[#1e3a5f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <h2
          className="text-4xl lg:text-6xl text-white mb-6"
          style={{ fontFamily: 'Playfair Display, serif' }}
        >
          Ready to Experience Luxury?
        </h2>
        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
          Book your stay at St. Regis Hotel & Resort today and discover the perfect blend of comfort, elegance, and exceptional service.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-[#c9a961] text-white px-12 py-5 rounded-lg text-xl hover:bg-[#b89851] transition-all hover:shadow-2xl transform hover:-translate-y-1"
        >
          Book Your Stay Today
        </button>
      </div>
    </section>
  );
}
