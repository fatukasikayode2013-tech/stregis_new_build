 'use client';

export default function Amenities() {
  const amenities = [
    {
      icon: 'fas fa-swimming-pool',
      title: 'Swimming Pool',
      description: 'Olympic-sized luxury pool with heated water and cabana service'
    },
    {
      icon: 'fas fa-dumbbell',
      title: 'Fitness Center',
      description: 'State-of-the-art equipment and personal training services available'
    },
    // Spa removed per request
    {
      icon: 'fas fa-utensils',
      title: 'Fine Dining',
      description: 'Award-winning restaurants with Michelin-standard cuisine'
    },
    {
      icon: 'fas fa-wifi',
      title: 'High-Speed WiFi',
      description: 'Complimentary ultra-fast internet throughout the property'
    },
    {
      icon: 'fas fa-concierge-bell',
      title: '24/7 Concierge',
      description: 'Expert assistance for reservations, tours, and special requests'
    },
    {
      icon: 'fas fa-building',
      title: 'Conference Rooms',
      description: 'Modular spaces perfect for meetings and events up to 500 guests'
    },
    {
      icon: 'fas fa-car',
      title: 'Airport Transfer',
      description: 'Complimentary service to and from the airport with luxury vehicles'
    },
  ];

  return (
    <section id="amenities" className="py-20 md:py-32 px-4 bg-lightBg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-6xl font-serif tracking-wider mb-4">
            WORLD-CLASS <span className="gold-text">AMENITIES</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Indulge in our comprehensive suite of luxury facilities and services
          </p>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="fade-in-up group hover:transform hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center p-8 rounded-lg bg-gradient-to-b from-gray-900 to-gray-800/50 hover:from-gray-800 hover:to-darkBg border border-gray-700 hover:border-gold transition-all duration-300">
                <div className="text-4xl text-gold mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={amenity.icon}></i>
                </div>
                <h3 className="text-xl font-serif font-bold mb-2">{amenity.title}</h3>
                <p className="text-sm text-gray-400">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
