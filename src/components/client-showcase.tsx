import { motion } from "framer-motion";

const ClientShowcase = () => {
  const logos = [
    { name: "TechCorp", logo: "/client/smkglagah.jpg" },
    { name: "InnovateTech", logo: "/client/smkn1bwi.jpg" },
    { name: "FutureSoft", logo: "/client/smk17cluring.png" },
    { name: "GlobalNet", logo: "/client/stikesbwi.png" },
    { name: "DataStream", logo: "/client/man1bwi.jpeg" },
    { name: "CloudWave", logo: "/client/stfi.png" },
    { name: "SmartSystems", logo: "/client/mts10bwi.png" },
    { name: "ConnectX", logo: "/client/ayo.webp" },
    { name: "NexTech", logo: "/client/riyad.png" },
    { name: "DigiSolutions", logo: "/client/cebersoft.png" },
    { name: "CyberLink", logo: "/client/sewiwi.png" },
    { name: "InfoSys", logo: "/client/pandawa.jpeg" },
  ];

  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
        Pilihan Utama Lembaga dan Bisnis
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
            {logos.concat(logos).map((logo, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-48 h-28 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={logo.logo}
                  alt={`${logo.name} logo`}
                  className="max-w-[120px] max-h-[60px] object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;
