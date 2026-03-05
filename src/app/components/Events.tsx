import Image from 'next/image';
import { Calendar, PartyPopper, Briefcase } from 'lucide-react';

export function Events() {
  const eventTypes = [
    {
      icon: Briefcase,
      title: 'Corporate Meetings',
      description: 'Professional conference rooms equipped with modern technology',
    },
    {
      icon: PartyPopper,
      title: 'Weddings & Celebrations',
      description: 'Elegant banquet halls perfect for your special day',
    },
    {
      icon: Calendar,
      title: 'Conferences & Seminars',
      description: 'Spacious venues for large-scale events and gatherings',
    },
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="py-20 lg:py-28 bg-[#f5f3ee]">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <p className="text-[#c9a961] tracking-widest mb-4">EVENTS & CONFERENCING</p>
            <h2
              className="text-4xl lg:text-5xl text-[#1e3a5f] mb-6"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              Perfect Venue for Every Occasion
            </h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Host your next event at St. Regis Hotel & Resort. Our versatile event spaces, professional staff, and comprehensive amenities ensure your gathering is memorable and successful.
            </p>

            <div className="space-y-6 mb-8">
              {eventTypes.map((event, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-[#c9a961] rounded-xl flex items-center justify-center">
                      <event.icon className="w-7 h-7 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl text-[#1e3a5f] mb-2">{event.title}</h3>
                    <p className="text-gray-600">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToContact}
              className="bg-[#c9a961] text-white px-8 py-4 rounded-lg hover:bg-[#b89851] transition-all hover:shadow-lg text-lg"
            >
              Inquire About Events
            </button>
          </div>

          {/* Image */}
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1505845753232-f74a87b62db6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGNvbmZlcmVuY2UlMjByb29tJTIwbWVldGluZ3xlbnwxfHx8fDE3NzI1MDk4NDV8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Conference Room"
              fill
              className="object-cover rounded-2xl shadow-xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg hidden lg:block">
              <p className="text-4xl font-bold text-[#c9a961]" style={{ fontFamily: 'Playfair Display, serif' }}>500+</p>
              <p className="text-gray-600">Events Hosted</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
