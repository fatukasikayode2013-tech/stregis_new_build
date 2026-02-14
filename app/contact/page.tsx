import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const mapsShortLink = 'https://maps.app.goo.gl/7voyua8954qBCCdJA';

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-transparent text-textPrimary pt-28 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-gradient-to-b from-white/80 to-lightBg/60 border border-gold/10 rounded-2xl shadow-xl p-8">
            <h1 className="text-4xl font-serif font-bold mb-4 gold-text text-center">Contact Us</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <i className="fas fa-map-marker-alt text-gold text-xl mt-1" />
                  <div>
                    <p className="text-sm text-gray-300 font-semibold">Address</p>
                    <p className="leading-relaxed">7 Osagiede St, Oka<br />Benin City 300102, Edo<br />Nigeria</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <i className="fas fa-phone text-gold text-xl mt-1" />
                  <div>
                    <p className="text-sm text-gray-300 font-semibold">Phone</p>
                    <a href="tel:+2349060001732" className="block hover:text-gold">+234 906 000 1732</a>
                    <a href="tel:+2348160522841" className="block hover:text-gold">+234 816 052 2841</a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <i className="fas fa-envelope text-gold text-xl mt-1" />
                  <div>
                    <p className="text-sm text-gray-300 font-semibold">Email</p>
                    <a href="mailto:info@stregishotelandresort.com" className="block hover:text-gold">info@stregishotelandresort.com</a>
                    <a href="mailto:reservations@stregishotelandresort.com" className="block hover:text-gold">reservations@stregishotelandresort.com</a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <i className="fab fa-whatsapp text-green-400 text-xl mt-1" />
                  <div>
                    <p className="text-sm text-gray-300 font-semibold">WhatsApp</p>
                    <a href="https://wa.me/2349060001732" target="_blank" rel="noopener noreferrer" className="block hover:text-green-400">+234 906 000 1732</a>
                  </div>
                </div>
              </div>

              {/* Map column */}
              <div>
                <div className="rounded-lg overflow-hidden border border-gold/20 shadow-lg mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7051623879647!2d5.612604073842114!3d6.302416293686743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1040d3cbf7670aef%3A0x267505a8f3c34362!2sSt.%20Regis%20Hotels%20%26%20Resorts!5e0!3m2!1sen!2sng!4v1770944423556!5m2!1sen!2sng"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="St Regis Hotel Location"
                  ></iframe>
                </div>

                <div className="flex gap-3">
                  <a
                    href={mapsShortLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center px-4 py-3 bg-gold text-textPrimary font-bold rounded-lg hover:bg-darkGold transition"
                  >
                    Open in Google Maps
                  </a>
                  <Link href="/" className="px-4 py-3 border border-gold text-gold rounded-lg hover:bg-gold/10 transition flex items-center justify-center">
                    Back Home
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
