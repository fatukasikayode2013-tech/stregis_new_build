import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import BookingForm from '@/components/BookingForm';
import RoomsGallery from '@/components/RoomsGallery';
import Amenities from '@/components/Amenities';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-darkBg text-white">
      <Navbar />
      <Hero />
      <BookingForm />
      <RoomsGallery />
      <Amenities />
      <Footer />
    </main>
  );
}
