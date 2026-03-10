import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const quickLinks = [
  { label: "Ana Sayfa", href: "#anasayfa" },
  { label: "Hakkımızda", href: "#hakkimizda" },
  { label: "Hizmetler", href: "#hizmetler" },
  { label: "Neden Biz", href: "#neden-biz" },
  { label: "SSS", href: "#sss" },
  { label: "İletişim", href: "#iletisim" },
];

const services = [
  "Fiziki Güvenlik",
  "Elektronik Güvenlik",
  "Etkinlik Güvenliği",
  "Yakın Koruma (VIP)",
  "Alarm İzleme",
  "Güvenlik Danışmanlığı",
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center font-bold text-navy text-lg">
                M
              </div>
              <div>
                <span className="text-xl font-bold text-white">MYD</span>
                <span className="block text-[10px] text-gold tracking-[3px] uppercase">
                  Özel Güvenlik
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              MYD Özel Güvenlik Hizmetleri, profesyonel kadrosu ve modern
              teknolojisi ile güvenliğinizi en üst düzeyde sağlar.
            </p>
            <div className="flex gap-3">
              {[FiFacebook, FaXTwitter, FiInstagram, FiLinkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-9 h-9 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-navy hover:border-gold transition-all text-gray-400"
                  >
                    <Icon size={16} />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-5">Hızlı Bağlantılar</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-5">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#hizmetler"
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-5">İletişim</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FiPhone className="text-gold mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">
                  0 (543) 712 59 04
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiMail className="text-gold mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">
                  info@mydozelguvenlik.com
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-gold mt-0.5" size={16} />
                <span className="text-gray-400 text-sm">
                  İskender Mah. 106 Cad. No:36-38/4, Isparta
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} MYD Özel Güvenlik Hizmetleri. Tüm
            hakları saklıdır.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-gold transition-colors">
              Gizlilik Politikası
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Kullanım Şartları
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
