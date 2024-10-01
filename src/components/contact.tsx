import { PhoneIcon, MapPinIcon, MailIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31584.170849611866!2d114.289946!3d-8.300673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd151daa51db587%3A0xc9fe0c3c248e7db1!2sLare%20Osing%20Ndo!5e0!3m2!1sen!2sus!4v1727357101273!5m2!1sen!2sus"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="relative z-10 container mx-auto px-4 py-16 sm:px-6 lg:px-8 pointer-events-none">
        <div className="flex md:justify-end">
          <div className="w-full md:w-1/2 lg:w-2/5 bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 lg:p-16 pointer-events-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Hubungi kami
            </h2>
            <div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Ada pertanyaan atau butuh bantuan? Tim kami siap membantu.
                Hubungi kami menggunakan informasi kontak di bawah
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-[#fb923c] dark:text-[#fb923c] mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    +62 821 4162 3298
                  </span>
                </li>
                <li className="flex items-center">
                  <MailIcon className="h-6 w-6 text-[#fb923c] dark:text-[#fb923c] mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    support@laros.ae / info@laros.ae
                  </span>
                </li>
                <li className="flex items-center">
                  <MapPinIcon className="h-14 w-14 text-[#fb923c] dark:text-[#fb923c] mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Perum Griya Gurit Permai Blok II-16 Pengantigan, Rogojampi,
                    Kab. Banyuwangi, Jawa Timur 68462
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
