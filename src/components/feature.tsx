import {
  WifiIcon,
  GlobeIcon,
  ShieldCheckIcon,
  HeadphonesIcon,
  RocketIcon,
} from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Layanan Kami
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

export default FeaturesSection;
