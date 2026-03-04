import { MapPin, Users, Award, Briefcase } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: MapPin,
      title: 'Prime Location',
      description: 'Strategically located in the heart of Benin City',
    },
    {
      icon: Award,
      title: 'Comfortable Rooms',
      description: 'Elegantly designed rooms with modern amenities',
    },
    {
      icon: Users,
      title: 'Professional Service',
      description: 'Dedicated team committed to excellence',
    },
    {
      icon: Briefcase,
      title: 'Business & Leisure',
      description: 'Perfect for both corporate and vacation stays',
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-[#f5f3ee]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <img
              src="/pics/IMG-20260214-WA0260.jpg.jpeg"
              alt="Hotel Lobby"
              className="w-full h-[500px] object-cover rounded-2xl shadow-xl"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <p className="text-[#c9a961] tracking-widest mb-4">WELCOME TO ST. REGIS</p>
            <h2
              className="text-4xl lg:text-5xl text-[#1e3a5f] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Where Luxury Meets Nigerian Hospitality
            </h2>
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Nestled in the vibrant city of Benin, St. Regis Hotel & Resort offers a perfect blend of elegance and comfort. Our commitment to excellence ensures every guest experiences the finest in Nigerian hospitality.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Whether you're visiting for business or leisure, our carefully curated amenities, exceptional service, and prime location make us the ideal choice for discerning travelers.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#c9a961] rounded-lg flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-[#1e3a5f] mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
