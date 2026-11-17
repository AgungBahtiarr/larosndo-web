import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  CheckCircle2Icon,
  CheckIcon,
  CrosshairIcon,
  MapPinIcon,
  SendIcon,
  XIcon,
} from "lucide-react";

type CategoryKey = "home" | "business";

interface Plan {
  name: string;
  speed: string;
  price: string;
  period?: string;
  tagline: string;
  recommended?: boolean;
  features: string[];
}

interface Coords {
  lat: number;
  lng: number;
}

declare global {
  interface Window {
    L?: {
      map: (el: HTMLElement, opts?: Record<string, unknown>) => any;
      tileLayer: (url: string, opts?: Record<string, unknown>) => any;
      marker: (latlng: [number, number], opts?: Record<string, unknown>) => any;
    };
  }
}

const WHATSAPP_NUMBER = "6282141623298";
const DEFAULT_CENTER: Coords = { lat: -8.259, lng: 114.335 };

const districtOptions = [
  "Banyuwangi Kota",
  "Rogojampi",
  "Glagah",
  "Giri",
  "Kabat",
  "Cluring",
  "Genteng",
  "Srono",
  "Muncar",
  "Singojuruh",
  "Kalibaru",
  "Songgon",
  "Kecamatan Lainnya di Banyuwangi",
];

let leafletPromise: Promise<NonNullable<Window["L"]>> | null = null;

function loadLeaflet(): Promise<NonNullable<Window["L"]>> {
  if (window.L) return Promise.resolve(window.L);
  if (leafletPromise) return leafletPromise;

  leafletPromise = new Promise((resolve, reject) => {
    if (!document.querySelector('link[data-leaflet="true"]')) {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      link.setAttribute("data-leaflet", "true");
      document.head.appendChild(link);
    }

    const script = document.createElement("script");
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js";
    script.async = true;
    script.onload = () => {
      if (window.L) resolve(window.L);
      else reject(new Error("Leaflet gagal dimuat."));
    };
    script.onerror = () => reject(new Error("Gagal memuat peta."));
    document.head.appendChild(script);
  });

  return leafletPromise;
}

const PricingSection = () => {
  const [category, setCategory] = useState<CategoryKey>("home");
  const [selectedPlan, setSelectedPlan] = useState<{
    plan: Plan;
    category: CategoryKey;
  } | null>(null);

  const plansByCategory: Record<CategoryKey, Plan[]> = {
    home: [
      {
        name: "Basic",
        speed: "15 Mbps",
        price: "Rp 100.000",
        period: "/bulan",
        tagline: "Ideal untuk penggunaan rumah & belajar online.",
        features: [
          "Kecepatan unduh hingga 15 Mbps",
          "Kuota unlimited tanpa FUP",
          "Fitur keamanan jaringan dasar",
          "Dukungan pelanggan 24/7",
        ],
      },
      {
        name: "Pro",
        speed: "25 Mbps",
        price: "Rp 150.000",
        period: "/bulan",
        tagline: "Pilihan terbaik untuk keluarga & kerja remote.",
        recommended: true,
        features: [
          "Kecepatan unduh hingga 25 Mbps",
          "Kuota unlimited tanpa FUP",
          "Low latency gaming (ping rendah & stabil)",
          "Proteksi keamanan jaringan lanjutan",
          "Dukungan prioritas 24/7",
          "Gratis sewa modem",
        ],
      },
      {
        name: "Premium",
        speed: "50 Mbps",
        price: "Rp 200.000",
        period: "/bulan",
        tagline: "Performa maksimal untuk rumah pintar & kreator.",
        features: [
          "Kecepatan unduh hingga 50 Mbps",
          "Kuota unlimited tanpa FUP",
          "Low latency gaming & streaming 4K",
          "Proteksi keamanan jaringan lanjutan",
          "Dukungan VIP 24/7",
          "Gratis sewa modem & router",
          "Alamat IP Statis",
        ],
      },
    ],
    business: [
      {
        name: "Bisnis Lite",
        speed: "100 Mbps",
        price: "Rp 750.000",
        period: "/bulan",
        tagline: "Koneksi stabil untuk kantor, ruko, dan UMKM.",
        features: [
          "Bandwidth simetris 100 Mbps",
          "Kuota unlimited tanpa FUP",
          "1 Alamat IP Publik Statis",
          "Dukungan teknis prioritas 24/7",
        ],
      },
      {
        name: "Bisnis Pro",
        speed: "300 Mbps",
        price: "Rp 1.500.000",
        period: "/bulan",
        tagline: "Andalan sekolah, klinik, dan perusahaan menengah.",
        recommended: true,
        features: [
          "Bandwidth dedicated 300 Mbps",
          "Target SLA uptime 99,5%",
          "IP Publik Statis + monitoring proaktif",
          "Penanganan teknisi on-site cepat",
          "Gratis perangkat router enterprise",
        ],
      },
      {
        name: "Enterprise",
        speed: "1 Gbps+",
        price: "Custom",
        tagline: "Solusi khusus kampus, hotel, dan instansi besar.",
        features: [
          "Kapasitas dedicated 1 Gbps ke atas",
          "Jalur backup fiber ganda (redundancy)",
          "SLA khusus & account manager",
          "Dukungan NOC 24/7",
          "Konfigurasi BGP / VLAN sesuai kebutuhan",
        ],
      },
    ],
  };

  const activePlans = plansByCategory[category];

  return (
    <section id="pricing" className="bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 dark:text-white mb-3 text-balance">
            Pilih Paket Internet Anda
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Pilih kategori layanan sesuai kebutuhan dan isi formulir singkat
            untuk pendaftaran pemasangan langsung ke tim kami.
          </p>
        </div>

        <div className="flex justify-center mb-10">
          <div
            role="tablist"
            aria-label="Kategori paket internet"
            className="inline-flex p-1 rounded-full bg-gray-100 dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800"
          >
            <button
              type="button"
              role="tab"
              id="tab-home"
              aria-selected={category === "home"}
              aria-controls="panel-pricing"
              onClick={() => setCategory("home")}
              className={`min-h-10 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                category === "home"
                  ? "bg-brand text-brand-foreground shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Paket Rumah
            </button>
            <button
              type="button"
              role="tab"
              id="tab-business"
              aria-selected={category === "business"}
              aria-controls="panel-pricing"
              onClick={() => setCategory("business")}
              className={`min-h-10 px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand ${
                category === "business"
                  ? "bg-brand text-brand-foreground shadow-sm"
                  : "text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              }`}
            >
              Bisnis &amp; Sekolah
            </button>
          </div>
        </div>

        <div
          id="panel-pricing"
          role="tabpanel"
          aria-labelledby={category === "home" ? "tab-home" : "tab-business"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {activePlans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              onSelect={() => setSelectedPlan({ plan, category })}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          *Semua paket tanpa FUP dan gratis survei lokasi. Tersedia juga layanan
          Internet Dedicated, IP Transit BGP, Metro-E, dan Managed Service untuk
          bisnis maupun instansi di Banyuwangi.
        </p>
      </div>

      {selectedPlan && (
        <RegistrationModal
          plan={selectedPlan.plan}
          category={selectedPlan.category}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </section>
  );
};

const PricingCard = ({
  plan,
  onSelect,
}: {
  plan: Plan;
  onSelect: () => void;
}) => {
  return (
    <div
      className={`rounded-xl overflow-hidden flex flex-col h-full transition-[border-color,box-shadow] duration-200 ${
        plan.recommended
          ? "bg-white dark:bg-neutral-900 border-2 border-brand shadow-lg"
          : "bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-sm hover:shadow-md"
      }`}
    >
      <div className="p-6 sm:p-7 flex-grow">
        <div className="flex items-center justify-between gap-2 mb-2">
          <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {plan.name}
          </h3>
          {plan.recommended && (
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-orange-50 dark:bg-orange-950/60 text-brand">
              Populer
            </span>
          )}
        </div>
        <p className="text-sm font-semibold text-brand tabular-nums mb-3">
          Kecepatan hingga {plan.speed}
        </p>
        <div className="flex items-baseline gap-1 mb-3">
          <span className="text-3xl font-bold tracking-tight tabular-nums text-gray-900 dark:text-white">
            {plan.price}
          </span>
          {plan.period && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {plan.period}
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
          {plan.tagline}
        </p>
        <ul className="space-y-3">
          {plan.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-2.5 text-sm text-gray-700 dark:text-gray-300"
            >
              <CheckIcon
                className="h-4 w-4 text-brand shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-gray-50 dark:bg-neutral-900/80 border-t border-gray-100 dark:border-neutral-800 mt-auto">
        <button
          type="button"
          onClick={onSelect}
          className={`inline-flex items-center justify-center w-full min-h-11 font-semibold py-2.5 px-4 rounded-lg text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 ${
            plan.recommended
              ? "bg-brand hover:bg-brand-hover text-brand-foreground"
              : "bg-gray-900 hover:bg-gray-800 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-white"
          }`}
        >
          Pilih Paket {plan.name}
        </button>
      </div>
    </div>
  );
};

const RegistrationModal = ({
  plan,
  category,
  onClose,
}: {
  plan: Plan;
  category: CategoryKey;
  onClose: () => void;
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [district, setDistrict] = useState(districtOptions[0]);
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [coords, setCoords] = useState<Coords | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [mapLoading, setMapLoading] = useState(false);
  const [geoLoading, setGeoLoading] = useState(false);
  const [mapError, setMapError] = useState("");
  const [error, setError] = useState("");
  const [waLink, setWaLink] = useState("");

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<any>(null);
  const markerRef = useRef<any>(null);

  const categoryLabel = category === "home" ? "Rumah" : "Bisnis & Sekolah";
  const planSummary = `${categoryLabel} - ${plan.name} (${plan.speed}, ${plan.price}${plan.period ?? ""})`;

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
        markerRef.current = null;
      }
    };
  }, [onClose]);

  useEffect(() => {
    if (!showMap || !mapContainerRef.current) return;
    let cancelled = false;

    setMapLoading(true);
    setMapError("");

    loadLeaflet()
      .then((L) => {
        if (cancelled || !mapContainerRef.current) return;
        if (mapInstanceRef.current) {
          mapInstanceRef.current.invalidateSize();
          setMapLoading(false);
          return;
        }

        const start = coords ?? DEFAULT_CENTER;
        const map = L.map(mapContainerRef.current).setView(
          [start.lat, start.lng],
          coords ? 16 : 12,
        );

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "&copy; OpenStreetMap",
          maxZoom: 19,
        }).addTo(map);

        const placeMarker = (lat: number, lng: number) => {
          const rounded = {
            lat: Number(lat.toFixed(6)),
            lng: Number(lng.toFixed(6)),
          };
          setCoords(rounded);
          if (markerRef.current) {
            markerRef.current.setLatLng([rounded.lat, rounded.lng]);
          } else {
            const m = L.marker([rounded.lat, rounded.lng], {
              draggable: true,
            }).addTo(map);
            m.on("dragend", () => {
              const pos = m.getLatLng();
              setCoords({
                lat: Number(pos.lat.toFixed(6)),
                lng: Number(pos.lng.toFixed(6)),
              });
            });
            markerRef.current = m;
          }
        };

        if (coords) {
          placeMarker(coords.lat, coords.lng);
        }

        map.on("click", (e: { latlng: { lat: number; lng: number } }) => {
          placeMarker(e.latlng.lat, e.latlng.lng);
        });

        mapInstanceRef.current = map;
        setMapLoading(false);
      })
      .catch(() => {
        if (!cancelled) {
          setMapError("Gagal memuat peta. Anda tetap dapat mengisi alamat di bawah.");
          setMapLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [showMap]);

  const handleUseCurrentLocation = () => {
    if (!navigator.geolocation) {
      setMapError("Browser tidak mendukung deteksi GPS.");
      return;
    }
    setGeoLoading(true);
    setMapError("");

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const next = {
          lat: Number(pos.coords.latitude.toFixed(6)),
          lng: Number(pos.coords.longitude.toFixed(6)),
        };
        setCoords(next);
        setGeoLoading(false);

        if (mapInstanceRef.current && window.L) {
          mapInstanceRef.current.setView([next.lat, next.lng], 17);
          if (markerRef.current) {
            markerRef.current.setLatLng([next.lat, next.lng]);
          } else {
            const m = window.L.marker([next.lat, next.lng], {
              draggable: true,
            }).addTo(mapInstanceRef.current);
            m.on("dragend", () => {
              const p = m.getLatLng();
              setCoords({
                lat: Number(p.lat.toFixed(6)),
                lng: Number(p.lng.toFixed(6)),
              });
            });
            markerRef.current = m;
          }
        }
      },
      () => {
        setGeoLoading(false);
        setMapError("Izin lokasi ditolak atau GPS tidak aktif. Silakan klik titik di peta.");
      },
      { enableHighAccuracy: true, timeout: 10000 },
    );
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const cleanName = name.trim();
    const cleanPhone = phone.replace(/[^\d+]/g, "");
    const cleanAddress = address.trim();

    if (!cleanName) {
      setError("Mohon isi nama lengkap Anda.");
      return;
    }
    if (cleanPhone.length < 9) {
      setError("Mohon isi nomor WhatsApp aktif yang valid.");
      return;
    }
    if (!cleanAddress) {
      setError("Mohon isi alamat pemasangan lengkap beserta patokan.");
      return;
    }

    setError("");

    const lines = [
      "Halo PT Lare Osing Ndo, saya ingin mendaftar pasang WiFi baru:",
      "",
      `• Paket Dipilih: ${planSummary}`,
      `• Nama: ${cleanName}`,
      `• No. WhatsApp: ${phone.trim()}`,
      `• Kecamatan: ${district}`,
      `• Alamat Pemasangan: ${cleanAddress}`,
    ];
    if (coords) {
      lines.push(
        `• Titik Lokasi (Maps): https://maps.google.com/?q=${coords.lat},${coords.lng}`,
      );
    }
    if (notes.trim()) {
      lines.push(`• Catatan: ${notes.trim()}`);
    }

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
    setWaLink(url);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-daftar-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white dark:bg-neutral-900 border border-gray-200 dark:border-neutral-800 shadow-2xl p-6 sm:p-7">
        <button
          type="button"
          onClick={onClose}
          aria-label="Tutup formulir pendaftaran"
          className="absolute top-4 right-4 w-9 h-9 rounded-lg inline-flex items-center justify-center text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
        >
          <XIcon className="h-5 w-5" aria-hidden="true" />
        </button>

        <div className="pr-10 mb-5">
          <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full bg-brand/10 text-brand mb-2">
            {planSummary}
          </span>
          <h3
            id="modal-daftar-title"
            className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white"
          >
            Formulir Pendaftaran WiFi
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1">
            Isi data di bawah ini, lalu kirim langsung ke WhatsApp tim kami.
          </p>
        </div>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div>
            <label
              htmlFor="modal-reg-name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Nama Lengkap <span className="text-brand">*</span>
            </label>
            <input
              id="modal-reg-name"
              type="text"
              required
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Contoh: Budi Santoso"
              className="w-full min-h-11 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="modal-reg-phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Nomor WhatsApp <span className="text-brand">*</span>
              </label>
              <input
                id="modal-reg-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Contoh: 081234567890"
                className="w-full min-h-11 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              />
            </div>

            <div>
              <label
                htmlFor="modal-reg-district"
                className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
              >
                Kecamatan
              </label>
              <select
                id="modal-reg-district"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full min-h-11 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
              >
                {districtOptions.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="modal-reg-address"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Alamat Pemasangan Lengkap <span className="text-brand">*</span>
            </label>
            <textarea
              id="modal-reg-address"
              rows={2}
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Nama jalan / perumahan, RT/RW, desa/kelurahan, dan patokan terdekat"
              className="w-full px-3.5 py-2 rounded-xl border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            />
          </div>

          <div>
            <span className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1.5">
              Titik Lokasi Peta{" "}
              <span className="text-xs font-normal text-gray-500">
                (opsional, agar teknisi lebih akurat)
              </span>
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setShowMap((prev) => !prev)}
                className="inline-flex items-center gap-1.5 min-h-10 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-950 hover:border-brand text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <MapPinIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                {showMap ? "Tutup Peta" : "Pilih Titik di Peta"}
              </button>
              <button
                type="button"
                onClick={handleUseCurrentLocation}
                disabled={geoLoading}
                className="inline-flex items-center gap-1.5 min-h-10 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-950 hover:border-brand text-xs sm:text-sm font-medium text-gray-800 dark:text-gray-200 transition-colors disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              >
                <CrosshairIcon className="h-4 w-4 text-brand" aria-hidden="true" />
                {geoLoading ? "Mendeteksi GPS..." : "Gunakan Lokasi Saya"}
              </button>
            </div>

            {coords && (
              <div className="mt-2 flex items-center justify-between gap-2 px-3 py-2 rounded-lg bg-brand/10 text-xs text-gray-800 dark:text-gray-200">
                <span className="font-mono tabular-nums">
                  Pin: {coords.lat}, {coords.lng}
                </span>
                <button
                  type="button"
                  onClick={() => {
                    setCoords(null);
                    if (markerRef.current && mapInstanceRef.current) {
                      mapInstanceRef.current.removeLayer(markerRef.current);
                      markerRef.current = null;
                    }
                  }}
                  className="text-brand font-semibold hover:underline"
                >
                  Hapus
                </button>
              </div>
            )}

            {mapError && (
              <p className="mt-1.5 text-xs text-red-600 dark:text-red-400">
                {mapError}
              </p>
            )}

            {showMap && (
              <div className="mt-2.5 rounded-xl overflow-hidden border border-gray-200 dark:border-neutral-700">
                <div className="px-3 py-1.5 bg-gray-50 dark:bg-neutral-800 text-[11px] text-gray-600 dark:text-gray-300 border-b border-gray-200 dark:border-neutral-700">
                  {mapLoading
                    ? "Memuat peta..."
                    : "Klik atau geser pin pada peta ke titik rumah Anda."}
                </div>
                <div
                  ref={mapContainerRef}
                  className="w-full h-56 bg-gray-100 dark:bg-neutral-950"
                />
              </div>
            )}
          </div>

          <div>
            <label
              htmlFor="modal-reg-notes"
              className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
            >
              Catatan Tambahan{" "}
              <span className="text-xs font-normal text-gray-500">
                (opsional)
              </span>
            </label>
            <input
              id="modal-reg-notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Contoh: minta survei sore hari"
              className="w-full min-h-11 px-3.5 py-2 rounded-xl border border-gray-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-sm text-gray-900 dark:text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent"
            />
          </div>

          {error && (
            <p
              role="alert"
              className="text-sm font-medium text-red-600 dark:text-red-400"
            >
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 min-h-12 px-6 py-3 rounded-xl bg-brand hover:bg-brand-hover text-brand-foreground font-semibold text-sm sm:text-base transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2"
          >
            <SendIcon className="h-4 w-4" aria-hidden="true" />
            Kirim ke WhatsApp
          </button>

          {waLink && (
            <div
              role="status"
              className="flex items-start gap-2.5 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900 text-xs sm:text-sm text-emerald-800 dark:text-emerald-200"
            >
              <CheckCircle2Icon
                className="h-4 w-4 shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div>
                Jika WhatsApp tidak terbuka otomatis,{" "}
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold underline hover:no-underline"
                >
                  klik di sini untuk mengirim sekarang
                </a>
                .
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default PricingSection;
