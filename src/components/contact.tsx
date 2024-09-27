import { PhoneIcon, MapPinIcon, MailIcon } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-20 bg-white dark:bg-gray-900">
      <div className="absolute inset-0 z-0">
        {/* <img
          src="/placeholder.svg?height=600&width=1200"
          alt="Map Background"
          className="w-full h-full object-cover"
        /> */}

        <div>
          <iframe
            className="w-full h-[664px]"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31584.170849611866!2d114.289946!3d-8.300673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd151daa51db587%3A0xc9fe0c3c248e7db1!2sLare%20Osing%20Ndo!5e0!3m2!1sen!2sus!4v1727357101273!5m2!1sen!2sus"
            width=""
            height="full"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 md:p-12 lg:p-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Have questions or need assistance? Our team is here to help.
                Reach out to us using the contact information below or fill out
                the form, and we'll get back to you as soon as possible.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <PhoneIcon className="h-6 w-6 text-[#fb923c] dark:text-[#fb923c] mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-center">
                  <MailIcon className="h-6 w-6 text-[#fb923c] dark:text-[#fb923c] mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    info@larosndo.com
                  </span>
                </li>
                <li className="flex items-center">
                  <MapPinIcon className="h-6 w-6 text-[#fb923c] dark:text-[#fb923c] mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">
                    123 Tech Street, Internet City, 12345
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fb923c] focus:ring focus:ring-[#fb923c] focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fb923c] focus:ring focus:ring-[#fb923c] focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-[#fb923c] focus:ring focus:ring-[#fb923c] focus:ring-opacity-50 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#fb923c] hover:bg-[#f97316] text-white font-bold py-2 px-4 rounded-md transition duration-300"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
