import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Pilihan kecepatan internet apa saja yang tersedia?",
      answer:
        "Untuk paket rumah tersedia pilihan 15 Mbps, 25 Mbps, hingga 50 Mbps, serta paket bisnis & sekolah hingga 1 Gbps. Tim kami siap membantu merekomendasikan paket sesuai jumlah perangkat dan aktivitas Anda.",
    },
    {
      question: "Apakah ada batasan kuota (FUP) pada paket internet?",
      answer:
        "Tidak ada. Seluruh paket internet kami bersifat unlimited tanpa batasan kuota, sehingga Anda dapat bekerja, belajar, dan streaming tanpa khawatir kecepatan turun karena batas kuota.",
    },
    {
      question: "Apakah tersedia layanan khusus untuk bisnis atau sekolah?",
      answer:
        "Ya, kami menyediakan layanan dedicated maupun broadband bisnis dengan dukungan SLA, IP Statis, dan penanganan teknis prioritas untuk sekolah, kampus, kantor, maupun instansi.",
    },
    {
      question: "Wilayah mana saja yang sudah terjangkau jaringan Laros Net?",
      answer:
        "Saat ini jaringan kami menjangkau berbagai kecamatan di Kabupaten Banyuwangi dan terus diperluas. Anda dapat mengecek ketersediaan tiang/ODP di alamat Anda langsung melalui WhatsApp tim kami.",
    },
    {
      question: "Berapa lama proses pemasangan baru berlangsung?",
      answer:
        "Pemasangan standar umumnya memakan waktu 2–3 jam setelah jadwal survei dan penarikan kabel disepakati. Tim teknisi kami akan mengonfirmasi estimasi waktu sebelum berangkat ke lokasi.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800/60">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-gray-900 dark:text-white mb-10 text-balance">
          Pertanyaan Umum
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base font-medium text-gray-900 dark:text-white">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-300 leading-relaxed">
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
