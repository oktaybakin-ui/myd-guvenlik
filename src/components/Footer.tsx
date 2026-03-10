import Link from "next/link";
import Image from "next/image";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";

const pages = [
  { label: "Ana Sayfa", href: "/" },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "S.S.S", href: "/sss" },
  { label: "İletişim", href: "/iletisim" },
];

const services = [
  "Fiziki Güvenlik",
  "Elektronik Güvenlik",
  "Etkinlik Güvenliği",
  "Yakın Koruma (VIP)",
  "Risk Analizi",
  "Dijital Çözümler",
];

const socialLinks = [
  { Icon: FiFacebook, href: "https://www.facebook.com/p/MYD-%C3%96ZEL-G%C3%9CVENL%C4%B0K-100067031853886/" },
  { Icon: FaXTwitter, href: "#" },
  { Icon: FiInstagram, href: "https://www.instagram.com/mydguvenlik/" },
  { Icon: FiLinkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-light border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image src="/logo.jpg" alt="MYD" width={40} height={40} className="rounded-full" />
              <div className="leading-tight">
                <span className="text-lg font-bold text-white">MYD</span>
                <span className="block text-[9px] text-red tracking-[2px] uppercase font-semibold">Özel Güvenlik</span>
              </div>
            </Link>
            <p className="text-gray-600 text-xs leading-relaxed mb-5">
              Güvenlik hizmetlerinde profesyonel çözümler sunuyor, operasyonlarınızı daha güvenilir ve verimli hale getiriyoruz.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((item, i) => (
                <a key={i} href={item.href} target={item.href !== "#" ? "_blank" : undefined} rel={item.href !== "#" ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 bg-white/5 border border-white/5 rounded-lg flex items-center justify-center hover:bg-red hover:text-white hover:border-red transition-all text-gray-600 text-xs">
                  <item.Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Sayfalar</h4>
            <ul className="space-y-2.5">
              {pages.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 text-xs hover:text-red transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">Hizmetlerimiz</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <Link href="/hizmetler" className="text-gray-600 text-xs hover:text-red transition-colors">{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Hours */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">İletişim</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5">
                <FiPhone className="text-red mt-0.5 flex-shrink-0" size={13} />
                <a href="tel:+905437125904" className="text-gray-600 text-xs hover:text-red transition-colors">0 (543) 712 59 04</a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMail className="text-red mt-0.5 flex-shrink-0" size={13} />
                <a href="mailto:info@mydozelguvenlik.com" className="text-gray-600 text-xs hover:text-red transition-colors">info@mydozelguvenlik.com</a>
              </li>
              <li className="flex items-start gap-2.5">
                <FiMapPin className="text-red mt-0.5 flex-shrink-0" size={13} />
                <span className="text-gray-600 text-xs">İskender Mah. Isparta</span>
              </li>
            </ul>

            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">Çalışma Saatleri</h4>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2.5">
                <FiClock className="text-red mt-0.5 flex-shrink-0" size={13} />
                <div className="text-gray-600 text-xs">
                  <p>Hafta İçi: 08:30 - 18:00</p>
                  <p>Cumartesi: 09:00 - 14:00</p>
                  <p>Pazar: Kapalı</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-gray-700 text-[11px]">&copy; {new Date().getFullYear()} MYD Özel Güvenlik Hizmetleri. Tüm hakları saklıdır.</p>
          <div className="flex gap-5 text-[11px] text-gray-700">
            <a href="#" className="hover:text-red transition-colors">Gizlilik Politikası</a>
            <a href="#" className="hover:text-red transition-colors">Hizmet Şartları</a>
            <a href="#" className="hover:text-red transition-colors">Çerez Politikası</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
