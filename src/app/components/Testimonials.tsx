import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Adebayo Johnson',
      role: 'Business Executive',
      content: 'Exceptional service and luxurious accommodations. The staff went above and beyond to ensure my stay was comfortable. Highly recommend for business travelers.',
      rating: 5,
    },
    {
      name: 'Chioma Okafor',
      role: 'Wedding Guest',
      content: 'We hosted our wedding reception at St. Regis and it was absolutely perfect. The event hall was stunning and the team was incredibly professional.',
      rating: 5,
    },
    {
      name: 'Michael Thompson',
      role: 'Tourist',
      content: 'Beautiful hotel in a great location. The rooms are spacious and clean, and the restaurant serves delicious food. Will definitely be back!',
      rating: 5,
    },
    {
      name: 'Blessing Eze',
      role: 'Corporate Client',
      content: 'Perfect venue for our company retreat. The conference facilities are modern and well-equipped. The entire experience was seamless.',
      rating: 5,
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a961] tracking-widest mb-4">TESTIMONIALS</p>
          <h2
            className="text-4xl lg:text-5xl text-[#1e3a5f] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            What Our Guests Say
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Don't just take our word for it. Here's what our valued guests have to say about their experience.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-[#f5f3ee] p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#c9a961] text-[#c9a961]" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <p className="text-[#1e3a5f] font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
