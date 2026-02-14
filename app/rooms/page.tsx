import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { rooms, formatPrice } from '@/lib/rooms';

export const metadata = {
  title: 'Rooms - St Regis Hotel & Resort',
  description: 'Explore our luxury rooms and suites at St Regis Hotel & Resort',
};

export default function RoomsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent text-textPrimary pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-wide">
              OUR <span className="gold-text">ROOMS</span>
            </h1>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Discover refined comfort in every stay — curated for discerning guests.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <div key={room.id} className="bg-white rounded-2xl overflow-hidden border border-gold/10 shadow-lg">
                <div className="relative h-64 w-full">
                  <Image src={`/images/${room.image}`} alt={room.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-serif font-bold mb-2">{room.name}</h3>
                  <p className="text-gold font-semibold mb-3">{formatPrice(room.price)} / Night</p>
                  <p className="text-gray-600 text-sm mb-4">{room.description}</p>
                  <div className="flex gap-3">
                    <Link href={`/rooms/${room.slug}`} className="px-5 py-3 bg-gold text-textPrimary font-bold rounded-lg hover:bg-darkGold transition">
                      View
                    </Link>
                    <Link href="/contact" className="px-5 py-3 border border-gold text-gold rounded-lg hover:bg-gold/10 transition">
                      Book
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
