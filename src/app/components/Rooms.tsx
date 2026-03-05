import Image from 'next/image';
import { Users, Maximize } from 'lucide-react';

export function Rooms() {
  const rooms = [
    {
      name: 'Standard Room',
      image: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJvb20lMjBiZWR8ZW58MXx8fHwxNzcyNDUyOTM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Comfortable and elegantly furnished room with modern amenities for a relaxing stay.',
      size: '25 sqm',
      occupancy: '2 Guests',
      price: '₦25,000',
    },
    {
      name: 'Executive Room',
      image: 'https://images.unsplash.com/photo-1758448511255-ac2a24a135d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBob3RlbCUyMHN1aXRlfGVufDF8fHx8MTc3MjU0NzA3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Spacious room designed for business travelers, featuring a work desk and premium bedding.',
      size: '32 sqm',
      occupancy: '2 Guests',
      price: '₦35,000',
    },
    {
      name: 'Deluxe Room',
      image: 'https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZWx1eGUlMjBob3RlbCUyMHJvb20lMjBpbnRlcmlvcnxlbnwxfHx8fDE3NzI1MTA5NjJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Luxurious room with contemporary decor, sitting area, and enhanced amenities.',
      size: '40 sqm',
      occupancy: '2-3 Guests',
      price: '₦50,000',
    },
    {
      name: 'Suite',
      image: 'https://images.unsplash.com/photo-1731336478850-6bce7235e320?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHN1aXRlJTIwbHV4dXJ5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NzI1MDE0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
      description: 'Premium suite with separate living area, luxury bathroom, and exclusive services.',
      size: '60 sqm',
      occupancy: '3-4 Guests',
      price: '₦75,000',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="rooms" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a961] tracking-widest mb-4">ACCOMMODATIONS</p>
          <h2
            className="text-4xl lg:text-5xl text-[#1e3a5f] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Our Rooms & Suites
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose from our selection of beautifully appointed rooms, each designed to provide the ultimate comfort and relaxation.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-[#c9a961] text-white px-4 py-2 rounded-lg">
                  <p className="text-sm">From</p>
                  <p className="text-xl font-semibold">{room.price}</p>
                  <p className="text-xs">per night</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-2xl text-[#1e3a5f] mb-3"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {room.name}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {room.description}
                </p>

                {/* Room Details */}
                <div className="flex gap-4 mb-6 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Maximize className="w-4 h-4 text-[#c9a961]" />
                    <span>{room.size}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#c9a961]" />
                    <span>{room.occupancy}</span>
                  </div>
                </div>

                {/* Book Button */}
                <button
                  onClick={scrollToContact}
                  className="w-full bg-[#1e3a5f] text-white py-3 rounded-lg hover:bg-[#2d5080] transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
