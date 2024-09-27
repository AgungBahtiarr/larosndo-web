import { CheckIcon } from "lucide-react";

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

export default PricingSection;
