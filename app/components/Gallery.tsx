'use client'

export default function Gallery() {
  const images = [
    {
      url: '/images/IMG-20260206-WA0286.jpg.jpeg',
      title: 'Green Field',
      span: 'col-span-2 row-span-2',
    },
    {
      url: '/images/IMG-20260206-WA0296.jpg.jpeg',
      title: 'Hotel Exterior',
      span: 'col-span-1 row-span-1',
    },
    {
      url: '/images/IMG-20260206-WA0363.jpg.jpeg',
      title: 'Room Design',
      span: 'col-span-1 row-span-1',
    },
    {
      url: '/images/IMG-20260214-WA0272.jpg.jpeg',
      title: 'Interior Walkway',
      span: 'col-span-1 row-span-1',
    },
    {
      url: '/images/IMG-20260214-WA0275.jpg.jpeg',
      title: 'Room Artwork',
      span: 'col-span-1 row-span-1',
    },
    {
      url: '/images/WhatsApp Image 2026-02-15 at 21.45.06.jpeg',
    },
  ];

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a961] tracking-widest mb-4">EXPLORE</p>
          <h2
            className="text-4xl lg:text-5xl text-[#1e3a5f] mb-6"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Gallery
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Take a visual tour through our elegant spaces and world-class facilities.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`${image.span} group relative overflow-hidden rounded-2xl cursor-pointer`}
            >
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <h3 className="text-white text-xl font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
