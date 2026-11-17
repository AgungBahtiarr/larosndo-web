const StepsSection = () => {
  const steps = [
    {
      number: "01",
      title: "Cek Area & Pilih Paket",
      description:
        "Tentukan paket kecepatan yang sesuai lalu konfirmasi alamat Anda melalui WhatsApp kami.",
    },
    {
      number: "02",
      title: "Survei & Pemasangan Cepat",
      description:
        "Tim teknisi lokal melakukan pengecekan titik ODP dan instalasi fiber optik dalam 2–3 jam.",
    },
    {
      number: "03",
      title: "Internet Langsung Aktif",
      description:
        "Koneksi siap digunakan tanpa batas kuota, didukung tim support lokal 24/7.",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 text-balance">
            Cara Berlangganan dalam 3 Langkah
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Proses pemasangan transparan dan cepat tanpa menunggu berminggu-minggu.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/70 border border-gray-200/80 dark:border-gray-700/70"
            >
              <span className="inline-block text-sm font-bold tabular-nums text-brand mb-3">
                Langkah {step.number}
              </span>
              <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
