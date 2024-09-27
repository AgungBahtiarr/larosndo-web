import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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

export default FAQSection;
