import { motion } from "framer-motion";

const ClientShowcase = (props) => {
  return (
    <section className="py-20 dark:bg-[#1f2937]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-8">
          {props.title}
        </h2>
        <div className="relative h-40 overflow-hidden">
          <motion.div
            className="flex space-x-16 absolute"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {props.children}
            {props.children} {/* Duplikasi children langsung di dalam render */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientShowcase;