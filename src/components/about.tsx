import { useState } from "react";

import {
  LightbulbIcon,
  UsersIcon,
  TrendingUpIcon,
  WifiIcon,
  GlobeIcon,
  RssIcon,
} from "lucide-react";
import { motion } from "framer-motion";

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

export default AboutSection;
