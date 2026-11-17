const steps = [
  {
    step: "1",
    title: "Cek Area & Pilih Paket",
    description:
      "Tentukan paket kecepatan yang sesuai lalu isi formulir pendaftaran atau konfirmasi alamat via WhatsApp.",
  },
  {
    step: "2",
    title: "Survei & Pemasangan Cepat",
    description:
      "Tim teknisi lokal melakukan pengecekan titik ODP dan instalasi fiber optik dalam 1×24 jam.",
  },
  {
    step: "3",
    title: "Internet Langsung Aktif",
    description:
      "Koneksi siap digunakan tanpa batas kuota, didukung tim support lokal 24/7.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-16 sm:py-20 bg-white dark:bg-neutral-950 border-t border-gray-100 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2.5 text-balance">
            Cara Berlangganan dalam 3 Langkah
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Proses pemasangan transparan dan cepat tanpa menunggu berminggu-minggu.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-8 max-w-xl mx-auto md:max-w-none">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-5 left-[16%] right-[16%] h-px bg-gray-200 dark:bg-neutral-800"
          />

          {steps.map((item, idx) => {
            const isLast = idx === steps.length - 1;
            return (
              <div
                key={item.step}
                className={`relative flex flex-row md:flex-col items-start md:items-center md:text-center gap-4 md:gap-0 ${
                  isLast ? "" : "pb-8 md:pb-0"
                }`}
              >
                {!isLast && (
                  <div
                    aria-hidden="true"
                    className="md:hidden absolute left-5 top-10 bottom-0 w-px bg-gray-200 dark:bg-neutral-800"
                  />
                )}

                <div className="relative z-10 w-10 h-10 shrink-0 rounded-full bg-brand text-brand-foreground font-bold text-sm tabular-nums flex items-center justify-center md:mb-4 ring-4 ring-white dark:ring-neutral-950 shadow-sm">
                  {item.step}
                </div>

                <div className="pt-0.5 md:pt-0">
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 md:max-w-xs">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
