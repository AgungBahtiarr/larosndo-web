export interface DistrictPage {
  slug: string;
  name: string;
  headline: string;
  description: string;
  nearbyAreas: string[];
  installEstimate: string;
  highlight: string;
}

export interface GuideArticle {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  category: string;
  sections: {
    heading: string;
    paragraphs: string[];
    bullets?: string[];
  }[];
}

export const banyuwangiDistricts: DistrictPage[] = [
  {
    slug: "banyuwangi-kota",
    name: "Banyuwangi Kota",
    headline: "Pasang WiFi & Internet Fiber di Banyuwangi Kota",
    description:
      "Layanan pasang WiFi rumah tanpa FUP dan internet dedicated bisnis di Kecamatan Banyuwangi Kota mulai Rp 100.000/bulan. Pemasangan cepat 1x24 jam oleh teknisi lokal.",
    nearbyAreas: [
      "Taman Baru",
      "Kepatihan",
      "Kebalenan",
      "Sobo",
      "Tukangkayu",
      "Pakis",
      "Karangrejo",
      "Lateng",
    ],
    installEstimate: "1x24 jam",
    highlight:
      "Pusat aktivitas perkantoran, perbankan, kampus, dan perumahan dengan jalur fiber optik berkapasitas tinggi serta dukungan teknisi standby setiap hari.",
  },
  {
    slug: "rogojampi",
    name: "Rogojampi",
    headline: "Pasang WiFi & Internet Fiber di Rogojampi, Banyuwangi",
    description:
      "Pasang WiFi fiber optik cepat dan stabil di Rogojampi, Banyuwangi mulai Rp 100.000/bulan tanpa FUP. Dekat kantor pusat PT Lare Osing Ndo dengan respon teknisi tercepat.",
    nearbyAreas: [
      "Gitik",
      "Karangbendo",
      "Kedaleman",
      "Gladag",
      "Bubuk",
      "Lemahbangdewo",
      "Pengatigan",
      "Aliyan",
    ],
    installEstimate: "Same-day / < 24 jam",
    highlight:
      "Berada tepat di pusat operasional PT Lare Osing Ndo (Jl. Wijaya Kusuma, Gitik), menjadikan area Rogojampi prioritas utama instalasi dan penanganan gangguan.",
  },
  {
    slug: "glagah",
    name: "Glagah",
    headline: "Pasang WiFi & Internet Fiber di Glagah, Banyuwangi",
    description:
      "Internet fiber optik unlimited tanpa FUP untuk rumah, villa, homestay, dan sekolah di Kecamatan Glagah, Banyuwangi mulai Rp 100.000/bulan.",
    nearbyAreas: [
      "Bakungan",
      "Banjarsari",
      "Kemiren",
      "Olehsari",
      "Paspan",
      "Rejosari",
      "Tamansuruh",
      "Licin sekitarnya",
    ],
    installEstimate: "1x24 jam",
    highlight:
      "Mendukung kebutuhan koneksi stabil untuk kawasan wisata, homestay, sekolah kejuruan, dan permukiman warga di wilayah Glagah.",
  },
  {
    slug: "giri",
    name: "Giri",
    headline: "Pasang WiFi & Internet Fiber di Giri, Banyuwangi",
    description:
      "Pasang WiFi cepat tanpa FUP di Kecamatan Giri, Banyuwangi. Cocok untuk rumah tangga, kos mahasiswa, sekolah, dan usaha kuliner mulai Rp 100.000/bulan.",
    nearbyAreas: [
      "Mojopanggung",
      "Penataban",
      "Boyolangu",
      "Grogol",
      "Jambesari",
    ],
    installEstimate: "1x24 jam",
    highlight:
      "Jaringan fiber optik merata di kawasan pendidikan dan perumahan Giri dengan latensi rendah untuk belajar daring, kerja remote, dan gaming.",
  },
  {
    slug: "kabat",
    name: "Kabat",
    headline: "Pasang WiFi & Internet Fiber di Kabat, Banyuwangi",
    description:
      "Layanan WiFi rumah unlimited tanpa FUP dan internet bisnis di Kecamatan Kabat, Banyuwangi mulai Rp 100.000/bulan dengan jalur backbone stabil.",
    nearbyAreas: [
      "Kabat",
      "Tambong",
      "Macanputih",
      "Dadapan",
      "Bunder",
      "Pondoknongko",
      "Pakistaji",
      "Badean",
    ],
    installEstimate: "1x24 jam",
    highlight:
      "Melayani koridor strategis antara Banyuwangi Kota dan Rogojampi termasuk area Bandara Banyuwangi, pergudangan, dan perumahan baru.",
  },
  {
    slug: "cluring",
    name: "Cluring",
    headline: "Pasang WiFi & Internet Fiber di Cluring, Banyuwangi",
    description:
      "Pasang WiFi fiber optik tanpa batasan kuota (non-FUP) di Kecamatan Cluring, Banyuwangi mulai Rp 100.000/bulan. Stabil untuk rumah, toko, dan kantor.",
    nearbyAreas: [
      "Benculuk",
      "Cluring",
      "Kaliploso",
      "Plampangrejo",
      "Sarimulyo",
      "Sembulung",
      "Tamanagung",
      "Tampo",
    ],
    installEstimate: "1-2 hari kerja",
    highlight:
      "Menghadirkan alternatif koneksi fiber optik yang konsisten bagi keluarga dan pelaku UMKM di wilayah selatan Banyuwangi.",
  },
  {
    slug: "genteng",
    name: "Genteng",
    headline: "Pasang WiFi & Internet Fiber di Genteng, Banyuwangi",
    description:
      "Layanan internet fiber optik cepat tanpa FUP dan dedicated bisnis di Kecamatan Genteng, Banyuwangi mulai Rp 100.000/bulan.",
    nearbyAreas: [
      "Genteng Kulon",
      "Genteng Wetan",
      "Kembiritan",
      "Setail",
      "Kaligondo",
    ],
    installEstimate: "1-2 hari kerja",
    highlight:
      "Mendukung pusat perdagangan, klinik, sekolah, dan perumahan di Genteng dengan koneksi fiber berkecepatan penuh dan dukungan NOC 24/7.",
  },
  {
    slug: "srono",
    name: "Srono",
    headline: "Pasang WiFi & Internet Fiber di Srono, Banyuwangi",
    description:
      "Pasang WiFi rumah unlimited tanpa FUP di Kecamatan Srono, Banyuwangi mulai Rp 100.000/bulan. Rute jaringan langsung dan anti lemot.",
    nearbyAreas: [
      "Bagorejo",
      "Kebaman",
      "Kepundungan",
      "Parijatah Kulon",
      "Parijatah Wetan",
      "Rejoagung",
      "Sukomaju",
      "Sumbersari",
    ],
    installEstimate: "1-2 hari kerja",
    highlight:
      "Terhubung dengan jaringan distribusi fiber Banyuwangi selatan yang dirancang untuk meminimalkan gangguan saat jam sibuk.",
  },
  {
    slug: "muncar",
    name: "Muncar",
    headline: "Pasang WiFi & Internet Fiber di Muncar, Banyuwangi",
    description:
      "Internet fiber optik cepat untuk rumah, cold storage, pabrik, dan kantor di Kecamatan Muncar, Banyuwangi mulai Rp 100.000/bulan.",
    nearbyAreas: [
      "Blambangan",
      "Kedungrejo",
      "Kedungringin",
      "Kumendung",
      "Sumberberas",
      "Sumbersewu",
      "Tambakrejo",
      "Tembokrejo",
      "Wringinputih",
    ],
    installEstimate: "1-2 hari kerja",
    highlight:
      "Melayani kebutuhan operasional industri perikanan, UMKM, hingga WiFi keluarga di Muncar dengan stabilitas tinggi dan tanpa FUP.",
  },
  {
    slug: "singojuruh",
    name: "Singojuruh",
    headline: "Pasang WiFi & Internet Fiber di Singojuruh, Banyuwangi",
    description:
      "Pasang WiFi fiber optik tanpa FUP di Kecamatan Singojuruh, Banyuwangi mulai Rp 100.000/bulan. Proses pendaftaran mudah langsung via WhatsApp.",
    nearbyAreas: [
      "Alasmalang",
      "Benelan Kidul",
      "Cantuk",
      "Gambor",
      "Gumirih",
      "Kemiri",
      "Lemahbang Kulon",
      "Padang",
      "Singojuruh",
    ],
    installEstimate: "1-2 hari kerja",
    highlight:
      "Jalur fiber menjangkau kawasan perdesaan dan jalan utama Singojuruh agar warga tetap bisa menikmati internet cepat setara perkotaan.",
  },
  {
    slug: "kalibaru",
    name: "Kalibaru",
    headline: "Pasang WiFi & Internet Fiber di Kalibaru, Banyuwangi",
    description:
      "Layanan internet fiber optik stabil di Kecamatan Kalibaru, Banyuwangi untuk rumah tangga, sekolah, dan usaha mulai Rp 100.000/bulan.",
    nearbyAreas: [
      "Banyuanyar",
      "Kajarharjo",
      "Kalibaru Kulon",
      "Kalibaru Manis",
      "Kalibaru Wetan",
      "Kebonrejo",
    ],
    installEstimate: "1-2 hari kerja",
    highlight:
      "Membawa koneksi internet kabel fiber optik yang tahan cuaca untuk wilayah pegunungan dan perkebunan di Kalibaru.",
  },
  {
    slug: "songgon",
    name: "Songgon",
    headline: "Pasang WiFi & Internet Fiber di Songgon, Banyuwangi",
    description:
      "Pasang WiFi fiber optik unlimited tanpa FUP di Kecamatan Songgon, Banyuwangi mulai Rp 100.000/bulan untuk rumah, destinasi wisata, dan kantor.",
    nearbyAreas: [
      "Balak",
      "Bangunsari",
      "Bayu",
      "Bedewang",
      "Parangharjo",
      "Songgon",
      "Sragi",
      "Sumberarum",
      "Sumberbulu",
    ],
    installEstimate: "1-2 hari kerja",
    highlight:
      "Mendukung konektivitas desa wisata, kafe alam, sekolah, dan rumah warga di Kecamatan Songgon dengan jaringan fiber optik terkelola.",
  },
];

export const guideArticles: GuideArticle[] = [
  {
    slug: "memilih-wifi-rumah-tanpa-fup-banyuwangi",
    title: "Cara Memilih Paket WiFi Rumah Tanpa FUP di Banyuwangi",
    description:
      "Panduan praktis memilih kecepatan WiFi rumah (15 Mbps, 25 Mbps, atau 50 Mbps) dan memahami pentingnya internet tanpa FUP agar koneksi tetap cepat sepanjang bulan.",
    publishedAt: "2026-11-10",
    readTime: "4 menit baca",
    category: "Panduan Pelanggan",
    sections: [
      {
        heading: "Apa Itu FUP dan Mengapa Penting Menghindarinya?",
        paragraphs: [
          "FUP (Fair Usage Policy) adalah batas pemakaian wajar yang sering diterapkan penyedia internet. Ketika kuota bulanan melewati angka tertentu, kecepatan internet otomatis diturunkan drastis meski tagihan tetap sama.",
          "Di PT Lare Osing Ndo, seluruh paket rumah maupun bisnis hadir tanpa FUP. Kecepatan 15 Mbps, 25 Mbps, atau 50 Mbps yang Anda pilih tetap penuh dari tanggal 1 hingga akhir bulan.",
        ],
      },
      {
        heading: "Menyesuaikan Kecepatan dengan Jumlah Perangkat",
        paragraphs: [
          "Agar tidak salah memilih paket dan tetap hemat, hitung jumlah perangkat aktif yang digunakan bersamaan di rumah:",
        ],
        bullets: [
          "Paket Basic 15 Mbps (Rp 100.000/bulan): Ideal untuk 2–4 perangkat (browsing, media sosial, belajar daring, dan streaming HD).",
          "Paket Pro 25 Mbps (Rp 150.000/bulan): Cocok untuk keluarga 4–7 perangkat, kerja WFH video call lancar, serta main game online dengan ping rendah.",
          "Paket Premium 50 Mbps (Rp 200.000/bulan): Pilihan terbaik untuk 7+ perangkat, smart TV 4K, unggah konten kreator, hingga CCTV rumah.",
        ],
      },
      {
        heading: "Cek Kualitas Dukungan Teknisi Lokal",
        paragraphs: [
          "Selain harga dan kecepatan, pastikan penyedia internet memiliki tim teknisi yang berdomisili di Banyuwangi. Ketika terjadi kendala kabel putus atau gangguan perangkat, teknisi lokal dapat datang jauh lebih cepat dibanding layanan yang harus menunggu antrean pusat.",
        ],
      },
    ],
  },
  {
    slug: "cara-cek-odp-dan-proses-pasang-wifi-fiber",
    title: "Mengenal Titik ODP Fiber Optik dan Alur Pemasangan WiFi Baru",
    description:
      "Pahami apa itu ODP (Optical Distribution Point), cara mengecek ketersediaan jaringan di depan rumah Anda di Banyuwangi, dan tahapan instalasi hingga WiFi aktif.",
    publishedAt: "2026-11-12",
    readTime: "3 menit baca",
    category: "Teknis Jaringan",
    sections: [
      {
        heading: "Apa Itu ODP pada Jaringan Fiber Optik?",
        paragraphs: [
          "ODP (Optical Distribution Point) adalah kotak distribusi fiber optik yang biasanya terpasang di tiang jaringan sekitar perumahan atau jalan utama. Dari kotak ODP inilah kabel fiber ditarik menuju modem (ONT) di dalam rumah Anda.",
          "Jarak rumah ke titik ODP menentukan apakah lokasi Anda bisa langsung dipasang dalam hitungan jam atau memerlukan penarikan jalur tambahan.",
        ],
      },
      {
        heading: "3 Langkah Cepat Pemasangan di PT Lare Osing Ndo",
        paragraphs: [
          "Anda tidak perlu datang ke kantor untuk mengecek ketersediaan ODP di wilayah Banyuwangi. Cukup ikuti alur berikut:",
        ],
        bullets: [
          "Pilih paket di halaman utama lalu kirim titik lokasi peta (pin koordinat) atau alamat lengkap melalui formulir pendaftaran WhatsApp.",
          "Tim teknis kami memeriksa jarak titik ODP terdekat di kecamatan Anda dalam hitungan menit.",
          "Jika ODP tersedia, teknisi lokal menjadwalkan instalasi dalam 1x24 jam hingga WiFi aktif dan siap digunakan.",
        ],
      },
    ],
  },
  {
    slug: "internet-dedicated-vs-broadband-untuk-bisnis-sekolah",
    title: "Perbedaan Internet Dedicated dan Broadband untuk Kantor & Sekolah",
    description:
      "Kapan instansi, sekolah, atau perusahaan di Banyuwangi membutuhkan Internet Dedicated simetris dengan SLA 99,5% dibanding paket broadband biasa?",
    publishedAt: "2026-11-15",
    readTime: "5 menit baca",
    category: "Solusi Bisnis",
    sections: [
      {
        heading: "Perbandingan Rasio Bandwidth dan Kecepatan Upload",
        paragraphs: [
          "Internet broadband rumahan umumnya membagi kapasitas jalur dengan beberapa pelanggan di area sekitar (shared bandwidth) dan memiliki kecepatan unduh lebih besar dari unggah.",
          "Sebaliknya, Internet Dedicated menyediakan rasio 1:1 dengan kecepatan simetris (upload dan download sama besar). Ini sangat krusial untuk server sekolah, ujian CBT/ANBK, sistem kasir cloud, dan transfer data kantor cabang.",
        ],
      },
      {
        heading: "Keunggulan Multi-Link Backbone dan IP Publik Statis",
        paragraphs: [
          "Layanan bisnis PT Lare Osing Ndo (AS149714) berjalan di atas infrastruktur multi-link backbone dengan mekanisme auto-failover ke berbagai Internet Exchange (IXP) di Indonesia:",
        ],
        bullets: [
          "Tersedia target SLA uptime 99,5% dengan monitoring jaringan proaktif 24/7 oleh NOC.",
          "Mendukung 1 atau lebih IP Publik Statis untuk keperluan VPN, CCTV jarak jauh, atau server lokal.",
          "Opsi konfigurasi BGP, VLAN, IP Transit, maupun Metro-E sesuai skala sekolah, kampus, dan perusahaan di Banyuwangi.",
        ],
      },
    ],
  },
];
