import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

import {
  Server,
  Database,
  Wifi,
  Cloud,
  Lock,
  Globe,
  Cpu,
  Network,
  Smartphone,
  Laptop,
} from "lucide-react";

const HeroSection = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center overflow-hidden">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10 w-full">
        <GoogleGeminiEffect />
      </div>
      <NetworkIcons />
    </div>
  );
};

const NetworkIcons = () => {
  return (
    <>
      {/* Icon-icon untuk desktop */}
      <Server className="absolute z-20 top-[10%] left-[5%] text-[#fb923c] opacity-50 h-12 w-12 animate-pulse hidden md:block" />
      <Database className="absolute z-20 top-[80%] left-[15%] text-[#fb923c] opacity-50 h-12 w-12 animate-pulse hidden md:block" />
      <Network className="absolute z-20 top-[30%] right-[10%] text-[#fb923c] opacity-50 h-12 w-12 animate-pulse hidden md:block" />
      <Wifi className="absolute z-20 bottom-[20%] right-[25%] text-[#fb923c] opacity-50 h-12 w-12 animate-pulse hidden md:block" />
      <Cloud className="absolute z-20 top-[15%] right-[30%] text-[#fb923c] opacity-50 h-10 w-10 animate-pulse hidden md:block" />
      <Lock className="absolute z-20 bottom-[15%] left-[30%] text-[#fb923c] opacity-50 h-8 w-8 animate-pulse hidden md:block" />
      <Globe className="absolute z-20 top-[5%] right-[5%] text-[#fb923c] opacity-50 h-14 w-14 animate-pulse hidden md:block" />
      <Cpu className="absolute z-20 bottom-[10%] left-[10%] text-[#fb923c] opacity-50 h-10 w-10 animate-pulse hidden md:block" />
      <Smartphone className="absolute z-20 top-[40%] left-[20%] text-[#fb923c] opacity-50 h-9 w-9 animate-pulse hidden md:block" />
      <Laptop className="absolute z-20 bottom-[30%] right-[15%] text-[#fb923c] opacity-50 h-11 w-11 animate-pulse hidden md:block" />
    </>
  );
};

const GoogleGeminiEffect = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="h-[40rem] relative overflow-hidden bg-white dark:bg-slate-900 flex items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Gradient mousePosition={mousePosition} />
      {/* <GridPattern /> */}
      <div className="relative z-30 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold dark:text-white mb-6">
          Welcome to Larosndo
        </h1>
        <p className="text-xl md:text-2xl dark:text-slate-200 mb-8 max-w-3xl mx-auto">
          Connecting You to the Future of Internet
        </p>
        <a
          href="#pricing"
          className="bg-[#fb923c] text-white hover:bg-[#f97316] font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block"
        >
          Explore Our Plans
        </a>
      </div>
    </div>
  );
};

const Gradient = ({ mousePosition }) => {
  return (
    <div
      className="absolute inset-0 z-10"
      style={{
        background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(251, 146, 60, 0.3), transparent 40%)`,
      }}
    />
  );
};

const GridPattern = () => {
  return (
    <div className="absolute inset-0 z-0">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-[1px] bg-slate-700"
          style={{ top: `${i * 10}%` }}
        />
      ))}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 bottom-0 w-[1px] bg-slate-700"
          style={{ left: `${i * 10}%` }}
        />
      ))}
    </div>
  );
};

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
          Trusted by Industry Leaders
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

export default HeroSection;
