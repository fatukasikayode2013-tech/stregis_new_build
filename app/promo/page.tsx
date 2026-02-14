import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Promo - St Regis Hotel & Resort',
  description: 'Limited time promotion from St Regis Hotel & Resort',
};

export default function PromoPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-lightBg to-white/80 flex items-center justify-center p-4">
      {/* Back Link */}
      <Link
        href="/"
        className="absolute top-6 left-6 bg-gold/20 text-gold px-4 py-2 rounded border border-gold/50 hover:bg-gold/30 transition text-sm font-semibold"
      >
        ← Back
      </Link>

      {/* ACTIVE Badge */}
      <div className="absolute top-6 right-6">
        <span className="inline-block bg-gold text-textPrimary px-5 py-2 font-bold rounded-full shadow-lg shadow-gold/50 animate-pulse text-sm">
          ACTIVE OFFER
        </span>
      </div>

      {/* Main Card Container */}
      <div className="w-full max-w-6xl bg-white/5 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden flex flex-col lg:flex-row">
        {/* Image Section (65%) */}
          <div className="w-full lg:w-[65%] relative h-80 lg:h-auto lg:min-h-[600px] bg-gray-100">
          <Image
            src="/images/promo.jpeg"
            alt="Valentine's Day Exclusive at St Regis"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Info Section (35%) */}
        <div className="w-full lg:w-[35%] p-8 lg:p-10 flex flex-col justify-center items-start">
          {/* Heading */}
          <h1 className="text-3xl lg:text-4xl font-serif font-bold text-textPrimary mb-2 gold-glow">
            Valentine&apos;s Day Special
          </h1>
          <div className="h-1 w-12 bg-gold mb-6"></div>

          {/* Promo Text */}
          <p className="text-gold text-sm font-semibold uppercase tracking-[2px] mb-4">
            10% OFF All Room Rates
          </p>

          <p className="text-gray-600 text-base leading-relaxed mb-6">
            Celebrate love at St Regis Hotel & Resort this Valentine&apos;s Day. Enjoy exclusive romantic amenities, complimentary welcome champagne and chocolates, and late checkout until 6 PM.
          </p>

          <p className="text-gray-400 text-sm mb-8 border-l-2 border-gold pl-4">
            Create unforgettable memories with your special someone. From candlelit dinners to personalized experiences, every moment is designed to deepen your connection in an atmosphere of unparalleled elegance.
          </p>

          {/* Benefits List */}
          <div className="space-y-3 mb-8 w-full">
            <div className="flex items-start gap-3">
              <span className="text-gold text-lg">✓</span>
              <span className="text-gray-600 text-sm">10% discount on all room categories</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold text-lg">✓</span>
              <span className="text-gray-300 text-sm">Complimentary welcome champagne and chocolates</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold text-lg">✓</span>
              <span className="text-gray-300 text-sm">Late checkout at 6 PM</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-gold text-lg">✓</span>
              <span className="text-gray-300 text-sm">Complimentary rose petals and romantic ambiance</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 w-full">
            <Link
              href="/#booking"
              className="flex-1 px-6 py-3 bg-gold text-textPrimary font-bold uppercase tracking-wider rounded-lg hover:bg-darkGold transition-all duration-300 text-center hover:shadow-lg hover:shadow-gold/50"
            >
              Book Now
            </Link>
            <Link
              href="/"
              className="px-6 py-3 border-2 border-gold text-gold font-semibold uppercase tracking-wider rounded-lg hover:bg-gold/10 transition"
            >
              Learn More
            </Link>
          </div>

          {/* Fine Print */}
          <p className="text-gray-500 text-xs mt-8 text-center w-full">
            Valid for Valentine&apos;s Day bookings through February 28, 2026. Terms and conditions apply.
          </p>
        </div>
      </div>
    </main>
  );
}
