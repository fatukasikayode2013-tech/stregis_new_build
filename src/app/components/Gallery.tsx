import Image from 'next/image';

export function Gallery() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1766928210443-0be92ed5884a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMGJlZHJvb20lMjBkZWNvcnxlbnwxfHx8fDE3NzI1NTM3NDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Elegant Rooms',
      span: 'col-span-2 row-span-2',
    },
    {
      url: 'https://images.unsplash.com/photo-1759038085950-1234ca8f5fed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMHJlY2VwdGlvbiUyMGRlc2t8ZW58MXx8fHwxNzcyNDU5NDc1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Reception',
      span: 'col-span-1 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1741852197045-cc35920a3aa0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMHJlc3RhdXJhbnQlMjBkaW5pbmd8ZW58MXx8fHwxNzcyNDc3ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Restaurant',
      span: 'col-span-1 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1712875652422-d5d81e6a87c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGJhciUyMGxvdW5nZXxlbnwxfHx8fDE3NzI0NzAyNDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Bar & Lounge',
      span: 'col-span-1 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1761666508180-e3eb99231470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3RlbCUyMGV2ZW50JTIwaGFsbCUyMHdlZGRpbmd8ZW58MXx8fHwxNzcyNTUzNzQzfDA&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Event Hall',
      span: 'col-span-1 row-span-1',
    },
    {
      url: 'https://images.unsplash.com/photo-1765439178218-e54dcbb64bcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGV4dGVyaW9yJTIwbW9kZXJufGVufDF8fHx8MTc3MjQ4NzM3MHww&ixlib=rb-4.1.0&q=80&w=1080',
      title: 'Exterior',
      span: 'col-span-2 row-span-1',
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
              <Image
                src={image.url}
                alt={image.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
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
