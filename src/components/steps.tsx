const steps = [
  {
    step: "1",
    title: "Cek Area & Pilih Paket",
    description:
      "Tentukan paket kecepatan yang sesuai lalu konfirmasi alamat Anda melalui WhatsApp kami.",
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
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 dark:text-white mb-2.5">
            Cara Berlangganan dalam 3 Langkah
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Proses pemasangan transparan dan cepat tanpa menunggu berminggu-minggu.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <div
            aria-hidden="true"
            className="hidden md:block absolute top-5 left-[16%] right-[16%] h-px bg-gray-200 dark:bg-neutral-800"
          />
          {steps.map((item) => (
            <div key={item.step} className="relative flex flex-col items-start md:items-center md:text-center">
              <div className="relative z-10 w-10 h-10 rounded-full bg-brand text-brand-foreground font-bold text-sm tabular-nums flex items-center justify-center mb-4 ring-4 ring-white dark:ring-neutral-950">
                {item.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 max-w-xs">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
