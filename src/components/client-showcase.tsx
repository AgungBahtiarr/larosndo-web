import { motion } from "framer-motion";

const ClientShowcase = (props) => {
  // const logos = [
  //   { name: "cli", logo: "client/logocli.png" },
  //   { name: "swin", logo: "client/logo_swin.png" },
  //   { name: "sewiwi", logo: "/client/sewiwi.png" },
  //   { name: "SMKN Glagah", logo: "/client/smkglagah.jpg" },
  //   { name: "SMKN 1 BWI", logo: "/client/smkn1bwi.jpg" },
  //   { name: "Satelit", logo: "/client/logo-satelit.png" },
  //   { name: "SMK 17 Cluring", logo: "/client/smk17cluring.png" },
  //   { name: "Stikes", logo: "/client/stikesbwi.png" },
  //   { name: "MAN 1 BWI", logo: "/client/man1bwi.jpeg" },
  //   { name: "STFI", logo: "/client/stfi.png" },
  //   { name: "MTS 10 BWI", logo: "/client/mts10bwi.png" },
  //   { name: "AYO", logo: "/client/ayo.webp" },
  //   { name: "Riyad", logo: "/client/riyad.png" },
  //   { name: "cebersoft", logo: "/client/cebersoft.png" },
  //   { name: "sewiwi", logo: "/client/sewiwi.png" },
  //   { name: "Pandawa", logo: "/client/pandawa.jpeg" },
  // ];

  const logos = props.logos;

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {props.title}
        </h2>
        <div className="relative h-40 overflow-hidden">
          <motion.div
            className="flex space-x-16 absolute"
            animate={{
              x: [0, -1920],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 30,
                ease: "linear",
              },
            }}
          >
            {logos.concat().map((logo) => (
              // <div
              //   key={index}
              //   className="flex items-center justify-center w-48 h-28 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              // >
              <img
                src={logo.logo}
                alt={`${logo.name} logo`}
                className="max-w-[310px] max-h-[100px] object-contain"
                loading="lazy"
              />
              // </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
