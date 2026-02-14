import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { rooms, formatPrice } from '@/lib/rooms';

type Props = { params: { slug: string } };

export default function RoomDetailPage({ params }: Props) {
  const slug = params.slug;
  const room = rooms.find((r) => r.slug === slug);

  if (!room) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Room not found</p>
      </main>
    );
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent text-textPrimary pt-28 pb-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gold/10">
              <div className="relative h-[520px] w-full">
                <Image src={`/images/${room.image}`} alt={room.name} fill className="object-cover" />
              </div>
            </div>

            <div className="pt-4">
              <h1 className="text-4xl font-serif font-bold mb-2">{room.name}</h1>
              <p className="text-gold font-semibold mb-4 text-xl">{formatPrice(room.price)} / Night</p>
              <p className="text-gray-600 mb-6">{room.description}</p>

              <h4 className="text-lg font-semibold mb-2">Features</h4>
              <ul className="list-inside list-disc text-gray-600 mb-6 space-y-1">
                {room.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Link href="/contact" className="px-6 py-3 bg-gold text-textPrimary font-bold rounded-lg hover:bg-darkGold transition">
                  Book Now
                </Link>
                <Link href="/rooms" className="px-6 py-3 border border-gold text-gold rounded-lg hover:bg-gold/10 transition">
                  Back to Rooms
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
