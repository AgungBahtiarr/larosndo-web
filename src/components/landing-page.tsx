"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  WifiIcon,
  GlobeIcon,
  RssIcon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  RocketIcon,
  StarIcon,
  MenuIcon,
  XIcon,
  MoonIcon,
  SunIcon,
  CheckIcon,
  UsersIcon,
  LightbulbIcon,
  TrendingUpIcon,
} from "lucide-react";

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

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Image } from "astro:assets";

export function LandingPageComponent() {
  const [theme, setTheme] = useState("light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  return (
    <div
      className={`${theme} bg-white dark:bg-gray-900 transition-colors duration-300`}
    >
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection />
      <ClientShowcase />
      <FeaturesSection />
      <PricingSection />
      <AboutSection />
      <ClientReviews />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

const Navbar = ({ theme, toggleTheme, isMenuOpen, setIsMenuOpen }) => {
  return (
    <nav className="bg-white dark:bg-gray-900 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            {/* <a
              href="#"
              className="text-2xl font-bold text-[#fb923c] dark:text-[#fb923c]"
            >
              Larosndo
            </a> */}
            <img className="h-14" src="laroslogo.png" alt="" />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavItems />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 dark:text-gray-400 hover:text-[#fb923c] dark:hover:text-[#fb923c]"
            >
              {isMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <MenuIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItems mobile />
            <div className="pt-4">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} mobile />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavItems = ({ mobile = false }) => {
  const items = [
    { name: "Home", href: "#" },
    { name: "Features", href: "#features" },
    { name: "Pricing", href: "#pricing" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return items.map((item) => (
    <a
      key={item.name}
      href={item.href}
      className={`${
        mobile
          ? "block px-3 py-2 rounded-md text-base font-semibold text-gray-700 dark:text-gray-300 hover:text-[#fb923c] dark:hover:text-[#fb923c] hover:bg-gray-50 dark:hover:bg-gray-700"
          : "text-gray-700 dark:text-gray-300 hover:text-[#fb923c] dark:hover:text-[#fb923c] px-3 py-2 rounded-md text-sm font-semibold"
      }`}
    >
      {item.name}
    </a>
  ));
};

const ThemeToggle = ({ theme, toggleTheme, mobile = false }) => {
  return (
    <button
      onClick={toggleTheme}
      className={`${
        mobile
          ? "flex items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-[#fb923c] dark:hover:text-[#fb923c] hover:bg-gray-50 dark:hover:bg-gray-700"
          : "text-gray-700 dark:text-gray-300 hover:text-[#fb923c] dark:hover:text-[#fb923c] p-2 rounded-md"
      }`}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {theme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </button>
  );
};

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

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Our Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard
            icon={<WifiIcon className="h-8 w-8" />}
            title="High-Speed Internet"
            description="Experience lightning-fast connectivity for seamless streaming and browsing."
          />
          <FeatureCard
            icon={<ShieldCheckIcon className="h-8 w-8" />}
            title="Enhanced Security"
            description="Stay protected with our advanced network security measures."
          />
          <FeatureCard
            icon={<HeadphonesIcon className="h-8 w-8" />}
            title="24/7 Support"
            description="Our dedicated team is always ready to assist you round the clock."
          />
          <FeatureCard
            icon={<RocketIcon className="h-8 w-8" />}
            title="Future-Ready Technology"
            description="Stay ahead with our cutting-edge infrastructure and constant upgrades."
          />
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-[#fb923c] dark:text-[#fb923c] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300">{description}</p>
    </div>
  );
};

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: 29.99,
      features: [
        "50 Mbps download speed",
        "Unlimited data",
        "Basic security features",
        "24/7 customer support",
      ],
    },
    {
      name: "Pro",
      price: 49.99,
      features: [
        "250 Mbps download speed",
        "Unlimited data",
        "Advanced security suite",
        "24/7 priority customer support",
        "Free modem rental",
      ],
    },
    {
      name: "Premium",
      price: 79.99,
      features: [
        "1 Gbps download speed",
        "Unlimited data",
        "Advanced security suite",
        "24/7 VIP customer support",
        "Free modem and router rental",
        "Static IP address",
      ],
    },
  ];

  return (
    <section id="pricing" className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Choose Your Plan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PricingCard = ({ plan }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 flex flex-col h-full">
      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          {plan.name}
        </h3>
        <p className="text-4xl font-bold text-[#fb923c] dark:text-[#fb923c] mb-6">
          ${plan.price}
          <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
            /mo
          </span>
        </p>
        <ul className="space-y-3 mb-6">
          {plan.features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-gray-600 dark:text-gray-300"
            >
              <CheckIcon className="h-5 w-5 text-[#fb923c] mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 dark:bg-gray-700 mt-auto">
        <button className="w-full bg-[#fb923c] hover:bg-[#f97316] text-white font-bold py-2 px-4 rounded transition duration-300">
          Choose Plan
        </button>
      </div>
    </div>
  );
};

const AboutSection = () => {
  const [activeTab, setActiveTab] = useState("mission");

  const tabContent = {
    mission: {
      title: "Our Mission",
      content:
        "At Larosndo, we're on a mission to bridge the digital divide by providing lightning-fast, reliable internet access to both urban and rural areas. We believe that everyone deserves to be connected to the world of opportunities that the internet offers.",
      icon: <LightbulbIcon className="h-12 w-12 text-[#fb923c]" />,
    },
    team: {
      title: "Our Team",
      content:
        "Behind Larosndo's success is a diverse team of passionate tech enthusiasts, network engineers, and customer service experts. Together, we work tirelessly to ensure that you stay connected to what matters most.",
      icon: <UsersIcon className="h-12 w-12 text-[#fb923c]" />,
    },
    future: {
      title: "Our Future",
      content:
        "As we look ahead, we're committed to pushing the boundaries of what's possible in internet connectivity. From exploring cutting-edge technologies to expanding our network reach, we're always innovating to bring you the internet of tomorrow, today.",
      icon: <TrendingUpIcon className="h-12 w-12 text-[#fb923c]" />,
    },
  };

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Larosndo
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Empowering communities with cutting-edge internet solutions since
            2010.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <motion.img
              src="/placeholder.svg?height=400&width=600"
              alt="Larosndo Team"
              className="rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            />
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
              <p className="text-2xl font-bold text-[#fb923c]">10+ Years</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                of Excellence
              </p>
            </div>
          </div>

          <div>
            <div className="flex space-x-4 mb-6">
              {Object.keys(tabContent).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-[#fb923c] text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600"
                  }`}
                >
                  {tabContent[tab].title}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg"
            >
              <div className="flex items-center mb-4">
                {tabContent[activeTab].icon}
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-4">
                  {tabContent[activeTab].title}
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                {tabContent[activeTab].content}
              </p>
            </motion.div>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <FeatureItem
                icon={<WifiIcon />}
                text="Cutting-edge fiber optic"
              />
              <FeatureItem icon={<GlobeIcon />} text="Expanding coverage" />
              <FeatureItem icon={<RssIcon />} text="Innovative solutions" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureItem = ({ icon, text }) => (
  <div className="flex flex-col items-center text-center">
    <div className="text-[#fb923c] mb-2">{icon}</div>
    <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
  </div>
);

const ClientReviews = () => {
  const reviews = [
    {
      name: "John Doe",
      role: "CEO, TechCorp",
      content:
        "Larosndo has transformed our business connectivity. Their high-speed internet and reliable service have been crucial to our success.",
      rating: 5,
    },
    {
      name: "Jane Smith",
      role: "Homeowner",
      content:
        "I've never experienced such fast and stable internet at home. Larosndo's customer service is top-notch too!",
      rating: 5,
    },
    {
      name: "Mike Johnson",
      role: "Small Business Owner",
      content:
        "Switching to Larosndo was the best decision for my business. Their internet speed and uptime are unmatched.",
      rating: 4,
    },
    {
      name: "Sarah Lee",
      role: "Remote Worker",
      content:
        "As someone who works from home, having reliable internet is crucial. Larosndo delivers consistently excellent service.",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <TestimonialCard key={index} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

const TestimonialCard = ({ review }) => {
  return (
    <div className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img
            src={`https://i.pravatar.cc/60?img=${Math.floor(
              Math.random() * 70
            )}`}
            alt={review.name}
            className="w-12 h-12 rounded-full"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {review.name}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {review.role}
          </p>
        </div>
      </div>
      <p className="text-gray-700 dark:text-gray-300 mb-4">{review.content}</p>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <StarIcon
            key={i}
            className={`w-5 h-5 ${
              i < review.rating
                ? "text-[#fb923c]"
                : "text-gray-300 dark:text-gray-600"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What internet speeds do you offer?",
      answer:
        "We offer a range of speeds to suit different needs, from 50 Mbps for basic browsing to 1 Gbps for heavy users and businesses. Our team can help you choose the best plan for your usage.",
    },
    {
      question: "Is there a data cap on your internet plans?",
      answer:
        "No, all our internet plans come with unlimited data. We believe in providing our customers with unrestricted access to the internet without worrying about data limits.",
    },
    {
      question: "Do you offer bundled services with TV or phone?",
      answer:
        "Yes, we offer various bundle options that include high-speed internet, TV, and phone services. These bundles can provide significant savings compared to purchasing services separately.",
    },
    {
      question: "What is your service availability area?",
      answer:
        "We currently serve major urban areas and are continuously expanding our network to reach more suburban and rural locations. You can check service availability for your address on our website or by contacting our customer service team.",
    },
    {
      question: "How long does installation typically take?",
      answer:
        "Standard installation usually takes 2-3 hours. However, this can vary depending on your home's setup and the services you're having installed. We'll provide you with a more accurate time estimate when you schedule your installation.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-gray-900 dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

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

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Larosndo</h3>
            <p className="text-gray-400">
              Connecting you to the future of internet technology.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#fb923c] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-[#fb923c] transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-[#fb923c] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-[#fb923c] transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[#fb923c] transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <PhoneIcon className="h-5 w-5 mr-2 text-[#fb923c]" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <MailIcon className="h-5 w-5 mr-2 text-[#fb923c]" />
                <span>info@larosndo.com</span>
              </li>
              <li className="flex items-center">
                <MapPinIcon className="h-5 w-5 mr-2 text-[#fb923c]" />
                <span>123 Tech Street, Internet City, 12345</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">© 2024 Larosndo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
