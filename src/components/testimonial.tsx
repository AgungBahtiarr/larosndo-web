import { StarIcon } from "lucide-react";

const ClientReviews = () => {
  const reviews = [
    {
      name: "Rifqi Simanjuntak",
      role: "CEO, TechCorp",
      content:
        "Larosndo has transformed our business connectivity. Their high-speed internet and reliable service have been crucial to our success.",
      rating: 5,
    },
    {
      name: "Ihwan Persneleng",
      role: "Homeowner",
      content:
        "I've never experienced such fast and stable internet at home. Larosndo's customer service is top-notch too!",
      rating: 5,
    },
    {
      name: "Ilham Soundsystem",
      role: "Small Business Owner",
      content:
        "Switching to Larosndo was the best decision for my business. Their internet speed and uptime are unmatched.",
      rating: 4,
    },
    {
      name: "Agung Windows",
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
          Apa yang dikatakan mitra kami
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
              Math.random() * 70,
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

export default ClientReviews;
