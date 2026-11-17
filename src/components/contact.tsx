import { PhoneIcon, MapPinIcon, MailIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <iframe
          title="Peta lokasi PT Lare Osing Ndo di Banyuwangi"
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31584.170849611866!2d114.289946!3d-8.300673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd151daa51db587%3A0xc9fe0c3c248e7db1!2sLare%20Osing%20Ndo!5e0!3m2!1sen!2sus!4v1727357101273!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-8 sm:py-16 sm:px-6 lg:px-8 pointer-events-none">
        <div className="flex md:justify-end">
          <div className="w-full md:w-1/2 lg:w-2/5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl p-8 md:p-10 pointer-events-auto">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
              Hubungi Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Ada pertanyaan tentang paket atau butuh bantuan teknis? Tim kami
              siap membantu Anda.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <PhoneIcon
                  className="h-5 w-5 text-brand shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <a
                  href="https://wa.me/6282141623298"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-200 hover:text-brand dark:hover:text-brand font-medium transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                >
                  +62 821 4162 3298
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MailIcon
                  className="h-5 w-5 text-brand shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <div className="flex flex-wrap gap-x-1.5 text-gray-700 dark:text-gray-200">
                  <a
                    href="mailto:support@laros.ae"
                    className="hover:text-brand dark:hover:text-brand transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    support@laros.ae
                  </a>
                  <span aria-hidden="true">/</span>
                  <a
                    href="mailto:info@laros.ae"
                    className="hover:text-brand dark:hover:text-brand transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    info@laros.ae
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon
                  className="h-5 w-5 text-brand shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Perum Griya Gurit Permai Blok II-16 Pengantigan, Rogojampi,
                  Kab. Banyuwangi, Jawa Timur 68462
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
