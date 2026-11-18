import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-neutral-950 border-t border-gray-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-5 bg-gray-50 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 rounded-xl p-8 md:p-10 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Hubungi Kami
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Ada pertanyaan tentang paket atau butuh bantuan teknis? Tim kami siap membantu Anda.
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
                <div className="text-gray-700 dark:text-gray-200">
                  <a
                    href="mailto:isun@laros.ae"
                    className="hover:text-brand dark:hover:text-brand transition-colors rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    isun@laros.ae
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPinIcon
                  className="h-5 w-5 text-brand shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Jl. Perumahan Griya Gurit Permai Blok ii No.16, Gurit,
                  Pengatigan, Kec. Rogojampi, Kabupaten Banyuwangi, Jawa Timur
                  68462
                </span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-7 min-h-[340px] lg:min-h-[420px] rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-neutral-900">
            <iframe
              title="Lokasi Kantor PT. Lare Osing Ndo di Banyuwangi"
              width="100%"
              height="100%"
              loading="lazy"
              className="w-full h-full min-h-[340px] border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3948.1945071248224!2d114.2898398!3d-8.3006526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd151daa51db587%3A0xc9fe0c3c248e7db1!2sPT.%20Lare%20Osing%20Ndo!5e0!3m2!1sid!2sid!4v1700000000000"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
